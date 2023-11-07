const form = document.querySelector("#formulario");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const recheio = document.querySelector("#recheios").value;
  const pagamento = document.querySelector("#pagamento").value;
  const massa = document.querySelector("#massa").value;

  if (massa === "selecione") {
    alert("Selecione a massa");
    return;
  }

  if (recheio === "selecione") {
    alert("selecione um recheio!");
    return;
  }

  if (pagamento === "selecione") {
    alert("Selecione uma forma de pagamento");
    return;
  }
});

const bolos = {
  bolo10: {
    fatia: 12,
    preco: 56.0,
  },
  bolo18: {
    fatia: 20,
    preco: 0.0,
  },
};

function geraMensagem(massa, recheio, formaDePagamento, fruta) {
  const box = document.querySelector("#sim");
  const produtoAtual = document.body.getAttribute("data-produto");
  const produto = bolos[produtoAtual];

  if (box.checked) {
    return `Olá, eu gostaria de um bolo de 1 andar que serve até ${produto.fatia} fatias, com a massa ${massa}, com recheio de ${recheio} e a fruta ${fruta}, a forma de pagamento é no ${formaDePagamento}`;
  } else {
    return `Olá, eu gostaria de um bolo de 1 andar que serve até ${produto.fatia} fatias, com a massa ${massa}, com recheio de ${recheio}, a forma de pagamento é no ${formaDePagamento}`;
  }
}

// 10 a 12 fatias
document.querySelector("#bnt-1").addEventListener("click", function () {
  const fruit = document.querySelector(".frutas");
  const valor = fruit.value;
  const recheio = document.querySelector("#recheios").value;
  const pagamento = document.querySelector("#pagamento").value;
  const massa = document.querySelector("#massa").value;
  if (
    recheio != "selecione" &&
    pagamento != "selecione" &&
    massa != "selecione" &&
    box.checked
  ) {
    let enviaMsg = geraMensagem(massa, recheio, pagamento, valor);
    let link =
      "https://wa.me/558899547981/?text=" + encodeURIComponent(enviaMsg);
    window.open(link);
  }

  if (
    recheio != "selecione" &&
    pagamento != "selecione" &&
    massa != "selecione"
  ) {
    let enviaMsg = geraMensagem(massa, recheio, pagamento);
    let link =
      "https://wa.me/558899547981/?text=" + encodeURIComponent(enviaMsg);
    window.open(link);
  }
});

const box = document.querySelector("#sim");
const elemento = document.querySelector(".elementoOculto");

box.addEventListener("change", function () {
  if (box.checked) {
    elemento.style.display = "block";
  } else {
    elemento.style.display = "none";
  }
});
