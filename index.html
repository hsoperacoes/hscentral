<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>GERENCIAL HS - Sistema Unificado</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <script src="https://unpkg.com/@ericblade/quagga2@1.2.7/dist/quagga.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@9.6.21/dist/dbr.js"></script>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #000;
      color: #fff;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }

    .logo-topo {
      width: 100px;
      height: auto;
      margin: 30px 0 10px;
    }

    .container {
      width: 100%;
      max-width: 900px;
      background-color: #2c2c2c;
      padding: 40px 30px;
      border-radius: 12px;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
      margin-bottom: 20px;
    }

    .form-link {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #4CAF50;
      color: white;
      padding: 15px;
      margin: 10px 0;
      border-radius: 6px;
      font-size: 16px;
      text-decoration: none;
      transition: background-color 0.3s ease;
      cursor: pointer;
      border: none;
      width: 100%;
    }

    .form-link:hover {
      background-color: #45a049;
    }

    .form-link i {
      margin-right: 10px;
    }

    .back-button {
      position: fixed;
      top: 20px;
      left: 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      z-index: 1000;
      display: none;
      transition: background-color 0.3s ease;
    }

    .back-button:hover {
      background-color: #45a049;
    }

    .back-button.show {
      display: block;
    }

    .form-container {
      max-width: 600px;
      background: #1e1e1e;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      color: white;
      margin: 0 auto;
    }

    .form-container h1, .form-container h2 {
      text-align: center;
      color: white;
      margin-bottom: 30px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      font-size: 14px;
      font-weight: 600;
      display: block;
      margin-bottom: 5px;
      color: #ccc;
    }

    .question-title {
      font-size: 16px;
      font-weight: bold;
      color: white;
      margin-bottom: 5px;
      display: block;
    }

    input, select, textarea {
      width: 100%;
      padding: 12px;
      font-size: 14px;
      border: 1px solid #444;
      border-radius: 4px;
      background-color: #2a2a2a;
      color: white;
      box-sizing: border-box;
    }

    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: #673ab7;
      box-shadow: 0 0 0 2px rgba(103, 58, 183, 0.2);
    }

    button {
      background-color: #673ab7;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      font-weight: 600;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #5e35b1;
    }

    .submit-buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      gap: 10px;
    }

    .submit-button,
    .clear-button {
      padding: 12px 20px;
      font-size: 14px;
      font-weight: 600;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      flex: 1;
    }

    .submit-button {
      background-color: #673ab7;
      color: white;
    }

    .clear-button {
      background-color: #5f6368;
      color: white;
    }

    .submit-button:hover {
      background-color: #5e35b1;
    }

    .clear-button:hover {
      background-color: #3c4043;
    }

    .gerador-section .form-container {
      background-color: #1e1e1e;
      color: white;
      max-width: 800px;
    }

    .gerador-section .input-area, .gerador-section .output-area {
      background: #1e1e1e;
      color: white;
    }

    .gerador-section .input-area textarea {
      background-color: #2a2a2a;
      color: white;
      border-color: #444;
    }

    .controls {
      display: flex;
      gap: 10px;
      margin: 20px 0;
      flex-wrap: wrap;
    }

    .controls button {
      flex: 1;
      min-width: 120px;
    }

    .gerador-section .controls button:nth-child(1) { background-color: #4CAF50; }
    .gerador-section .controls button:nth-child(1):hover { background-color: #45a049; }
    .gerador-section .controls button:nth-child(2) { background-color: #f44336; }
    .gerador-section .controls button:nth-child(2):hover { background-color: #d32f2f; }
    .gerador-section .controls button:nth-child(3) { background-color: #ff9800; }
    .gerador-section .controls button:nth-child(3):hover { background-color: #e68a00; }
    .gerador-section .controls button:nth-child(4) { background-color: #2196F3; }
    .gerador-section .controls button:nth-child(4):hover { background-color: #0b7dda; }

    .gerador-section h1, .gerador-section h2 {
      color: white;
    }

    .gerador-section .example-title {
      color: #ccc;
    }

    .gerador-section .barcode-count {
      color: white;
    }

    .barcode-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-top: 20px;
    }

    .barcode-item {
      background: #2a2a2a;
      border: 1px solid #444;
      padding: 10px;
      border-radius: 4px;
      text-align: center;
    }

    svg text {
      fill: white !important;
    }

    #success-message, #error-message {
      display: none;
      padding: 12px;
      margin-top: 20px;
      border-radius: 4px;
      text-align: center;
      font-weight: 500;
    }

    #success-message {
      background-color: #e8f5e8;
      color: #137333;
      border: 1px solid #ceead6;
    }

    #error-message {
      background-color: #fce8e6;
      color: #d93025;
      border: 1px solid #f9dedc;
    }

    .loading {
      text-align: center;
      font-style: italic;
      margin-top: 10px;
      color: #1a73e8;
    }

    .loading-overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 1000;
    }

    .spinner {
      border: 4px solid transparent;
      border-top: 4px solid #fff;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .barcode-count {
      font-size: 16px;
      margin-top: 10px;
      font-weight: bold;
      color: white;
    }

    .count-number {
      color: #ea4335;
      font-weight: bold;
    }

    .required-star {
      color: #ea4335;
    }

    .hidden {
      display: none;
    }

    .logout {
      text-align: right;
      margin-bottom: 10px;
    }

    .logout button {
      padding: 8px 16px;
      background-color: #5f6368;
      font-size: 14px;
    }

    .history button {
      background-color: #ea4335;
      margin-top: 15px;
    }

    .logo {
      display: block;
      margin: 20px auto 10px;
      max-width: 80px;
    }

    #reader {
      width: 100%;
      max-width: 350px;
      height: 240px;
      margin: 10px auto;
      position: relative;
    }

    #interactive.viewport {
      position: relative;
      width: 100%;
      height: 100%;
    }

    canvas, video {
      max-width: 100%;
      width: 100% !important;
      height: auto !important;
    }

    footer {
      text-align: center;
      font-size: 14px;
      color: #ccc;
      background-color: #2c2c2c;
      padding: 15px;
      border-radius: 6px;
      margin: 20px auto;
      max-width: 900px;
      width: 100%;
    }

    .section {
      display: none;
      width: 100%;
      padding: 20px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .section.active {
      display: flex;
    }

    .checkbox-label {
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 20px;
    }

    input[readonly] {
      background-color: #2a2a2a;
      color: #bbb;
    }

    #grupo-tamanho-g {
      display: none;
    }

    #scanner {
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      display: none;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: transparent;
    }

    @media print {
      .back-button,
      .input-area,
      .no-print,
      button,
      .controls,
      .example-title {
        display: none !important;
      }

      .output-area {
        width: 100%;
        background: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
      }

      .barcode-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        margin: 0;
      }

      .barcode-item {
        margin: 0;
        padding: 5px;
        box-shadow: none;
        background: none;
        break-inside: avoid;
        page-break-inside: avoid;
      }

      svg {
        background: none;
      }

      svg text {
        fill: black !important;
        font-size: 14px !important;
      }
    }

    @media (max-width: 768px) {
      .form-container {
        margin: 20px 10px;
        padding: 20px;
      }
      
      .submit-buttons {
        flex-direction: column;
        gap: 10px;
      }
      
      .controls {
        flex-direction: column;
      }
      
      .controls button {
        flex: 1;
      }
      
      .container {
        padding: 20px 15px;
      }
    }
  </style>
