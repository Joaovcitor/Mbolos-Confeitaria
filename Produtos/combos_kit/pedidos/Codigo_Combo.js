const produtosObj = {
  p25: {
    nome: "Porção de 25 Unidades",
    descricao:
      "Combo com 25 salgados, onde vai coxinha, risole e bolinha de queijo",
    preco: 10,
  },
  p50: {
    nome: "Porção de 50 Unidades",
    descricao:
      "Combo com 50 salgados, onde vai coxinha, risole e bolinha de queijo",
    preco: 18,
  },
  p100: {
    nome: "Porção de 100 Unidades",
    descricao:
      "Combo com 100 salgados, onde vai coxinha, risole e bolinha de queijo",
    preco: 35,
  },
};

const produtosObjRefrigerantes = {
  r1: {
    nome: "Cajuína de 1L",
    preco: 7,
    descricao: "Uma Cajuína Geladinha!",
  },
  r2: {
    nome: "Cajuína de 2L",
    preco: 10,
    descricao: "Uma Cajuína Geladinha!",
  },
  r3: {
    nome: "Coca Cola de 1L",
    preco: 5,
    descricao: "Aquela coquinha que combina com tudo!",
  },
  r4: {
    nome: "Coca Cola de 2L",
    preco: 9,
    descricao: "Aquela coquinha que combina com tudo!",
  },
};

let produtoAtual = null;

// AQUI VAI SERVIR PARA PODER REALIZAR A VENDA DIRETA, NÃO SE COMUNICANDO COM O CÓDIGO DE CARRINHO

const pedido = document.querySelectorAll(".coluna-produto");
pedido.forEach((produto) => {
  const pedidoCombo = document.querySelector(".pedido-personalizado-vulcao");
  const imgExcluir = document.querySelector(".excluir");
  imgExcluir.style.display = "none";
  pedidoCombo.style.display = "none";

  produto.addEventListener("click", function (e) {
    e.preventDefault();
    pedidoCombo.style.display = "inline";
    imgExcluir.style.display = "inline";

    produtoAtual = this.getAttribute("data-produto");
    const produtos = produtosObj[produtoAtual];
    const ped = document.querySelector(".nome-do-pedido");
    ped.innerHTML = produtos.nome;
  });

  imgExcluir.addEventListener("click", function (e) {
    e.preventDefault();
    const ped = document.querySelector(".nome-do-pedido");
    ped.innerHTML = "";
    imgExcluir.style.display = "none";
    pedidoCombo.style.display = "none";
  });
});

const bnt = document.querySelector(".bnt-venda");
bnt.addEventListener("click", function (e) {
  e.preventDefault();

  if (produtoAtual) {
    const produtos = produtosObj[produtoAtual];
    const pagamento = document.querySelector("#pagamento").value;

    if (pagamento === "Selecione")
      return alert("Por favor, coloque a forma de pagamento");

    const endereco = document.querySelector("#endereco").value;
    if (endereco === "") {
      return alert("coloque seu endereço");
    }

    const obs = document.querySelector(".obs").value;
    console.log(obs);

    if (obs !== "") {
      let enviaMsg = `Olá, eu quero uma ${produtos.nome} de salgadinhos. Meu endereço: ${endereco}. Forma de pagamento: ${pagamento}. OBS.: ${obs}`;
      let link =
        "https://wa.me/558899547981/?text=" + encodeURIComponent(enviaMsg);
      window.open(link);
      return link;
    } else {
      let enviaMsg = `Olá, eu quero uma ${produtos.nome} de salgadinhos. Meu endereço: ${endereco}. Forma de pagamento: ${pagamento}`;
      let link =
        "https://wa.me/558899547981/?text=" + encodeURIComponent(enviaMsg);
      window.open(link);
    }
  }
});

function mostrarValores() {
  const produto = document.querySelectorAll("[data-produto]");
  const desc = document.querySelectorAll(".descricao");
  const nomeObj = document.querySelectorAll(".nome_produto_obj");
  const preco = document.querySelectorAll(".preco");

  for (let i = 0; i < produto.length; i++) {
    const produtos = produto[i].getAttribute("data-produto");
    produtoAtual = produtosObj[produtos];
    desc[i].innerHTML = produtoAtual.descricao;
    nomeObj[i].innerHTML = produtoAtual.nome;
    preco[i].innerHTML = `Por apenas R$${produtoAtual.preco}`;
  }
}
mostrarValores();

function mostraRefri() {
  const produto = document.querySelectorAll("[data-refri]");
  const desc = document.querySelectorAll(".descricao_ref");
  const nomeObj = document.querySelectorAll(".nome_produto_obj_ref");
  const preco = document.querySelectorAll(".preco_ref");

  for (let i = 0; i < produto.length; i++) {
    const produtos = produto[i].getAttribute("data-refri");
    produtoAtual = produtosObjRefrigerantes[produtos];
    desc[i].innerHTML = produtoAtual.descricao;
    nomeObj[i].innerHTML = produtoAtual.nome;
    preco[i].innerHTML = `Por apenas R$${produtoAtual.preco}`;
  }
}
mostraRefri();
