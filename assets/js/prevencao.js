function garantia(){
    let buttons = document.querySelectorAll('.btn')
    for(let item of buttons){
        item.addEventListener('click', prevencao);
    }
}


function prevencao(e){
    e.preventDefault()
};

window.onload = garantia()



/*
    Explicando esse script

    Como está com Bootstrap, ao clicar nos botões, a página recarrega, então para previnir que a página faça isso, coloquei para que todos os botões, ao serem clicados não reiniciem a página.

    Assim vocês podem fazer todas alterações sem perder dados os dados no console.

*/


let botaoRegistrar = document.getElementById("Registrar");
let botaoMostrar = document.getElementById("Mostrar")


let contagem = 2


botaoRegistrar.addEventListener("click", function() {
linha();
});

function linha() {
    

  let newRow = document.createElement("tr");
  
  let celulaCabeca = document.createElement("td");
  celulaCabeca.innerHTML = contagem ;
  newRow.appendChild(celulaCabeca); 
  contagem++


  
   let celulaNome = document.createElement("td");
  celulaNome.innerHTML = nc.value
  newRow.appendChild(celulaNome);

  let celulaCpf = document.createElement("td");
  celulaCpf.innerHTML = cpf.value
  newRow.appendChild(celulaCpf);

  let celulaEmail = document.createElement("td");
  celulaEmail.innerHTML = email.value
  newRow.appendChild(celulaEmail);

  let celulaTelefone = document.createElement("td");
  celulaTelefone.innerHTML = tel.value
  newRow.appendChild(celulaTelefone);

  
  tabela.appendChild(newRow);

  

  
}

botaoMostrar.addEventListener("click", toggle );

function toggle() {
    var tabela = document.getElementById("apareci");
    tabela.classList.toggle("sumi");
}





















    

