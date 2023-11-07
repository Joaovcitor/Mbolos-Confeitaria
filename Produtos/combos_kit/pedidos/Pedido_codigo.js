const kits = {
  kit1: {
    valor: 98.0,
    descricao: "Kit para 10 pessoas",
  },
  kit2: {
    valor: 150.0,
    descricao: "Kit para 15 pessoas",
  },
  kit3: {
    valor: 257.5,
    descricao: "Kit para 20 pessoas",
  },
};

const pedido = document.querySelectorAll(".coluna-produto");
const pedidoPersonalizado = document.querySelector(
  ".pedido-personalizado-vulcao"
);
const excluir = document.querySelector(".excluir");
excluir.style.display = "none";

const comprasDiv = document.querySelector(".compras");

let produtoAtual = null;

pedido.forEach((produto) => {
  produto.addEventListener("click", function (e) {
    e.preventDefault();
    produtoAtual = this.getAttribute("data-kit");
    const produto = kits[produtoAtual];
    const nomeProduto = document.querySelector(".nome_produto");
    const precoProduto = document.querySelector(".precoProduto");
    nomeProduto.innerHTML = produto.descricao;
    // precoProduto.innerHTML = `Total: R$${produto.valor}`;

    pedidoPersonalizado.style.display = "block";
    excluir.style.display = "block";

    excluir.addEventListener("click", function (e) {
      e.preventDefault();
      pedidoPersonalizado.style.display = "none";
      excluir.style.display = "none";
    });
  });
});
const bnt = document.querySelector(".bnt-venda");
bnt.addEventListener("click", function (e) {
  e.preventDefault();
  if (produtoAtual) {
    const produto = kits[produtoAtual]
    let checkboxes = document.querySelectorAll("input[name=produto]:checked");
    let selecionados = Array.from(checkboxes).map((cb) => cb.value);

    const pagamento = document.querySelector("#pagamento").value;
    const recheio = document.querySelector("#recheio").value;
    if (recheio === "Selecione")
      return alert("Por favor, selecione o recheio do bolo");
    if (pagamento.value === "Selecione")
      return alert("Por favor, coloque a forma de pagamento");
    // console.log(pagamento);

    const endereco = document.querySelector(".endereco").value;

    let enviaMsg = `Olá, eu quero um: ${
      produto.descricao
    }, o pagamento será no: ${pagamento}. Endereço: ${endereco}, de salgado eu quero ${selecionados.join(
      ", "
    )} e o Recheio eu quero de: ${recheio}`;
    let link =
      "https://wa.me/558899547981/?text=" + encodeURIComponent(enviaMsg);
    window.open(link);
  }
});
// NÃO MEXER NO CÓDIGO ACIMA, POIS, PODE CAUSAR ALGUM BUG E DEIXCAR A APLICAÇÃO FORA DO AR!

// REGIÃO DE CÓDIGO PARA CSS

const el = document.querySelector(".coluna-produto");
const largura = el.getBoundingClientRect().width;
const limite = 556;
const larguraa = document.documentElement.scrollWidth;

function aumentaTamanho() {
  if(larguraa < limite) {
    return;
  }
  if(larguraa > limite) {
    const divP = document.querySelector(".produtosColum")
    divP.classList.remove("produtosColum")
    return divP.classList.add("produtosRow")
  }
}

aumentaTamanho()


// REGIAO DE TESTE

const excluirCarrinho = document.querySelector("#remove-carrinho");

const imgCarrinho = document.querySelector(".img-carrinho");
imgCarrinho.style.display = "none";

const listaDeProdutos = [];

const bntAddProduto = document.querySelector(".formCarrinho");
bntAddProduto.addEventListener("submit", function (e) {
  e.preventDefault();
  imgCarrinho.style.display = "block";
  imprimeProdutos();
});

document.querySelector("body").addEventListener("click", function (e) {
  if (e.target.matches("#remove-carrinho")) {
    e.preventDefault();
    // console.log("FUNCIONOU");
    comprasDiv.style.display = "none";
  }
});

imgCarrinho.addEventListener("click", function (e) {
  e.preventDefault();
  comprasDiv.style.display = "block";
});

// funções de criação de pedido

function imprimeProdutos() {
  if (produtoAtual) {
    const produto = kits[produtoAtual];
    const carrinho1 = criaPDescricao();
    carrinho1.innerHTML += `${produto.descricao}`;
    let checkboxes = document.querySelectorAll("input[name=produto]:checked");
    let selecionados = Array.from(checkboxes).map((cb) => cb.value);
    const listaProdutos = {
      nome: produto.descricao,
      recheio: recheio.value,
      salgado: selecionados,
    };
    listaDeProdutos.push(
      listaProdutos.nome,
      listaProdutos.recheio,
      listaProdutos.salgado
    );
    // console.log(listaDeProdutos);
  }
}

function criaPDescricao() {
  const p = document.createElement("p");

  const div = document.querySelector(".produtos_add");

  p.classList.add("produtoadd");
  div.appendChild(p);
  return div;
}

function criaDivProduto() {
  const div = document.createElement("div");

  const divP = document.querySelector(".produtos_add");
  div.classList.add("pedido");
  divP.appendChild(div);
  return divP;
}

function geraMsgCarrinho() {
  return `Olá, eu quero os seguintes produtos: ${listaDeProdutos.join(", ")}`;
}

function carrinho() {
  const bnt = document.querySelector(".bntCarrinho");
  bnt.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(listaDeProdutos);

    let link =
      "https://wa.me/558899547981/?text=" +
      encodeURIComponent(geraMsgCarrinho());
    window.open(link);
  });
}
carrinho();
// fim da região de testes
