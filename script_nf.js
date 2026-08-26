function doGet(e) {
  const acao = e?.parameter?.acao;

  if (acao === 'logCliente') {
    registrarLog({
      origem: "CLIENTE",
      etapa: e?.parameter?.etapa || "ERRO_CLIENTE",
      filial: e?.parameter?.filial || "",
      chave: e?.parameter?.chave || "",
      erro: e?.parameter?.erro || "Erro não informado",
      detalhes: e?.parameter?.detalhes || "",
      requestId: e?.parameter?.requestId || "",
      userAgent: e?.parameter?.userAgent || ""
    });
    return criarResposta(true, { registrado: true });
  }

  if (acao === 'resultado') {
    const requestId = e?.parameter?.requestId?.toString().trim() || "";
    if (!requestId) return criarResposta(false, "Request ID não informado.");

    const resultado = obterResultadoConsulta(requestId);
    if (!resultado) return criarResposta(false, "Resultado ainda não disponível.");

    return ContentService
      .createTextOutput(JSON.stringify(resultado))
      .setMimeType(ContentService.MimeType.JSON);
  }

  if (acao === 'historico' && e.parameter.filial) {
    return criarResposta(true, []);
  }
  return handleConsulta(e);
}

function doPost(e) {
  return handleConsulta(e);
}

