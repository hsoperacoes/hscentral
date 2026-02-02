const API_URL = "https://script.google.com/macros/s/AKfycbwUa5DLhtKpa2kUAMxicHQsPlIG3gsLW-D3Scq6WUjAw42JIcUerAgy4f1H3TxsJLTB/exec";

const FILIAIS = {
  "293": { nome: "ARTUR",    codigoApi: "293" },
  "488": { nome: "FLORIANO", codigoApi: "488" },
  "287": { nome: "JOTA",     codigoApi: "287" },
  "761": { nome: "MODA",     codigoApi: "761" },
  "288": { nome: "PONTO",    codigoApi: "288" }
};

const LS_FILIAL_ATUAL = "hs_nf_filial_atual";
const LS_HIST_PREFIX  = "hs_nf_historico_";

const elLogin     = document.getElementById("login-nf");
const elPrincipal = document.getElementById("principal-nf");

const inputCodigo = document.getElementById("codigo-nf");
const btnEntrar   = document.getElementById("btn-entrar-nf");
const btnSair     = document.getElementById("btn-sair-nf");

const inputChave  = document.getElementById("chave-nf");
const btnConsultar= document.getElementById("btn-consultar-nf");
const btnLeitor   = document.getElementById("btn-leitor-nf");
const btnLimpar   = document.getElementById("btn-limpar-nf");

const elLoading   = document.getElementById("loading-nf");
const elResultado = document.getElementById("resultado-nf");
const elErroLogin = document.getElementById("erro-nf");
const elErroMain  = document.getElementById("erro-nf2");
const elHistLista = document.getElementById("historicoLista-nf");

const elScanner   = document.getElementById("scanner");

let filialAtual = null;
let dbrScanner = null;

document.addEventListener("DOMContentLoaded", () => {
  const salvo = localStorage.getItem(LS_FILIAL_ATUAL);
  if (salvo) {
    try {
      const obj = JSON.parse(salvo);
      if (obj && obj.codigoLogin && FILIAIS[obj.codigoLogin]) {
        setFilialLogada(obj.codigoLogin);
      }
    } catch (e) {}
  }

  btnEntrar?.addEventListener("click", handleLogin);
  inputCodigo?.addEventListener("keydown", (e) => { if (e.key === "Enter") handleLogin(); });

  btnSair?.addEventListener("click", logout);
  btnConsultar?.addEventListener("click", consultarNF);

  inputChave?.addEventListener("input", () => {
    const v = (inputChave.value || "").replace(/\D/g, "").slice(0, 44);
    inputChave.value = v;
  });
  inputChave?.addEventListener("keydown", (e) => { if (e.key === "Enter") consultarNF(); });

  btnLimpar?.addEventListener("click", limparHistoricoLocal);
  btnLeitor?.addEventListener("click", toggleScanner);

  if (!filialAtual) {
    mostrarLogin();
  } else {
    mostrarPrincipal();
    renderHistorico();
  }
});

function handleLogin() {
  limparMensagens();
  const codigo = (inputCodigo.value || "").trim();

  if (!codigo) {
    elErroLogin.textContent = "Digite o código da filial.";
    return;
  }
  if (!FILIAIS[codigo]) {
    elErroLogin.textContent = "Código de filial inválido.";
    return;
  }

  setFilialLogada(codigo);
  mostrarPrincipal();
  renderHistorico();
}

function setFilialLogada(codigoLogin) {
  filialAtual = {
    codigoLogin,
    nome: FILIAIS[codigoLogin].nome,
    codigoApi: FILIAIS[codigoLogin].codigoApi
  };
  localStorage.setItem(LS_FILIAL_ATUAL, JSON.stringify(filialAtual));
}

function logout() {
  pararScanner();
  filialAtual = null;
  localStorage.removeItem(LS_FILIAL_ATUAL);

  inputCodigo.value = "";
  inputChave.value = "";

  elResultado.classList.add("hidden");
  elResultado.innerHTML = "";
  elHistLista.innerHTML = "";

  mostrarLogin();
}

function mostrarLogin() {
  elLogin.classList.remove("hidden");
  elPrincipal.classList.add("hidden");
}

function mostrarPrincipal() {
  elLogin.classList.add("hidden");
  elPrincipal.classList.remove("hidden");
}

async function consultarNF() {
  limparMensagens();

  if (!filialAtual) {
    elErroMain.textContent = "Faça login novamente.";
    mostrarLogin();
    return;
  }

  const chave = (inputChave.value || "").trim();
  if (chave.length !== 44) {
    elErroMain.textContent = "A chave deve conter exatamente 44 dígitos.";
    return;
  }

  setLoading(true);

  try {
    const form = new URLSearchParams();
    form.append("chave", chave);
    form.append("filial", filialAtual.codigoApi);

    const resp = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: form.toString()
    });

    const json = await resp.json();

    if (!json || json.success !== true) {
      elErroMain.textContent = json?.message || "Erro ao consultar. Tente novamente.";
      return;
    }

    const data = json.data || {};

    // OVERLAY (RECUSA)
    if (data.recusa === true && typeof abrirOverlayRecusa === "function") {
      abrirOverlayRecusa(data.mensagemRecusa || "Esta nota está marcada para recusa.");
    }

    renderResultado(data);

    salvarNoHistorico({
      when: data.dataRegistro || agoraBR(),
      chave,
      numeroNF: data.numeroNF || "-",
      valorTotal: data.valorTotal || "0",
      quantidadeTotal: data.quantidadeTotal || "0",
      status: data.status || "-"
    });

    renderHistorico();
  } catch (err) {
    elErroMain.textContent = "Falha na consulta: " + (err?.message || err);
  } finally {
    setLoading(false);
  }
}

