const form = document.querySelector("#formulario");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const recheio = document.querySelector("#recheios").value;
  const pagamento = document.querySelector("#pagamento").value;
  const massa = document.querySelector("#massa").value;
  const box = document.querySelector("#sim");
  const boxNao = document.querySelector("#nao");

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

const bolo = {
  bolo24: {
    fatias: 24,
    preco: 56.0,
  },
  bolo32: {
    fatias: 32,
    preco: 0.0,
  },
  bolo38: {
    fatias: 38,
    preco: 0.0,
  },
};

const produtoAtual = document.body.getAttribute("data-produto");
const produto = bolo[produtoAtual];

function geraMensagem(massa, recheio,recheio2, formaDePagamento, fruta) {
  const box = document.querySelector("#sim");
  const produtoAtual = document.body.getAttribute("data-produto");
  const produto = bolo[produtoAtual];

  if (box.checked) {
    return `Olá, eu gostaria de um bolo de 1 andar que serve até ${produto.fatias} fatias, com a massa ${massa}, com o primeiro recheio de ${recheio} e o segundo recheio de ${recheio2} a fruta ${fruta}, a forma de pagamento é no ${formaDePagamento}`;
  } else {
    return `Olá, eu gostaria de um bolo de 1 andar que serve até ${produto.fatias} fatias, com a massa ${massa}, com o primeiro recheio de ${recheio} e o segundo recheio de ${recheio2}, a forma de pagamento é no ${formaDePagamento}`;
  }
}

const selecionado = document
  .querySelector(".bnt-encomenda")
  .addEventListener("click", function () {
    const box = document.querySelector("#sim");
    const fruit = document.querySelector(".frutas");
    const valor = fruit.value;
    const recheio = document.querySelector("#recheios").value;
    const recheio2 = document.querySelector("#recheios2").value;
    const pagamento = document.querySelector("#pagamento").value;
    const massa = document.querySelector("#massa").value;

    if (
      recheio != "selecione" &&
      pagamento != "selecione" &&
      massa != "selecione" &&
      box.checked
    ) {
      let enviaMsg = geraMensagem(massa, recheio,recheio2, pagamento, valor);
      let link =
        "https://wa.me/558899547981/?text=" + encodeURIComponent(enviaMsg);
      window.open(link);
    }

    if (
      recheio != "selecione" &&
      pagamento != "selecione" &&
      massa != "selecione"
    ) {
      let enviaMsg = geraMensagem(massa, recheio, recheio2, pagamento);
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