function handleConsulta(e) {
  if (!e || !e.parameter || !e.parameter.chave || !e.parameter.filial) {
    return criarResposta(false, "Parâmetros obrigatórios faltando (chave e filial).");
  }

  const chave = e.parameter.chave.toString().trim();
  const filial = e.parameter.filial.toString().trim();
  const requestId = e.parameter.requestId?.toString().trim() || "";
  const userAgent = e.parameter.userAgent?.toString().trim() || "";
  let etapaAtual = "VALIDACAO";
  const inicioConsulta = new Date().getTime();

  registrarLog({
    origem: "SERVIDOR",
    etapa: "INICIO_CONSULTA",
    filial,
    chave,
    erro: "",
    detalhes: "Consulta recebida pelo Apps Script.",
    requestId,
    userAgent
  });

  const abasPorFilial = {
    "293": "ARTUR",
    "488": "FLORIANO",
    "287": "JOTA",
    "761": "MODA",
    "288": "PONTO",
    "1849": "DIVINA",
    "1848": "ITAUNA"
  };

  if (chave.length !== 44) {
    registrarLog({
      origem: "SERVIDOR",
      etapa: "VALIDACAO_CHAVE",
      filial,
      chave,
      erro: "Chave inválida.",
      detalhes: "A chave não possui 44 caracteres.",
      requestId,
      userAgent
    });
    return criarResposta(false, "Chave deve conter exatamente 44 caracteres.");
  }

  if (!abasPorFilial[filial]) {
    registrarLog({
      origem: "SERVIDOR",
      etapa: "VALIDACAO_FILIAL",
      filial,
      chave,
      erro: "Filial inválida.",
      detalhes: "Código de filial não localizado no mapa.",
      requestId,
      userAgent
    });
    return criarResposta(false, "Código de filial inválido.");
  }

  const cache = CacheService.getScriptCache();
  const chaveProcessamento = "PROC_" + filial + "_" + chave;
  if (cache.get(chaveProcessamento)) {
    registrarLog({
      origem: "SERVIDOR",
      etapa: "CHAVE_EM_PROCESSAMENTO",
      filial,
      chave,
      erro: "A chave já estava marcada no cache.",
      detalhes: "A consulta foi recusada antes da leitura da planilha.",
      requestId,
      userAgent
    });
    return criarResposta(false, "Chave em processamento. Aguarde...");
  }
  cache.put(chaveProcessamento, "ok", 30);

  try {
    etapaAtual = "ABRIR_PLANILHA_ORIGEM";
    const planilhaOrigem = SpreadsheetApp.openById("1R1Hq4kp7eaf9XfEVNCNFpUFjz3eLFcWqNl6QQx-QAew");

    etapaAtual = "LOCALIZAR_ABA_FILIAL";
    const abaOrigem = planilhaOrigem.getSheetByName(abasPorFilial[filial]);

    etapaAtual = "OBTER_ULTIMA_LINHA";
    const ultimaLinha = abaOrigem.getLastRow();
    const agora = Utilities.formatDate(new Date(), "GMT-3", "dd/MM/yyyy HH:mm");

    if (ultimaLinha < 2) {

      const resultadoInvalido = {
        success: true,
        data: {
          dataRegistro: agora,
          numeroNF: "-",
          valorTotal: "R$ 0,00",
          quantidadeTotal: "0",
          status: "INVÁLIDA"
        }
      };

      salvarResultadoConsulta(requestId, resultadoInvalido);
      return ContentService
        .createTextOutput(JSON.stringify(resultadoInvalido))
        .setMimeType(ContentService.MimeType.JSON);
    }

    etapaAtual = "LER_DADOS_DA_ABA";
    const todasAsLinhas = abaOrigem.getRange(2, 1, ultimaLinha - 1, 13).getValues();

    etapaAtual = "MAPEAR_CHAVES";
    const colChaves = todasAsLinhas.map(l => l[7]);

    etapaAtual = "LOCALIZAR_CHAVE";
    const index = colChaves.findIndex(c => c?.toString().trim() === chave);

    if (index === -1) {

      const resultadoInvalido = {
        success: true,
        data: {
          dataRegistro: agora,
          numeroNF: "-",
          valorTotal: "R$ 0,00",
          quantidadeTotal: "0",
          status: "INVÁLIDA"
        }
      };

      salvarResultadoConsulta(requestId, resultadoInvalido);
      return ContentService
        .createTextOutput(JSON.stringify(resultadoInvalido))
        .setMimeType(ContentService.MimeType.JSON);
    }

    etapaAtual = "FILTRAR_LINHAS_DA_NOTA";
    const linhasIguais = todasAsLinhas.filter(l => l[7]?.toString().trim() === chave);

    let linhaBase = linhasIguais.find(l => {
      const bruto = l[5];
      return bruto !== "" && bruto !== null && bruto !== undefined && bruto !== 0 && bruto !== "0" && bruto !== "0,00";
    }) || linhasIguais[0];

    const numeroNF = linhaBase[1]?.toString().trim() || "-";

    const valorBruto = linhaBase[5];
    let valorNumerico = 0;

    if (typeof valorBruto === "number") {
      valorNumerico = valorBruto;
    } else {
      let s = (valorBruto ?? "").toString().trim();

      s = s.replace(/[^\d.,-]/g, '');
      s = s.replace(/,$/, '');

      if (s.includes('.') && s.includes(',')) {
        s = s.replace(/\./g, '').replace(',', '.');
      } else if (s.includes(',')) {
        s = s.replace(',', '.');
      }

      valorNumerico = parseFloat(s) || 0;
    }

    const valorFormatado = valorNumerico.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    const quantidadeTotal = linhaBase[12]?.toString().trim() || "0";
    const quantidadeNumerica = parseFloat(quantidadeTotal.replace(',', '.')) || 0;

    const codigosUnicos = linhasIguais
      .map(l => [l[2]?.toString().trim(), l[3]?.toString().trim()])
      .filter((v, i, arr) =>
        arr.findIndex(x => x[0] === v[0] && x[1] === v[1]) === i
      );

    etapaAtual = "VERIFICAR_DUPLICIDADE";

    if (notaJaConsultada(filial, numeroNF)) {
      const resultadoJaConsultado = {
        success: true,
        data: {
          dataRegistro: agora,
          numeroNF,
          valorTotal: valorFormatado,
          quantidadeTotal,
          quantidadeTotalNumero: quantidadeNumerica,
          status: "VÁLIDA",
          jaConsultada: true
        }
      };

      salvarResultadoConsulta(requestId, resultadoJaConsultado);

      registrarLog({
        origem: "SERVIDOR",
        etapa: "NOTA_JA_CONSULTADA",
        filial,
        chave,
        erro: "",
        detalhes: "NF " + numeroNF + " já constava no histórico. Nenhum item foi gravado novamente.",
        requestId,
        userAgent
      });

      return ContentService
        .createTextOutput(JSON.stringify(resultadoJaConsultado))
        .setMimeType(ContentService.MimeType.JSON);
    }

    etapaAtual = "REGISTRAR_ITENS";
    registrarItensBasico({
      numeroNF,
      itens: codigosUnicos,
      filial,
      chave,
      requestId,
      userAgent
    });

    etapaAtual = "REGISTRAR_HISTORICO";
    registrarHistoricoConsulta(
      filial,
      numeroNF,
      valorFormatado,
      quantidadeTotal,
      chave,
      requestId,
      userAgent
    );

    etapaAtual = "CRIAR_RESPOSTA";

    registrarLog({
      origem: "SERVIDOR",
      etapa: "FIM_SUCESSO",
      filial,
      chave,
      erro: "",
      detalhes: [
        "Consulta concluída em " + (new Date().getTime() - inicioConsulta) + " ms.",
        "NF: " + numeroNF,
        "Valor: " + valorFormatado,
        "Quantidade: " + quantidadeTotal,
        "Itens únicos: " + codigosUnicos.length
      ].join(" | "),
      requestId,
      userAgent
    });

    const resultadoFinal = {
      success: true,
      data: {
        dataRegistro: agora,
        numeroNF,
        valorTotal: valorFormatado,
        quantidadeTotal,
        quantidadeTotalNumero: quantidadeNumerica,
        status: "VÁLIDA",
        jaConsultada: false
      }
    };

    salvarResultadoConsulta(requestId, resultadoFinal);

    return ContentService
      .createTextOutput(JSON.stringify(resultadoFinal))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error("Erro:", error);

    registrarLog({
      origem: "SERVIDOR",
      etapa: etapaAtual,
      filial,
      chave,
      erro: error?.message || String(error),
      detalhes: error?.stack || "",
      requestId,
      userAgent
    });

    const resultadoErro = {
      success: false,
      message: "Erro no servidor: " + error.message
    };

    salvarResultadoConsulta(requestId, resultadoErro);

    return ContentService
      .createTextOutput(JSON.stringify(resultadoErro))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function criarResposta(sucesso, conteudo) {
  const resposta = {
    success: sucesso,
    [sucesso ? "data" : "message"]: conteudo
  };
  return ContentService
    .createTextOutput(JSON.stringify(resposta))
    .setMimeType(ContentService.MimeType.JSON);
}

function registrarItensBasico(dados) {
  try {
    const planilhaDestino = SpreadsheetApp.openById("1hZBxcL8GWNlAvsAJaFt0-lWuGM9PIZ3fIuHufyMHmBA");

    const nomeAba = {
      "293": "Artur",
      "488": "Floriano",
      "287": "Jota",
      "761": "Moda",
      "288": "Ponto",
      "1849": "Divina",
      "1848": "Itauna"
    }[dados.filial];

    const abaDestino = planilhaDestino.getSheetByName(nomeAba);
    const abaCSV = planilhaDestino.getSheetByName("CSV");
    if (!abaDestino || !abaCSV) return;

    const agora = Utilities.formatDate(new Date(), "GMT-3", "dd/MM/yyyy HH:mm");

    const valoresDestino = [];
    const formulasDestino = [];
    const valoresCSV = [];
    const formulasCSV = [];

    let linhaDest = abaDestino.getLastRow() + 1;
    let linhaCSV = abaCSV.getLastRow() + 1;

    dados.itens.forEach(([codigo, cor], index) => {
      valoresDestino.push([agora, dados.numeroNF, codigo]);
      formulasDestino.push([`=VLOOKUP(C${linhaDest + index};Leonardo!E:F;2;0)`]);

      valoresCSV.push([dados.filial, codigo, cor, ""]);
      formulasCSV.push([`=VLOOKUP(B${linhaCSV + index};Leonardo!E:F;2;0)`]);
    });

    abaDestino
      .getRange(linhaDest, 1, valoresDestino.length, 3)
      .setNumberFormat("@")
      .setValues(valoresDestino);

    abaDestino
      .getRange(linhaDest, 4, formulasDestino.length, 1)
      .setFormulas(formulasDestino);

    abaCSV
      .getRange(linhaCSV, 1, valoresCSV.length, 4)
      .setNumberFormat("@")
      .setValues(valoresCSV);

    abaCSV
      .getRange(linhaCSV, 4, formulasCSV.length, 1)
      .setFormulas(formulasCSV);

  } catch (error) {
    console.error("Falha ao registrar itens:", error);

    registrarLog({
      origem: "SERVIDOR",
      etapa: "REGISTRAR_ITENS",
      filial: dados.filial || "",
      chave: dados.chave || "",
      erro: error?.message || String(error),
      detalhes: error?.stack || "",
      requestId: dados.requestId || "",
      userAgent: dados.userAgent || ""
    });
  }
}

function registrarHistoricoConsulta(filial, numeroNF, valorTotal, quantidade, chave, requestId, userAgent) {
  try {
    const planilhaHistorico = SpreadsheetApp.openById("12lB_BdKEBVEgddg-CZ_OvqLh3FlNqXHQ9XSokycIk-Q");

    const nomeAba = {
      "293": "Artur",
      "488": "Floriano",
      "287": "Jota",
      "761": "Moda",
      "288": "Ponto",
      "1849": "Divina",
      "1848": "Itauna"
    }[filial];

    const abaDestino = planilhaHistorico.getSheetByName(nomeAba);
    if (!abaDestino) return;

    const dataConsulta = Utilities.formatDate(new Date(), "GMT-3", "dd/MM/yyyy");
    const linha = abaDestino.getLastRow() + 1;

    abaDestino
      .getRange(linha, 1, 1, 4)
      .setValues([[dataConsulta, numeroNF, valorTotal, quantidade]]);

  } catch (erro) {
    Logger.log("Erro ao registrar histórico: " + erro.message);

    registrarLog({
      origem: "SERVIDOR",
      etapa: "REGISTRAR_HISTORICO",
      filial,
      chave: chave || "",
      erro: erro?.message || String(erro),
      detalhes: erro?.stack || "",
      requestId: requestId || "",
      userAgent: userAgent || ""
    });
  }
}

function salvarResultadoConsulta(requestId, resultado) {
  if (!requestId) return;
  try {
    CacheService.getScriptCache().put(
      "RESULTADO_" + requestId,
      JSON.stringify(resultado),
      600
    );
  } catch (erro) {
    console.error("Falha ao salvar resultado temporário:", erro);
  }
}

function obterResultadoConsulta(requestId) {
  try {
    const bruto = CacheService.getScriptCache().get("RESULTADO_" + requestId);
    return bruto ? JSON.parse(bruto) : null;
  } catch (erro) {
    console.error("Falha ao recuperar resultado temporário:", erro);
    return null;
  }
}

function notaJaConsultada(filial, numeroNF) {
  try {
    const planilhaHistorico = SpreadsheetApp.openById(
      "12lB_BdKEBVEgddg-CZ_OvqLh3FlNqXHQ9XSokycIk-Q"
    );

    const nomeAba = {
      "293": "Artur",
      "488": "Floriano",
      "287": "Jota",
      "761": "Moda",
      "288": "Ponto",
      "1849": "Divina",
      "1848": "Itauna"
    }[filial];

    const aba = planilhaHistorico.getSheetByName(nomeAba);
    if (!aba || aba.getLastRow() < 1) return false;

    const valores = aba.getRange(1, 2, aba.getLastRow(), 1).getDisplayValues().flat();
    const nfProcurada = numeroNF.toString().trim();
    return valores.some(valor => valor.toString().trim() === nfProcurada);
  } catch (erro) {
    console.error("Falha ao verificar nota já consultada:", erro);
    return false;
  }
}

function registrarLog(dados) {
  try {
    const planilha = SpreadsheetApp.openById("1R1Hq4kp7eaf9XfEVNCNFpUFjz3eLFcWqNl6QQx-QAew");
    const abaLog = planilha.getSheetByName("log");
    if (!abaLog) return;

    if (abaLog.getLastRow() === 0) {
      abaLog.appendRow([
        "Data/Hora",
        "Origem",
        "Etapa",
        "Filial",
        "Chave",
        "Erro",
        "Detalhes",
        "Request ID",
        "User Agent"
      ]);
    }

    const agora = Utilities.formatDate(
      new Date(),
      "GMT-3",
      "dd/MM/yyyy HH:mm:ss"
    );

    abaLog.appendRow([
      agora,
      dados.origem || "",
      dados.etapa || "",
      dados.filial || "",
      dados.chave || "",
      dados.erro || "",
      dados.detalhes || "",
      dados.requestId || "",
      dados.userAgent || ""
    ]);

  } catch (erroLog) {
    console.error("Falha ao gravar log:", erroLog);
  }
}