</head>
<body>
  <button class="back-button" id="backButton" onclick="voltarHome()">
    <i class="fas fa-arrow-left"></i> Voltar à Home
  </button>

  <div id="home" class="section active">
    <img src="logo.png" alt="Logo HS" class="logo-topo" />
    
    <div class="container">
      <button class="form-link" onclick="mostrarSecao('folgas')">
        <i class="fas fa-calendar-plus"></i> CADASTRO DE FOLGAS
      </button>
      <button class="form-link" onclick="mostrarSecao('falta')">
        <i class="fas fa-calendar-minus"></i> CADASTRO DE FALTA
      </button>
      <button class="form-link" onclick="mostrarSecao('sacola')">
        <i class="fas fa-lock"></i> CONTAGEM DE SACOLA
      </button>
      <button class="form-link" onclick="mostrarSecao('divergencia')">
        <i class="fas fa-file-invoice-dollar"></i> DIVERGÊNCIA DE NOTAS FISCAIS
      </button>
      <button class="form-link" onclick="mostrarSecao('transferencia')">
        <i class="fas fa-exchange-alt"></i> TRANSFERÊNCIA ENTRE LOJAS
      </button>
      <button class="form-link" onclick="mostrarSecao('gerador')">
        <i class="fas fa-barcode"></i> GERADOR DE CÓDIGO DE BARRAS
      </button>
      <button class="form-link" onclick="mostrarSecao('nf')">
        <i class="fas fa-receipt"></i> RECEBIMENTO DE NOTA FISCAL
      </button>
    </div>
  </div>

  <!-- SEÇÃO FOLGAS -->
  <div id="folgas" class="section">
    <div class="form-container">
      <img src="logo.png" alt="Logo" class="logo">
      <h2>Cadastro de Folga Funcionários</h2>
      <form id="form-folgas" method="POST" action="https://script.google.com/macros/s/AKfycbwh-YUwL2o3_i-bfcV9RMzLcoI98vyyGwEXf4LHlG5KJ59gIAlUe1_VVlFQMBqU6PwR/exec">
        <div class="form-group">
          <label for="filial-folgas">Filial</label>
          <select id="filial-folgas" name="filial" required onchange="atualizarFuncionarios()">
            <option value="">Selecione uma filial</option>
            <option value="ARTUR">ARTUR</option>
            <option value="FLORIANO">FLORIANO</option>
            <option value="JOTA">JOTA</option>
            <option value="MODA">MODA</option>
            <option value="PONTO">PONTO</option>
          </select>
        </div>

        <div class="form-group">
          <label for="funcionario-folgas">Funcionário</label>
          <select id="funcionario-folgas" name="funcionario" required>
            <option value="">Selecione a filial primeiro</option>
          </select>
        </div>

        <div class="form-group">
          <label for="dataTrabalho-folgas">Dia Trabalhado</label>
          <input type="date" id="dataTrabalho-folgas" name="dataTrabalho" required>
        </div>

        <div class="form-group">
          <label for="motivo-folgas">Motivo da Folga</label>
          <select id="motivo-folgas" name="motivo" required>
            <option value="">Selecione um motivo</option>
            <option value="DOMINGO">DOMINGO</option>
            <option value="FERIADO">FERIADO</option>
            <option value="OUTROS">OUTROS</option>
          </select>
        </div>

        <div class="form-group" id="motivoOutros-folgas" style="display: none;">
          <label for="outrosMotivo-folgas">Especificar o Motivo</label>
          <input type="text" id="outrosMotivo-folgas" name="outrosMotivo" placeholder="Escreva o motivo">
        </div>

        <div class="form-group">
          <label for="dataFolga-folgas">Data da Folga</label>
          <input type="date" id="dataFolga-folgas" name="dataFolga" required>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>

  <!-- SEÇÃO FALTA -->
  <div id="falta" class="section">
    <div class="form-container">
      <img src="logo.png" alt="Logo" class="logo">
      <h2>Cadastro de Falta</h2>
      <form id="form-falta">
        <div class="form-group">
          <label for="filial-falta">Filial <span class="required-star">*</span></label>
          <select id="filial-falta" name="filial" required>
            <option value="">Selecione uma filial</option>
            <option value="ARTUR">ARTUR</option>
            <option value="FLORIANO">FLORIANO</option>
            <option value="JOTA">JOTA</option>
            <option value="MODA">MODA</option>
            <option value="PONTO">PONTO</option>
          </select>
        </div>

        <div class="form-group">
          <label for="funcionario-falta">Funcionário <span class="required-star">*</span></label>
          <select id="funcionario-falta" name="funcionario" required>
            <option value="">Selecione um funcionário</option>
          </select>
        </div>

        <div class="form-group">
          <label for="data-falta">Data da Falta <span class="required-star">*</span></label>
          <input type="date" id="data-falta" name="data_falta" required>
        </div>

        <div class="form-group">
          <label for="motivo-falta">Motivo <span class="required-star">*</span></label>
          <select id="motivo-falta" name="motivo" required>
            <option value="">Selecione um motivo</option>
            <option value="ATESTADO MÉDICO">ATESTADO MÉDICO</option>
            <option value="FALTA INJUSTIFICADA">FALTA INJUSTIFICADA</option>
          </select>
        </div>

        <div class="form-group" id="dias-afastamento-container" style="display: none;">
          <label for="observacao-falta">Dias de afastamento (caso atestado)</label>
          <textarea id="observacao-falta" name="observacao" rows="4" placeholder="Ex: 3 DIAS 12/04 A 14/04"></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>

  <!-- SEÇÃO SACOLA -->
  <div id="sacola" class="section">
    <div class="form-container">
      <img src="logo.png" alt="Logo" class="logo">
      <h2>Contagem de Sacola</h2>
      <form id="form-sacola">
        <div class="form-group">
          <label for="filial">Filial <span class="required-star">*</span></label>
          <select id="filial" name="filial" required>
            <option value="">Selecione uma filial</option>
            <option value="ARTUR">ARTUR</option>
            <option value="FLORIANO">FLORIANO</option>
            <option value="JOTA">JOTA</option>
            <option value="MODA">MODA</option>
            <option value="PONTO">PONTO</option>
          </select>
        </div>

        <div class="form-group">
          <label for="data-contagem">Data da Contagem <span class="required-star">*</span></label>
          <input type="text" id="data-contagem" name="data_contagem" readonly required>
        </div>

        <div class="form-group">
          <label for="sacola-p">Sacola P <span class="required-star">*</span></label>
          <input type="number" id="sacola-p" name="sacola_p" placeholder="Quantidade" min="0" required>
        </div>

        <div class="form-group">
          <label for="envelope-p">Envelope P <span class="required-star">*</span></label>
          <input type="number" id="envelope-p" name="envelope_p" placeholder="Quantidade" min="0" required>
        </div>

        <div class="form-group">
          <label for="sacola-m">Sacola M <span class="required-star">*</span></label>
          <input type="number" id="sacola-m" name="sacola_m" placeholder="Quantidade" min="0" required>
        </div>

        <div class="form-group">
          <label for="envelope-m">Envelope M <span class="required-star">*</span></label>
          <input type="number" id="envelope-m" name="envelope_m" placeholder="Quantidade" min="0" required>
        </div>

        <div class="form-group checkbox-label">
          <input type="checkbox" id="mostrar-g" onclick="toggleCamposG()">
          <label for="mostrar-g">Possui Sacola e Envelope G</label>
        </div>

        <div id="grupo-tamanho-g">
          <div class="form-group">
            <label for="sacola-g">Sacola G <span class="required-star">*</span></label>
            <input type="number" id="sacola-g" name="sacola_g" placeholder="Quantidade" min="0">
          </div>
          <div class="form-group">
            <label for="envelope-g">Envelope G <span class="required-star">*</span></label>
            <input type="number" id="envelope-g" name="envelope_g" placeholder="Quantidade" min="0">
          </div>
        </div>

        <button type="submit" id="btn-enviar">Enviar</button>
      </form>
    </div>
  </div>

  <!-- SEÇÃO DIVERGÊNCIA -->
  <div id="divergencia" class="section">
    <div class="form-container">
      <img src="logo.png" alt="Logo" class="logo">
      <h2>Divergências em Notas Fiscais</h2>
      <form id="formulario-divergencia" onsubmit="enviarFormularioDivergencia(event)">
        <div class="form-group">
          <label>Filial</label>
          <select name="filial" required>
            <option value="">Selecione uma filial</option>
            <option value="ARTUR">ARTUR</option>
            <option value="FLORIANO">FLORIANO</option>
            <option value="JOTA">JOTA</option>
            <option value="MODA">MODA</option>
            <option value="PONTO">PONTO</option>
          </select>
        </div>

        <div class="form-group">
          <label>Transportadora</label>
          <select name="transportadora" id="transportadora-div" required>
            <option value="BRASPRESS">BRASPRESS</option>
            <option value="OUTROS">OUTROS</option>
          </select>
        </div>

        <div class="form-group" id="outrosTransportadoraDiv" style="display: none;">
          <label for="outraTransportadoraDiv">Qual é a Transportadora?</label>
          <input type="text" id="outraTransportadoraDiv" name="outraTransportadora">
        </div>

        <div class="form-group">
          <label for="dataRecebimentoDiv">Data de Recebimento</label>
          <input type="date" id="dataRecebimentoDiv" name="dataRecebimento" required>
        </div>

        <div class="form-group">
          <label for="notaFiscalDiv">Número da Nota Fiscal</label>
          <input type="text" id="notaFiscalDiv" name="notaFiscal" required>
        </div>

        <div class="form-group">
          <label for="serieNotaDiv">Série da Nota Fiscal</label>
          <input type="text" id="serieNotaDiv" name="serieNota" required>
        </div>

        <div class="form-group">
          <label for="referenciaDiv">Referência</label>
          <input type="text" id="referenciaDiv" name="referencia" required>
        </div>

        <div class="form-group">
          <label for="motivoDiv">Motivo</label>
          <select id="motivoDiv" name="motivo" required>
            <option value="">Selecione o motivo</option>
            <option value="MERCADORIA PASSANDO">MERCADORIA PASSANDO</option>
            <option value="MERCADORIA FALTANDO">MERCADORIA FALTANDO</option>
            <option value="NOTA FISCAL ERRADA">NOTA FISCAL ERRADA</option>
          </select>
        </div>

        <div class="form-group">
          <label for="observacaoDiv">Observação</label>
          <textarea id="observacaoDiv" name="observacao" rows="4"></textarea>
        </div>

        <div class="submit-buttons">
          <button type="submit" class="submit-button">Enviar</button>
        </div>
        <p id="loadingMessageDiv" class="loading" style="display: none;">Enviando...</p>
      </form>
    </div>
  </div>

  <!-- SEÇÃO TRANSFERÊNCIA -->
  <div id="transferencia" class="section">
    <div class="form-container">
      <img src="logo.png" alt="Logo" class="logo">
      <h1>TRANSFERÊNCIA ENTRE LOJAS</h1>
      <form id="transfer-form">
        <div class="form-group">
          <label for="email-trans">Email da filial de origem:(Preenchimento automatico) <span class="required-star">*</span></label>
          <input type="email" id="email-trans" name="email" readonly required>
        </div>

        <div class="form-group">
          <label for="filial-origem">FILIAL ORIGEM <span class="required-star">*</span></label>
          <select id="filial-origem" name="filialOrigem" required onchange="atualizarEmailTrans()">
            <option value="">Selecione</option>
            <option value="ARTUR">ARTUR</option>
            <option value="FLORIANO">FLORIANO</option>
            <option value="JOTA">JOTA</option>
            <option value="MODA">MODA</option>
            <option value="PONTO">PONTO</option>
            <option value="JA">JA</option>
            <option value="JE">JE</option>
          </select>
        </div>

        <div class="form-group">
          <label for="filial-destino">FILIAL DESTINO <span class="required-star">*</span></label>
          <select id="filial-destino" name="filialDestino" required>
            <option value="">Selecione</option>
            <option value="ARTUR">ARTUR</option>
            <option value="FLORIANO">FLORIANO</option>
            <option value="JOTA">JOTA</option>
            <option value="MODA">MODA</option>
            <option value="PONTO">PONTO</option>
            <option value="JA">JA</option>
            <option value="JE">JE</option>
          </select>
        </div>

        <div class="form-group">
          <label for="mercadorias-trans">MERCADORIAS QUE ESTÃO SAINDO <span class="required-star">*</span></label>
          <textarea id="mercadorias-trans" name="mercadorias" rows="6" placeholder="Inclua aqui os códigos de barras." required oninput="contarLinhasTrans()"></textarea>
        </div>

        <p>Total de Itens: <span id="total-itens-trans">0</span></p>

        <div id="error-message-trans" class="error-message" style="display: none;"></div>
        <div id="success-message-trans" class="success-message" style="display: none;"></div>

        <div class="submit-buttons">
          <button type="button" class="clear-button" onclick="limparFormularioTrans()">Limpar formulário</button>
          <button type="submit" class="submit-button">Enviar</button>
        </div>
      </form>
    </div>
    <div class="loading-overlay" id="loading-overlay-trans">
      <div class="spinner"></div>
      <p>Enviando transferência...</p>
    </div>
  </div>

  <!-- SEÇÃO GERADOR -->
  <div id="gerador" class="section gerador-section">
    <div class="form-container">
      <img src="logo.png" alt="Logo" class="logo">
      <h1>GERADOR DE CÓDIGO DE BARRAS</h1>
      <div class="input-area">
        <label for="barcode-input">Códigos de Barras (Um por linha):</label>
        <textarea id="barcode-input" rows="10" placeholder="Ex: 7891234567890"></textarea>
        <div class="controls">
          <button onclick="gerarCodigos()">Gerar Códigos</button>
          <button onclick="limparCodigos()">Limpar</button>
          <button onclick="imprimirCodigos()" class="no-print">Imprimir</button>
          <button onclick="mostrarScanner()" class="no-print">Scanner</button>
        </div>
        <p class="barcode-count">Total de Códigos: <span id="total-codigos" class="count-number">0</span></p>
      </div>
      <div class="output-area">
        <div class="barcode-container" id="barcode-output">
          <!-- Códigos de barras gerados aqui -->
        </div>
      </div>
    </div>
  </div>

  <!-- SEÇÃO RECEBIMENTO NF -->
  <div id="nf" class="section">
    <div class="form-container">
      <img src="logo.png" alt="Logo" class="logo">
      <h2>Recebimento de Nota Fiscal</h2>
      <form id="form-nf" onsubmit="enviarFormularioNF(event)">
        <div class="form-group">
          <label for="filial-nf">Filial</label>
          <select id="filial-nf" name="filial" required>
            <option value="">Selecione uma filial</option>
            <option value="ARTUR">ARTUR</option>
            <option value="FLORIANO">FLORIANO</option>
            <option value="JOTA">JOTA</option>
            <option value="MODA">MODA</option>
            <option value="PONTO">PONTO</option>
          </select>
        </div>
        <div class="form-group">
          <label for="transportadora-nf">Transportadora</label>
          <select id="transportadora-nf" name="transportadora" required>
            <option value="BRASPRESS">BRASPRESS</option>
            <option value="OUTROS">OUTROS</option>
          </select>
        </div>
        <div class="form-group" id="outrosTransportadoraNfDiv" style="display: none;">
          <label for="outraTransportadoraNf">Qual é a Transportadora?</label>
          <input type="text" id="outraTransportadoraNf" name="outraTransportadora">
        </div>
        <div class="form-group">
          <label for="dataRecebimentoNf">Data de Recebimento</label>
          <input type="date" id="dataRecebimentoNf" name="dataRecebimento" required>
        </div>
        <div class="form-group">
          <label for="notaFiscalNf">Número da Nota Fiscal</label>
          <input type="text" id="notaFiscalNf" name="notaFiscal" required>
        </div>
        <div class="form-group">
          <label for="serieNotaNf">Série da Nota Fiscal</label>
          <input type="text" id="serieNotaNf" name="serieNota" required>
        </div>
        <div class="form-group">
          <label for="observacaoNf">Observação</label>
          <textarea id="observacaoNf" name="observacao" rows="4"></textarea>
        </div>
        <div class="submit-buttons">
          <button type="submit" class="submit-button">Enviar</button>
        </div>
        <p id="loadingMessageNf" class="loading" style="display: none;">Enviando...</p>
      </form>
    </div>
  </div>

  <div id="scanner" style="display: none;">
    <!-- Conteúdo do Scanner -->
  </div>

  <footer>
    HG Operações © 2025 - Todos os direitos reservados
  </footer>

  <script>
    // Dados de funcionários (assumindo que esta parte está correta)
    const funcionariosPorFilial = {
      // ... (Seus dados de funcionários) ...
    };

    // Funções de navegação (assumindo que esta parte está correta)
    function mostrarSecao(secaoId) {
      // ... (Sua lógica de mostrar seção) ...
    }
    
    function voltarHome() {
      // ... (Sua lógica de voltar para home) ...
    }

    // Funções de utilidade (assumindo que esta parte está correta)
    function atualizarFuncionarios() {
      // ... (Sua lógica de atualizar funcionários) ...
    }

    // Funções de formulário (assumindo que esta parte está correta)
    function toggleCamposG() {
      // ... (Sua lógica de toggle) ...
    }

    function getDataHoraAtualBR() {
      // ... (Sua lógica de data/hora) ...
    }

    function preencherDataSacola() {
      // ... (Sua lógica de preencher data) ...
    }

    // Funções de mensagem (assumindo que esta parte está correta)
    function mostrarMensagemErroTrans(mensagem) {
      // ... (Sua lógica de mostrar erro) ...
    }

    function mostrarMensagemSucessoTrans() {
      // ... (Sua lógica de mostrar sucesso) ...
    }

    function exibirNumeroTransferencia(numero) {
      // ... (Sua lógica de exibir número) ...
    }

    function limparFormularioTrans() {
      // ... (Sua lógica de limpar formulário) ...
    }

    // FUNÇÃO DE ENVIO CORRIGIDA (TRANSFERÊNCIA)
    document.getElementById('transfer-form').addEventListener('submit', function (event) {
      event.preventDefault();
      enviarFormularioTrans();
    });

    function enviarFormularioTrans() {
      const form = document.getElementById('transfer-form');
      if (!form.checkValidity()) {
          mostrarMensagemErroTrans("Por favor, preencha todos os campos obrigatórios!");
          return;
      }

      const formData = new FormData(form);
      // CORREÇÃO: Adicionando o campo de ação para o GS
      formData.append('action', 'transferencia'); 
      
      const data = new URLSearchParams(formData).toString();

      document.getElementById('loading-overlay-trans').style.display = 'flex';

      fetch("https://script.google.com/macros/s/AKfycbxu_jVaotWytMOQh4UCZetFZFOxgk5ePrOkaviDd-qKNPiu2_8BjCaNczAVZzaDwAbj/exec", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: data
      })
      .then(response => {
          // CORREÇÃO: Verifica se a resposta é OK (200)
          if (response.ok) {
              return response.json();
          }
          // Se a resposta não for OK, tenta ler como texto para ver o erro do Google
          return response.text().then(text => {
              // Tenta analisar o JSON de erro do Google
              try {
                  const errorJson = JSON.parse(text);
                  // Se for o JSON de erro do Google, lança uma exceção com a mensagem
                  if (errorJson.error === "ação inválida") {
                      throw new Error("Erro de Servidor: Ação não identificada no Google Apps Script. Verifique os logs de execução do GS.");
                  }
                  throw new Error(errorJson.error || "Erro desconhecido do servidor.");
              } catch (e) {
                  // Se não for JSON (ex: HTML de erro do Google), lança uma exceção genérica
                  throw new Error("Erro ao enviar: Resposta inesperada do servidor. Status: " + response.status);
              }
          });
      })
      .then(responseData => {
          document.getElementById('loading-overlay-trans').style.display = 'none';

          // Lógica original (agora mais segura)
          if (responseData.numeroTransferencia) {
              mostrarMensagemSucessoTrans();
              exibirNumeroTransferencia(responseData.numeroTransferencia);
              setTimeout(limparFormularioTrans, 5000);
          } else if (responseData.status === "ERRO") {
              // Se o GS retornar um JSON de erro (status: "ERRO")
              mostrarMensagemErroTrans(responseData.msg || "Erro ao enviar: Resposta inválida do servidor.");
          } else {
               // Caso a resposta seja 200, mas sem o numeroTransferencia
              mostrarMensagemErroTrans("Erro ao enviar: Resposta inválida do servidor.");
          }
      })
      .catch(error => {
          document.getElementById('loading-overlay-trans').style.display = 'none';
          // Exibe a mensagem de erro capturada (incluindo a mensagem do GS)
          mostrarMensagemErroTrans(error.message || "Erro ao enviar o formulário. Tente novamente.");
      });
    }
    
    // FUNÇÕES RESTANTES (CÓDIGO ORIGINAL)
    
    function gerarCodigos() {
      // ... (Sua função original) ...
    }

    function limparCodigos() {
      // ... (Sua função original) ...
    }

    function imprimirCodigos() {
      // ... (Sua função original) ...
    }

    function mostrarScanner() {
      // ... (Sua função original) ...
    }

    function enviarFormularioDivergencia(event) {
      // ... (Sua função original) ...
    }

    function atualizarEmailTrans() {
      const filialOrigem = document.getElementById('filial-origem').value;
      const filialDestinoSelect = document.getElementById('filial-destino');
      const emailPorFilial = {
        ARTUR: "heringarturmachado@gmail.com",
        FLORIANO: "hs.uberlandia.floriano@gmail.com",
        JOTA: "brunohenzo09@gmail.com",
        MODA: "dlaire28@gmail.com",
        PONTO: "soniameiry@gmail.com",
        JA: "jaugustocoliveira@terra.com.br",
        JE: "jeoliveira1966@gmail.com"
      };
      document.getElementById('email-trans').value = emailPorFilial[filialOrigem] || "";

      Array.from(filialDestinoSelect.options).forEach(option => {
        option.disabled = option.value === filialOrigem;
      });

      if (filialDestinoSelect.value === filialOrigem) {
        filialDestinoSelect.value = "";
      }
    }

    function contarLinhasTrans() {
      const mercadorias = document.getElementById('mercadorias-trans').value;
      const linhas = mercadorias.split('\n').filter(linha => linha.trim() !== '');
      document.getElementById('total-itens-trans').textContent = linhas.length;
    }

    function mostrarMensagemSucessoTrans() {
      document.getElementById('success-message-trans').style.display = 'block';
      document.getElementById('error-message-trans').style.display = 'none';
    }

    function mostrarMensagemErroTrans(mensagem) {
      document.getElementById('error-message-trans').innerHTML = mensagem;
      document.getElementById('error-message-trans').style.display = 'block';
      document.getElementById('success-message-trans').style.display = 'none';
    }

    function exibirNumeroTransferencia(numero) {
      document.getElementById('success-message-trans').innerHTML = `Transferência enviada com sucesso! Número: <strong>${numero}</strong>`;
    }

    function limparFormularioTrans() {
      document.getElementById('transfer-form').reset();
      document.getElementById('total-itens-trans').textContent = '0';
      document.getElementById('success-message-trans').style.display = 'none';
      document.getElementById('error-message-trans').style.display = 'none';
      contarLinhasTrans();
    }

    function generateEAN13(code, skipValidation = false) {
      if (!/^\d{12,13}$/.test(code)) {
        throw new Error(`Código inválido: "${code}" - Deve conter 12 ou 13 dígitos`);
      }

      if (code.length === 12) {
        code += calculateChecksum(code);
      } else if (!skipValidation && calculateChecksum(code.substring(0, 12)) != code[12]) {
        throw new Error(`Dígito verificador inválido para código: "${code}"`);
      }

      const patterns = {
        L: ["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],
        G: ["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"],
        R: ["1110010","1100110","1101100","1000010","1011100","1001110","1010000","1000100","1001000","1110100"]
      };

      const structure = ["LLLLLL","LLGLGG","LLGGLG","LLGGGL","LGLLGG","LGGLLG","LGGGLL","LGLGLG","LGLGGL","LGGLGL"];
      const firstDigit = parseInt(code[0]);
      const pattern = structure[firstDigit];

      let barcode = "101";
      for (let i = 1; i <= 6; i++) {
        const digit = parseInt(code[i]);
        barcode += patterns[pattern[i - 1]][digit];
      }

      barcode += "01010";

      for (let i = 7; i <= 12; i++) {
        const digit = parseInt(code[i]);
        barcode += patterns.R[digit];
      }

      barcode += "101";

      return {
        code: code,
        binary: barcode
      };
    }

    function calculateChecksum(code) {
      let sum = 0;
      for (let i = 0; i < 12; i++) {
        const digit = parseInt(code[i]);
        sum += (i % 2 === 0) ? digit * 1 : digit * 3;
      }
      return (10 - (sum % 10)) % 10;
    }

    function renderBarcode(barcodeData, container) {
      const binary = barcodeData.binary;
      const code = barcodeData.code;
      const width = 2;
      const height = 60;
      const margin = 10;
      const fontSize = 14;

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const totalWidth = (binary.length * width) + (margin * 2);
      const totalHeight = height + fontSize + 15;

      svg.setAttribute("width", totalWidth);
      svg.setAttribute("height", totalHeight);
      svg.setAttribute("class", "barcode-svg");

      let x = margin;
      for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
          const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute("x", x);
          rect.setAttribute("y", margin);
          rect.setAttribute("width", width);
          rect.setAttribute("height", height);
          rect.setAttribute("fill", "#000");
          svg.appendChild(rect);
        }
        x += width;
      }

      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", totalWidth / 2);
      text.setAttribute("y", totalHeight - 5);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("font-size", fontSize);
      text.setAttribute("font-family", "monospace");
      text.setAttribute("fill", "white");
      text.textContent = code;
      svg.appendChild(text);

      const item = document.createElement("div");
      item.className = "barcode-item";
      item.appendChild(svg);
      container.appendChild(item);
    }

    function gerarTodosBarras() {
      const input = document.getElementById("codigos-barras").value.trim();
      const container = document.getElementById("barcodes");
      container.innerHTML = '';

      if (!input) {
        alert("Por favor, cole alguns códigos EAN13 no campo de texto.");
        return;
      }

      const codigos = input.split('\n').map(line => line.trim()).filter(line => line.length > 0);
      let successCount = 0;
      let errorCount = 0;
      const errorMessages = [];

      codigos.forEach((codigo, index) => {
        try {
          const barcode = generateEAN13(codigo, true);
          renderBarcode(barcode, container);
          successCount++;
        } catch (error) {
          errorCount++;
          errorMessages.push(`Linha ${index + 1}: ${error.message}`);
          const errorDiv = document.createElement("div");
          errorDiv.className = "barcode-item no-print";
          errorDiv.style.color = "red";
          errorDiv.textContent = `Erro: ${codigo} - ${error.message}`;
          container.appendChild(errorDiv);
        }
      });

      if (errorCount > 0) {
        alert(`Foram gerados ${successCount} códigos com sucesso.\n\nErros encontrados (${errorCount}):\n${errorMessages.join('\n')}`);
      } else if (successCount > 0) {
        alert(`Todos os ${successCount} códigos foram gerados com sucesso!`);
      }
    }

    function limparTudoBarras() {
      document.getElementById("codigos-barras").value = '';
      document.getElementById("barcodes").innerHTML = '';
    }

    function copiarCodigosBarras() {
      const input = document.getElementById("codigos-barras");
      input.select();
      document.execCommand('copy');
      alert("Códigos copiados para a área de transferência!");
    }

    const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbwfoYOgleHUcmbr_1B8tV_NG6cEZxcHm5zBSrJ0ItgRV_Cp7tumh3GjBzsvzTSNJ5sbmA/exec";
    const filiaisValidas = ["293", "488", "287", "288", "761"];
    let scannerInstance = null;

    function entrarNF() {
      const codigo = document.getElementById('codigo-nf').value.trim();
      if (!codigo || !filiaisValidas.includes(codigo)) {
        alert("Código de filial inválido.");
        return;
      }
      localStorage.setItem('filial', codigo);
      document.getElementById('login-nf').classList.add('hidden');
      document.getElementById('principal-nf').classList.remove('hidden');
      carregarHistoricoNF(codigo);
    }

    function sairNF() {
      localStorage.removeItem('filial');
      document.getElementById('login-nf').classList.remove('hidden');
      document.getElementById('principal-nf').classList.add('hidden');
      document.getElementById('codigo-nf').value = '';
    }

    function limparHistoricoLocalNF() {
      const senha = prompt("Digite a senha para limpar o histórico:");
      if (senha !== "hs") {
        alert("Senha incorreta. Operação cancelada.");
        return;
      }
      const filial = localStorage.getItem('filial');
      localStorage.removeItem(`historico_${filial}`);
      document.getElementById('historicoLista-nf').innerHTML = '';
      alert("Histórico local apagado.");
    }

    function consultarNotaNF() {
      const filial = localStorage.getItem('filial');
      const chaveInput = document.getElementById('chave-nf');
      const chave = chaveInput.value.trim();
      const resultado = document.getElementById('resultado-nf');
      const erro = document.getElementById('erro-nf');
      const loading = document.getElementById('loading-nf');

      resultado.classList.add('hidden');
      erro.innerText = '';

      if (!filial || chave.length !== 44) {
        erro.innerText = 'Preencha corretamente a chave com 44 dígitos.';
        return;
      }

      const historico = JSON.parse(localStorage.getItem(`historico_${filial}`)) || [];
      if (historico.some(h => h.chave === chave)) {
        erro.innerText = 'Essa chave já foi consultada anteriormente!';
        return;
      }

      loading.classList.remove('hidden');

      fetch(`${URL_SCRIPT}?chave=${chave}&filial=${filial}`)
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            resultado.classList.remove('hidden');
            resultado.innerHTML = `
              <p><strong>Número da NF:</strong> ${data.data.numeroNF}</p>
              <p><strong>Valor Total:</strong> ${data.data.valorTotal}</p>
              <p><strong>Quantidade Total:</strong> ${data.data.quantidadeTotal}</p>
              <p><strong>Status:</strong> ✅ ${data.data.status}</p>
            `;
            historico.push({ chave, dataHora: new Date().toISOString(), ...data.data });
            localStorage.setItem(`historico_${filial}`, JSON.stringify(historico));
            carregarHistoricoNF(filial);
          } else {
            erro.innerText = data.message || 'Erro ao buscar nota fiscal.';
          }
        })
        .catch(() => erro.innerText = 'Erro de comunicação com o servidor.')
        .finally(() => {
          loading.classList.add('hidden');
          chaveInput.value = '';
        });
    }

    function carregarHistoricoNF(filial) {
      const lista = document.getElementById('historicoLista-nf');
      const historico = JSON.parse(localStorage.getItem(`historico_${filial}`)) || [];
      lista.innerHTML = '';
      if (historico.length === 0) {
        lista.innerHTML = '<li>Nenhum histórico local encontrado.</li>';
        return;
      }
      historico.slice().reverse().forEach(item => {
        const data = new Date(item.dataHora).toLocaleDateString('pt-BR');
        lista.innerHTML += `<li>${data} - NF ${item.numeroNF} - ${item.valorTotal} - ${item.quantidadeTotal} itens</li>`;
      });
    }

    async function abrirLeitorNF() {
      const chaveInput = document.getElementById("chave-nf");
      const scannerDiv = document.getElementById("scanner");

      if (chaveInput.value.trim() !== '') {
        alert("Limpe o campo antes de escanear outro código.");
        return;
      }

      try {
        if (scannerInstance) {
          await scannerInstance.destroyContext();
          scannerInstance = null;
        }

        scannerDiv.style.display = "flex";
        scannerInstance = await Dynamsoft.DBR.BarcodeScanner.createInstance();
        await scannerInstance.updateRuntimeSettings("speed");

        scannerInstance.onFrameRead = results => {
          for (let result of results) {
            const codigo = result.barcodeText;
            if (codigo.length >= 44) {
              chaveInput.value = codigo.substring(0, 44);
              scannerInstance.hide();
              scannerInstance.stop();
              scannerDiv.style.display = "none";
              return;
            }
          }
        };

        await scannerInstance.show(scannerDiv);
      } catch (ex) {
        alert("Erro ao iniciar o leitor: " + ex.message);
        scannerDiv.style.display = "none";
      }
    }

    window.addEventListener('load', function () {
      const filial = localStorage.getItem('filial');
      if (filial) {
        document.getElementById('login-nf').classList.add('hidden');
        document.getElementById('principal-nf').classList.remove('hidden');
        carregarHistoricoNF(filial);
      }
    });

    document.addEventListener('DOMContentLoaded', function() {
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const target = mutation.target;
            if (target.id === 'sacola' && target.classList.contains('active')) {
              preencherDataSacola();
            }
          }
        });
      });

      document.querySelectorAll('.section').forEach(function(section) {
        observer.observe(section, { attributes: true });
      });
    });

    // Funções de navegação
    function mostrarSecao(secaoId) {
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(secaoId).classList.add('active');
      document.getElementById('backButton').style.display = secaoId === 'home' ? 'none' : 'block';
    }

    function voltarHome() {
      mostrarSecao('home');
    }

    // Funções de formulário
    document.getElementById("form-folgas").addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(this);

      fetch(this.action, {
        method: "POST",
        body: formData
      })
        .then(response => response.text())
        .then(data => {
          alert("Folga cadastrada com sucesso!");
          this.reset();
          document.getElementById("funcionario-folgas").innerHTML = '<option value="">Selecione a filial primeiro</option>';
          document.getElementById("motivoOutros-folgas").style.display = "none";
        })
        .catch(error => alert("Erro ao enviar os dados!"));
    });

    const filialSelectFalta = document.getElementById('filial-falta');
    const funcionarioSelectFalta = document.getElementById('funcionario-falta');
    const motivoSelectFalta = document.getElementById('motivo-falta');
    const diasContainer = document.getElementById('dias-afastamento-container');
    const formFalta = document.getElementById('form-falta');
    const submitButtonFalta = formFalta.querySelector('button[type="submit"]');

    filialSelectFalta.addEventListener('change', () => {
      const selecionada = filialSelectFalta.value;
      funcionarioSelectFalta.innerHTML = '<option value="">Selecione um funcionário</option>';
      if (funcionariosPorFilial[selecionada]) {
        funcionariosPorFilial[selecionada].forEach(nome => {
          const option = document.createElement('option');
          option.value = nome;
          option.textContent = nome;
          funcionarioSelectFalta.appendChild(option);
        });
      }
    });

    motivoSelectFalta.addEventListener('change', () => {
      diasContainer.style.display = motivoSelectFalta.value === 'ATESTADO MÉDICO' ? 'block' : 'none';
    });

    formFalta.addEventListener('submit', e => {
      e.preventDefault();
      submitButtonFalta.disabled = true;

      const data = new FormData(formFalta);
     const dataFaltaInput = document.getElementById('data-falta');
    const val = dataFaltaInput.value;
    if (!val) {
      alert("Informe a Data da Falta.");
      submitButtonFalta.disabled = false;
      return;
    }
    const [yyyy, mm, dd] = val.split('-'); // "2025-08-26"
    const dataFormatada = `${dd}/${mm}/${yyyy}`;
    data.set("data_falta", dataFormatada);

      fetch('https://script.google.com/macros/s/AKfycbxu_jVaotWytMOQh4UCZetFZFOxgk5ePrOkaviDd-qKNPiu2_8BjCaNczAVZzaDwAbj/exec', {
        method: 'POST',
        body: data
      })
      .then(res => res.text())
      .then(() => {
        alert("Falta cadastrada com sucesso!");
        formFalta.reset();
        diasContainer.style.display = 'none';
        submitButtonFalta.disabled = false;
      })
      .catch(() => {
        alert("Erro ao registrar a falta. Tente novamente.");
        submitButtonFalta.disabled = false;
      });
    });

    function toggleCamposG() {
      const grupoG = document.getElementById("grupo-tamanho-g");
      const checkbox = document.getElementById("mostrar-g");
      grupoG.style.display = checkbox.checked ? "block" : "none";
    }

    function getDataHoraAtualBR() {
      const agora = new Date();
      return agora.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    }

    function preencherDataSacola() {
      document.getElementById("data-contagem").value = getDataHoraAtualBR();
    }

    document.getElementById("form-sacola").addEventListener("submit", async function (e) {
      e.preventDefault();

      const checkboxG = document.getElementById("mostrar-g");
      const sacolaG = document.getElementById("sacola-g");
      const envelopeG = document.getElementById("envelope-g");

      if (checkboxG.checked) {
        if (sacolaG.value === "" || envelopeG.value === "") {
          alert("Preencha os campos de Sacola G e Envelope G.");
          return;
        }
      }

      const botao = document.getElementById("btn-enviar");
      botao.disabled = true;

      document.getElementById("data-contagem").value = getDataHoraAtualBR();

      const form = e.target;
      const formData = new FormData(form);

      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbxu_jVaotWytMOQh4UCZetFZFOxgk5ePrOkaviDd-qKNPiu2_8BjCaNczAVZzaDwAbj/exec", {
          method: "POST",
          body: formData
        });

        const resText = await response.text();
        alert("Contagem registrada com sucesso!");
        form.reset();
        toggleCamposG();
        document.getElementById("data-contagem").value = getDataHoraAtualBR();
      } catch (err) {
        alert("Erro ao registrar os dados. Tente novamente.");
        console.error("Erro:", err);
      } finally {
        botao.disabled = false;
      }
    });

    let isSubmittingDiv = false;

    document.getElementById('transportadora-div').addEventListener('change', function() {
      const outrosDiv = document.getElementById('outrosTransportadoraDiv');
      if (this.value === 'OUTROS') {
        outrosDiv.style.display = 'block';
        document.getElementById('outraTransportadoraDiv').required = true;
      } else {
        outrosDiv.style.display = 'none';
        document.getElementById('outraTransportadoraDiv').required = false;
      }
    });

    function enviarFormularioDivergencia(event) {
      event.preventDefault();

      if (isSubmittingDiv) {
        return;
      }

      isSubmittingDiv = true;

      const button = event.target.querySelector("button[type='submit']");
      const loadingMessage = document.getElementById("loadingMessageDiv");

      button.disabled = true;
      button.textContent = "Enviando...";

      loadingMessage.style.display = "block";

      var form = document.getElementById("formulario-divergencia");
      var formData = new FormData(form);

      fetch("https://script.google.com/macros/s/AKfycbw5xq6i5Qoc0s3f-ZaQ6FCZdsjXrC_my8d0tmgr756hWZQqT9Olu9DjsGOYwTlvnBQA/exec", {
        method: "POST",
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        alert("SUA DIVERGÊNCIA FOI ENVIADA COM SUCESSO, AGRADECEMOS SEU APOIO");
        form.reset();
        document.getElementById('outrosTransportadoraDiv').style.display = 'none';
      })
      .catch(error => {
        alert("Erro ao enviar o formulário. Tente novamente.");
      })
      .finally(() => {
        setTimeout(() => {
          button.disabled = false;
          button.textContent = "Enviar";
          isSubmittingDiv = false;
          loadingMessage.style.display = "none";
        }, 100);
      });
    }

    function atualizarEmailTrans() {
      const filialOrigem = document.getElementById('filial-origem').value;
      const filialDestinoSelect = document.getElementById('filial-destino');
      const emailPorFilial = {
        ARTUR: "heringarturmachado@gmail.com",
        FLORIANO: "hs.uberlandia.floriano@gmail.com",
        JOTA: "brunohenzo09@gmail.com",
        MODA: "dlaire28@gmail.com",
        PONTO: "soniameiry@gmail.com",
        JA: "jaugustocoliveira@terra.com.br",
        JE: "jeoliveira1966@gmail.com"
      };
      document.getElementById('email-trans').value = emailPorFilial[filialOrigem] || "";

      Array.from(filialDestinoSelect.options).forEach(option => {
        option.disabled = option.value === filialOrigem;
      });

      if (filialDestinoSelect.value === filialOrigem) {
        filialDestinoSelect.value = "";
      }
    }

    function contarLinhasTrans() {
      const mercadorias = document.getElementById('mercadorias-trans').value;
      const linhas = mercadorias.split('\n').filter(linha => linha.trim() !== '');
      document.getElementById('total-itens-trans').textContent = linhas.length;
    }

    // FUNÇÃO DE ENVIO CORRIGIDA (TRANSFERÊNCIA)
    document.getElementById('transfer-form').addEventListener('submit', function (event) {
      event.preventDefault();
      enviarFormularioTrans();
    });

    function enviarFormularioTrans() {
      const form = document.getElementById('transfer-form');
      if (!form.checkValidity()) {
          mostrarMensagemErroTrans("Por favor, preencha todos os campos obrigatórios!");
          return;
      }

      const formData = new FormData(form);
      // CORREÇÃO: Adicionando o campo de ação para o GS
      formData.append('action', 'transferencia'); 
      
      const data = new URLSearchParams(formData).toString();

      document.getElementById('loading-overlay-trans').style.display = 'flex';

      fetch("https://script.google.com/macros/s/AKfycbxu_jVaotWytMOQh4UCZetFZFOxgk5ePrOkaviDd-qKNPiu2_8BjCaNczAVZzaDwAbj/exec", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: data
      })
      .then(response => {
          // CORREÇÃO: Verifica se a resposta é OK (200)
          if (response.ok) {
              return response.json();
          }
          // Se a resposta não for OK, tenta ler como texto para ver o erro do Google
          return response.text().then(text => {
              // Tenta analisar o JSON de erro do Google
              try {
                  const errorJson = JSON.parse(text);
                  // Se for o JSON de erro do Google, lança uma exceção com a mensagem
                  if (errorJson.error === "ação inválida") {
                      throw new Error("Erro de Servidor: Ação não identificada no Google Apps Script. Verifique os logs de execução do GS.");
                  }
                  throw new Error(errorJson.error || "Erro desconhecido do servidor.");
              } catch (e) {
                  // Se não for JSON (ex: HTML de erro do Google), lança uma exceção genérica
                  throw new Error("Erro ao enviar: Resposta inesperada do servidor. Status: " + response.status);
              }
          });
      })
      .then(responseData => {
          document.getElementById('loading-overlay-trans').style.display = 'none';

          // Lógica original (agora mais segura)
          if (responseData.numeroTransferencia) {
              mostrarMensagemSucessoTrans();
              exibirNumeroTransferencia(responseData.numeroTransferencia);
              setTimeout(limparFormularioTrans, 5000);
          } else if (responseData.status === "ERRO") {
              // Se o GS retornar um JSON de erro (status: "ERRO")
              mostrarMensagemErroTrans(responseData.msg || "Erro ao enviar: Resposta inválida do servidor.");
          } else {
               // Caso a resposta seja 200, mas sem o numeroTransferencia
              mostrarMensagemErroTrans("Erro ao enviar: Resposta inválida do servidor.");
          }
      })
      .catch(error => {
          document.getElementById('loading-overlay-trans').style.display = 'none';
          // Exibe a mensagem de erro capturada (incluindo a mensagem do GS)
          mostrarMensagemErroTrans(error.message || "Erro ao enviar o formulário. Tente novamente.");
      });
    }

    function mostrarMensagemSucessoTrans() {
      document.getElementById('success-message-trans').style.display = 'block';
      document.getElementById('error-message-trans').style.display = 'none';
    }

    function mostrarMensagemErroTrans(mensagem) {
      document.getElementById('error-message-trans').innerHTML = mensagem;
      document.getElementById('error-message-trans').style.display = 'block';
      document.getElementById('success-message-trans').style.display = 'none';
    }

    function exibirNumeroTransferencia(numero) {
      document.getElementById('success-message-trans').innerHTML = `Transferência enviada com sucesso! Número: <strong>${numero}</strong>`;
    }

    function limparFormularioTrans() {
      document.getElementById('transfer-form').reset();
      document.getElementById('total-itens-trans').textContent = '0';
      document.getElementById('success-message-trans').style.display = 'none';
      document.getElementById('error-message-trans').style.display = 'none';
      contarLinhasTrans();
    }

    // Funções de código de barras (mantidas)
    function generateEAN13(code, skipValidation = false) {
      // ... (Sua função original) ...
      if (!/^\d{12,13}$/.test(code)) {
        throw new Error(`Código inválido: "${code}" - Deve conter 12 ou 13 dígitos`);
      }

      if (code.length === 12) {
        code += calculateChecksum(code);
      } else if (!skipValidation && calculateChecksum(code.substring(0, 12)) != code[12]) {
        throw new Error(`Dígito verificador inválido para código: "${code}"`);
      }

      const patterns = {
        L: ["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],
        G: ["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"],
        R: ["1110010","1100110","1101100","1000010","1011100","1001110","1010000","1000100","1001000","1110100"]
      };

      const structure = ["LLLLLL","LLGLGG","LLGGLG","LLGGGL","LGLLGG","LGGLLG","LGGGLL","LGLGLG","LGLGGL","LGGLGL"];
      const firstDigit = parseInt(code[0]);
      const pattern = structure[firstDigit];

      let barcode = "101";
      for (let i = 1; i <= 6; i++) {
        const digit = parseInt(code[i]);
        barcode += patterns[pattern[i - 1]][digit];
      }

      barcode += "01010";

      for (let i = 7; i <= 12; i++) {
        const digit = parseInt(code[i]);
        barcode += patterns.R[digit];
      }

      barcode += "101";

      return {
        code: code,
        binary: barcode
      };
    }

    function calculateChecksum(code) {
      let sum = 0;
      for (let i = 0; i < 12; i++) {
        const digit = parseInt(code[i]);
        sum += (i % 2 === 0) ? digit * 1 : digit * 3;
      }
      return (10 - (sum % 10)) % 10;
    }

    function renderBarcode(barcodeData, container) {
      const binary = barcodeData.binary;
      const code = barcodeData.code;
      const width = 2;
      const height = 60;
      const margin = 10;
      const fontSize = 14;

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const totalWidth = (binary.length * width) + (margin * 2);
      const totalHeight = height + fontSize + 15;

      svg.setAttribute("width", totalWidth);
      svg.setAttribute("height", totalHeight);
      svg.setAttribute("class", "barcode-svg");

      let x = margin;
      for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
          const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute("x", x);
          rect.setAttribute("y", margin);
          rect.setAttribute("width", width);
          rect.setAttribute("height", height);
          rect.setAttribute("fill", "#000");
          svg.appendChild(rect);
        }
        x += width;
      }

      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", totalWidth / 2);
      text.setAttribute("y", totalHeight - 5);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("font-size", fontSize);
      text.setAttribute("font-family", "monospace");
      text.setAttribute("fill", "white");
      text.textContent = code;
      svg.appendChild(text);

      const item = document.createElement("div");
      item.className = "barcode-item";
      item.appendChild(svg);
      container.appendChild(item);
    }

    function gerarTodosBarras() {
      const input = document.getElementById("codigos-barras").value.trim();
      const container = document.getElementById("barcodes");
      container.innerHTML = '';

      if (!input) {
        alert("Por favor, cole alguns códigos EAN13 no campo de texto.");
        return;
      }

      const codigos = input.split('\n').map(line => line.trim()).filter(line => line.length > 0);
      let successCount = 0;
      let errorCount = 0;
      const errorMessages = [];

      codigos.forEach((codigo, index) => {
        try {
          const barcode = generateEAN13(codigo, true);
          renderBarcode(barcode, container);
          successCount++;
        } catch (error) {
          errorCount++;
          errorMessages.push(`Linha ${index + 1}: ${error.message}`);
          const errorDiv = document.createElement("div");
          errorDiv.className = "barcode-item no-print";
          errorDiv.style.color = "red";
          errorDiv.textContent = `Erro: ${codigo} - ${error.message}`;
          container.appendChild(errorDiv);
        }
      });

      if (errorCount > 0) {
        alert(`Foram gerados ${successCount} códigos com sucesso.\n\nErros encontrados (${errorCount}):\n${errorMessages.join('\n')}`);
      } else if (successCount > 0) {
        alert(`Todos os ${successCount} códigos foram gerados com sucesso!`);
      }
    }

    function limparTudoBarras() {
      document.getElementById("codigos-barras").value = '';
      document.getElementById("barcodes").innerHTML = '';
    }

    function copiarCodigosBarras() {
      const input = document.getElementById("codigos-barras");
      input.select();
      document.execCommand('copy');
      alert("Códigos copiados para a área de transferência!");
    }

    const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbwfoYOgleHUcmbr_1B8tV_NG6cEZxcHm5zBSrJ0ItgRV_Cp7tumh3GjBzsvzTSNJ5sbmA/exec";
    const filiaisValidas = ["293", "488", "287", "288", "761"];
    let scannerInstance = null;

    function entrarNF() {
      const codigo = document.getElementById('codigo-nf').value.trim();
      if (!codigo || !filiaisValidas.includes(codigo)) {
        alert("Código de filial inválido.");
        return;
      }
      localStorage.setItem('filial', codigo);
      document.getElementById('login-nf').classList.add('hidden');
      document.getElementById('principal-nf').classList.remove('hidden');
      carregarHistoricoNF(codigo);
    }

    function sairNF() {
      localStorage.removeItem('filial');
      document.getElementById('login-nf').classList.remove('hidden');
      document.getElementById('principal-nf').classList.add('hidden');
      document.getElementById('codigo-nf').value = '';
    }

    function limparHistoricoLocalNF() {
      const senha = prompt("Digite a senha para limpar o histórico:");
      if (senha !== "hs") {
        alert("Senha incorreta. Operação cancelada.");
        return;
      }
      const filial = localStorage.getItem('filial');
      localStorage.removeItem(`historico_${filial}`);
      document.getElementById('historicoLista-nf').innerHTML = '';
      alert("Histórico local apagado.");
    }

    function consultarNotaNF() {
      const filial = localStorage.getItem('filial');
      const chaveInput = document.getElementById('chave-nf');
      const chave = chaveInput.value.trim();
      const resultado = document.getElementById('resultado-nf');
      const erro = document.getElementById('erro-nf');
      const loading = document.getElementById('loading-nf');

      resultado.classList.add('hidden');
      erro.innerText = '';

      if (!filial || chave.length !== 44) {
        erro.innerText = 'Preencha corretamente a chave com 44 dígitos.';
        return;
      }

      const historico = JSON.parse(localStorage.getItem(`historico_${filial}`)) || [];
      if (historico.some(h => h.chave === chave)) {
        erro.innerText = 'Essa chave já foi consultada anteriormente!';
        return;
      }

      loading.classList.remove('hidden');

      fetch(`${URL_SCRIPT}?chave=${chave}&filial=${filial}`)
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            resultado.classList.remove('hidden');
            resultado.innerHTML = `
              <p><strong>Número da NF:</strong> ${data.data.numeroNF}</p>
              <p><strong>Valor Total:</strong> ${data.data.valorTotal}</p>
              <p><strong>Quantidade Total:</strong> ${data.data.quantidadeTotal}</p>
              <p><strong>Status:</strong> ✅ ${data.data.status}</p>
            `;
            historico.push({ chave, dataHora: new Date().toISOString(), ...data.data });
            localStorage.setItem(`historico_${filial}`, JSON.stringify(historico));
            carregarHistoricoNF(filial);
          } else {
            erro.innerText = data.message || 'Erro ao buscar nota fiscal.';
          }
        })
        .catch(() => erro.innerText = 'Erro de comunicação com o servidor.')
        .finally(() => {
          loading.classList.add('hidden');
          chaveInput.value = '';
        });
    }

    function carregarHistoricoNF(filial) {
      const lista = document.getElementById('historicoLista-nf');
      const historico = JSON.parse(localStorage.getItem(`historico_${filial}`)) || [];
      lista.innerHTML = '';
      if (historico.length === 0) {
        lista.innerHTML = '<li>Nenhum histórico local encontrado.</li>';
        return;
      }
      historico.slice().reverse().forEach(item => {
        const data = new Date(item.dataHora).toLocaleDateString('pt-BR');
        lista.innerHTML += `<li>${data} - NF ${item.numeroNF} - ${item.valorTotal} - ${item.quantidadeTotal} itens</li>`;
      });
    }

    async function abrirLeitorNF() {
      const chaveInput = document.getElementById("chave-nf");
      const scannerDiv = document.getElementById("scanner");

      if (chaveInput.value.trim() !== '') {
        alert("Limpe o campo antes de escanear outro código.");
        return;
      }

      try {
        if (scannerInstance) {
          await scannerInstance.destroyContext();
          scannerInstance = null;
        }

        scannerDiv.style.display = "flex";
        scannerInstance = await Dynamsoft.DBR.BarcodeScanner.createInstance();
        await scannerInstance.updateRuntimeSettings("speed");

        scannerInstance.onFrameRead = results => {
          for (let result of results) {
            const codigo = result.barcodeText;
            if (codigo.length >= 44) {
              chaveInput.value = codigo.substring(0, 44);
              scannerInstance.hide();
              scannerInstance.stop();
              scannerDiv.style.display = "none";
              return;
            }
          }
        };

        await scannerInstance.show(scannerDiv);
      } catch (ex) {
        alert("Erro ao iniciar o leitor: " + ex.message);
        scannerDiv.style.display = "none";
      }
    }

    window.addEventListener('load', function () {
      const filial = localStorage.getItem('filial');
      if (filial) {
        document.getElementById('login-nf').classList.add('hidden');
        document.getElementById('principal-nf').classList.remove('hidden');
        carregarHistoricoNF(filial);
      }
    });

    document.addEventListener('DOMContentLoaded', function() {
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const target = mutation.target;
            if (target.id === 'sacola' && target.classList.contains('active')) {
              preencherDataSacola();
            }
          }
        });
      });

      document.querySelectorAll('.section').forEach(function(section) {
        observer.observe(section, { attributes: true });
      });
    });
  </script>
</body>
</html>

