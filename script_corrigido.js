// === LICENÇA DYNAMSOFT ===
Dynamsoft.DBR.BarcodeScanner.license = "DLS2eyJoYW5kc2hha2VDb2RlIjoiMTA0NDIzNjk5LU1UQTBOREl6TmprNUxYZGxZaTFVY21saGJGQnliMm8iLCJtYWluU2VydmVyVVJMIjoiaHR0cHM6Ly9tZGxzLmR5bmFtc29mdG9ubGluZS5jb20iLCJvcmdhbml6YXRpb25JRCI6IjEwNDQyMzY5OSIsInN0YW5kYnlTZXJ2ZXJVUkwiOiJodHRwczovL3NkbHMuZHluYW1zb2Z0b25saW5lLmNvbSIsImNoZWNrQ29kZSI6MTEzNzY0MDQxN30=";

// === ENDPOINTS ===
const APPWEB_NEW = "https://script.google.com/macros/s/AKfycbwUbsFzEiaBzI_q-WVWywEwWTBVl5eXfmVBN4McnnLNu-rTAnhc9BacOX2qCac8LlPReA/exec";
const APPWEB_OLD = "https://script.google.com/macros/s/AKfycbxu_jVaotWytMOQh4UCZetFZFOxgk5ePrOkaviDd-qKNPiu2_8BjCaNczAVZzaDwAbj/exec";

// === FUNCIONÁRIOS POR FILIAL ===
const funcionariosPorFilial = {
  "ARTUR": ["LUCILENE", "POLIANA", "TAINARA"],
  "FLORIANO": ["IOLANDA", "MEIRE", "SARA", "GABRYELLA"],
  "JOTA": ["BRUNO", "CARINA", "DENISE", "FABIOLA", "INGRID", "MARCOS", "RAYSSA", "VERA"],
  "MODA": ["ANA CLARA", "DAIANE", "JOANA", "MARCIA", "MARIA"],
  "PONTO": ["DANIELA", "EVANEUZA", "ISADORA", "PAULA", "PRISCILA", "SÔNIA", "SUELI"]
};

// === ATUALIZA FUNCIONÁRIOS ===
function atualizarFuncionarios() {
  const filialSel = document.getElementById('filial-folgas') || document.getElementById('filial-falta');
  const funcionarioSel = document.getElementById('funcionario-folgas') || document.getElementById('funcionario-falta');
  if (!filialSel || !funcionarioSel) return;

  const filial = filialSel.value;
  funcionarioSel.innerHTML = "<option value=''>Selecione um funcionário</option>";

  if (filial && funcionariosPorFilial[filial]) {
    funcionariosPorFilial[filial].forEach(nome => {
      const opt = document.createElement("option");
      opt.value = nome;
      opt.textContent = nome;
      funcionarioSel.appendChild(opt);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const filialSel = document.getElementById('filial-folgas') || document.getElementById('filial-falta');
  if (filialSel) filialSel.addEventListener('change', atualizarFuncionarios);
});

// === FORM FOLGAS ===
const formFolgas = document.getElementById("form-folgas");
if (formFolgas) {
  formFolgas.addEventListener("submit", function (e) {
    e.preventDefault();
    const fdNew = new FormData(this);
    const fdOld = new FormData(this);
    Promise.allSettled([
      fetch(APPWEB_NEW, { method: "POST", body: fdNew }),
      fetch(APPWEB_OLD, { method: "POST", body: fdOld })
    ]).then(r => {
      const ok = r.some(x => x.status === "fulfilled");
      alert(ok ? "Folga cadastrada com sucesso!" : "Erro ao cadastrar. Tente novamente.");
      if (ok) this.reset();
    });
  });
}

// === FORM FALTA ===
const formFalta = document.getElementById("form-falta");
if (formFalta) {
  formFalta.addEventListener("submit", function (e) {
    e.preventDefault();
    const fdNew = new FormData(this);
    const fdOld = new FormData(this);
    Promise.allSettled([
      fetch(APPWEB_NEW, { method: "POST", body: fdNew }),
      fetch(APPWEB_OLD, { method: "POST", body: fdOld })
    ]).then(r => {
      const ok = r.some(x => x.status === "fulfilled");
      alert(ok ? "Falta cadastrada com sucesso!" : "Erro ao cadastrar. Tente novamente.");
      if (ok) this.reset();
    });
  });
}

// === LOGIN NF ===
const senhasNF = { ARTUR: "288", FLORIANO: "287", JOTA: "293", MODA: "294", PONTO: "295" };
let filialLogadaNF = null;

function entrarNF() {
  const input = document.getElementById('codigo-nf');
  if (!input) return;
  const codigo = input.value.trim();
  const filial = Object.keys(senhasNF).find(k => senhasNF[k] === codigo);
  if (filial) {
    filialLogadaNF = filial;
    document.getElementById('login-nf').classList.add('hidden');
    document.getElementById('principal-nf').classList.remove('hidden');
  } else alert('Código da filial incorreto!');
}

function sairNF() {
  filialLogadaNF = null;
  document.getElementById('login-nf').classList.remove('hidden');
  document.getElementById('principal-nf').classList.add('hidden');
  const input = document.getElementById('codigo-nf');
  if (input) input.value = '';
}

console.log('%c✅ Script principal carregado com segurança', 'color: #00ff99; font-weight: bold;');
