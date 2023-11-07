const form = document.querySelector("#formulario");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const pagamento = document.querySelector("#pagamento").value;
  const massa = document.querySelector("#massa").value;

  const recheio = document.querySelector("#recheios").value;
  const recheio2 = document.querySelector("#recheios2").value;
  const recheio3 = document.querySelector("#recheios3").value;

  if (
    recheio === "selecione" ||
    recheio2 === "selecione" ||
    recheio3 === "selecione"
  ) {
    alert("selecione o recheio");
    return;
  }
  if (massa === "selecione") {
    alert("Selecione a massa");
    return;
  }

  if (pagamento === "selecione") {
    alert("Selecione uma forma de pagamento");
    return;
  }
});

const bolo = {
  bolo20: {
    fatias: 20,
    preco: 56.0,
  },
  bolo34: {
    fatias: 34,
    preco: 0.0,
  },
  bolo36: {
    fatias: 36,
    preco: 0.0,
  },
  bolo44: {
    fatias: 44,
    preco: 0.0,
  },
  bolo46: {
    fatias: 46,
    preco: 0.0,
  },
};

function geraMensagem(
  massa,
  recheio,
  recheio2,
  recheio3,
  formaDePagamento,
  fruta
) {
  const box = document.querySelector("#sim");
  const produtoAtual = document.body.getAttribute("data-produto");
  const produto = bolo[produtoAtual];

  if (box.checked) {
    return `Olá, eu gostaria de um bolo de 2 andar, com a massa ${massa}, com recheio de ${recheio} e a fruta ${fruta}, a forma de pagamento é no ${formaDePagamento}`;
  } else {
    return `Olá, eu gostaria de um bolo de 2 andares, com a massa ${massa}, 
    com o primeiro recheio de ${recheio}, o segundo de ${recheio2} e o terceiro de ${recheio3}, 
    a forma de pagamento é no ${formaDePagamento}`;
  }
}

const selecionado = document
  .querySelector(".bnt-encomenda")
  .addEventListener("click", function () {
    const box = document.querySelector("#sim");
    const fruit = document.querySelector(".frutas");
    const valor = fruit.value;
    const pagamento = document.querySelector("#pagamento").value;
    const massa = document.querySelector("#massa").value;
    let link;

    const recheio = document.querySelector("#recheios").value;
    const recheio2 = document.querySelector("#recheios2").value;
    const recheio3 = document.querySelector("#recheios3").value;
    if (
      recheio != "selecione" &&
      recheio2 != "selecione" &&
      recheio3 != "selecione" &&
      pagamento != "selecione" &&
      massa != "selecione" &&
      box.checked
    ) {
      let enviaMsg = geraMensagem(
        massa,
        recheio,
        recheio2,
        recheio3,
        pagamento,
        valor
      );
      link =
        "https://wa.me/558899547981/?text=" + encodeURIComponent(enviaMsg);
    }
    if (
      recheio != "selecione" &&
      recheio2 != "selecione" &&
      recheio3 != "selecione" &&
      pagamento != "selecione" &&
      massa != "selecione"
    ) {
      let enviaMsg = geraMensagem(
        massa,
        recheio,
        recheio2,
        recheio3,
        pagamento,
        valor
      );
      link =
        "https://wa.me/558899547981/?text=" + encodeURIComponent(enviaMsg);
    }

    if (link) {
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