function renderResultado(data) {
  elResultado.classList.remove("hidden");

  const status = (data.status || "").toString().toUpperCase();
  const isRecusar = status === "RECUSAR";
  const isInvalida = status === "INVÁLIDA";

  const badge = isRecusar
    ? `<span style="color:#ff3b3b;font-weight:800;">RECUSAR</span>`
    : isInvalida
      ? `<span style="color:#ff6b6b;font-weight:800;">INVÁLIDA</span>`
      : `<span style="color:#19c37d;font-weight:800;">VÁLIDA</span>`;

  elResultado.innerHTML = `
    <div style="display:flex;justify-content:space-between;gap:10px;align-items:center;">
      <div style="font-size:14px;font-weight:700;">Resultado</div>
      <div>${badge}</div>
    </div>
    <div style="margin-top:10px;line-height:1.6;">
      <div><b>Data:</b> ${escapeHtml(data.dataRegistro || "-")}</div>
      <div><b>Nº NF:</b> ${escapeHtml(data.numeroNF || "-")}</div>
      <div><b>Valor Total:</b> ${escapeHtml(data.valorTotal || "0")}</div>
      <div><b>Quantidade Total:</b> ${escapeHtml(data.quantidadeTotal || "0")}</div>
    </div>
  `;
}

function getHistKey() {
  if (!filialAtual) return null;
  return LS_HIST_PREFIX + filialAtual.codigoApi;
}

function carregarHistorico() {
  const k = getHistKey();
  if (!k) return [];
  try {
    const raw = localStorage.getItem(k);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch (e) {
    return [];
  }
}

function salvarNoHistorico(item) {
  const k = getHistKey();
  if (!k) return;

  const hist = carregarHistorico();
  const ultimo = hist[0];
  if (ultimo && ultimo.chave === item.chave) return;

  hist.unshift(item);

  const MAX = 50;
  if (hist.length > MAX) hist.length = MAX;

  localStorage.setItem(k, JSON.stringify(hist));
}

function renderHistorico() {
  const hist = carregarHistorico();
  elHistLista.innerHTML = "";

  if (!hist.length) {
    elHistLista.innerHTML = `<li style="color:#b9b9b9;cursor:default;">Sem histórico local.</li>`;
    return;
  }

  hist.forEach((h) => {
    const li = document.createElement("li");

    const status = (h.status || "").toString().toUpperCase();
    const cor = status === "RECUSAR"
      ? "#ff3b3b"
      : status === "INVÁLIDA"
        ? "#ff6b6b"
        : "#19c37d";

    li.innerHTML = `
      <div style="display:flex;justify-content:space-between;gap:10px;">
        <div style="font-weight:700;color:${cor};">${escapeHtml(h.numeroNF || "-")} — ${escapeHtml(h.status || "-")}</div>
        <div style="color:#b9b9b9;font-size:12px;">${escapeHtml(h.when || "")}</div>
      </div>
      <div style="color:#b9b9b9;font-size:12px;margin-top:2px;">
        Valor: ${escapeHtml(h.valorTotal || "0")} | Qtde: ${escapeHtml(h.quantidadeTotal || "0")}
      </div>
    `;

    li.addEventListener("click", () => {
      inputChave.value = (h.chave || "").toString();
      consultarNF();
    });

    elHistLista.appendChild(li);
  });
}

function limparHistoricoLocal() {
  limparMensagens();
  const k = getHistKey();
  if (!k) return;

  localStorage.removeItem(k);
  renderHistorico();

  elResultado.classList.add("hidden");
  elResultado.innerHTML = "";
}

async function toggleScanner() {
  limparMensagens();

  if (elScanner.style.display === "flex" || elScanner.style.display === "block") {
    pararScanner();
    return;
  }

  try {
    elScanner.style.display = "flex";
    elScanner.innerHTML = "";

    if (!window.Dynamsoft || !Dynamsoft.DBR) {
      throw new Error("Biblioteca Dynamsoft DBR não carregou.");
    }

    dbrScanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
    await dbrScanner.setUIElement(elScanner);

    dbrScanner.onUniqueRead = (txt) => {
      const digits = (txt || "").toString().replace(/\D/g, "");
      if (digits.length >= 44) {
        inputChave.value = digits.slice(0, 44);
        pararScanner();
      }
    };

    await dbrScanner.open();
  } catch (err) {
    pararScanner();
    elErroMain.textContent = "Erro ao abrir câmera: " + (err?.message || err);
  }
}

function pararScanner() {
  try {
    if (dbrScanner) {
      dbrScanner.close();
      dbrScanner.destroyContext();
      dbrScanner = null;
    }
  } catch (e) {}

  elScanner.style.display = "none";
  elScanner.innerHTML = "";
}

function setLoading(v) {
  if (v) {
    elLoading.classList.remove("hidden");
    btnConsultar.disabled = true;
    btnLeitor.disabled = true;
  } else {
    elLoading.classList.add("hidden");
    btnConsultar.disabled = false;
    btnLeitor.disabled = false;
  }
}

function limparMensagens() {
  elErroLogin.textContent = "";
  elErroMain.textContent = "";
}

function agoraBR() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function escapeHtml(str) {
  return (str ?? "").toString()
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
