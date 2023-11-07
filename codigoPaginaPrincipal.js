function geraMensagemAlerta() {
  const elemento = document.querySelector("#kit4");
  elemento.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Em breve estará disponível");
  });
}

// geraMensagemAlerta();

const el = document.querySelector(".coluna_produto");
const largura = el.getBoundingClientRect().width;
const limite = 556;
const larguraa = document.documentElement.scrollWidth;


function aumentaTamanho() {
  if(larguraa < limite) {
    return;
  }
  if(larguraa > limite) {
    const divP = document.querySelector(".produtos")
    divP.classList.remove("produtos")
    return divP.classList.add("produtosRow")
  }
}

aumentaTamanho()
