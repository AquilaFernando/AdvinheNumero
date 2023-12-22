var numeroGerado = 0;
var tentativas = 0;

function gerarNumeroAtualizar(){
    var numeroPC = document.getElementById('n1');
    numeroPC.value = '';
    
    numeroGerado = parseInt(Math.random() * 100);
    tentativas = 0;

    console.log(numeroGerado);
}

gerarNumeroAtualizar();

function verificarTentativa(){
    var numeroPC = document.getElementById('n1');
    var chute = numeroPC.value;
    chute.className = 'teste';
    console.log(chute);

    if(chute > 100 || chute < 1){
        alert('Chute é inválido');
        return;
    }

    if(chute > numeroGerado){
        criarLinha();
        tentativas++;
    }else if(chute < numeroGerado){
        criarLinha();
        tentativas++;
    }else{
        criarLinha();
        gerarNumeroAtualizar();
    }
}

function criarLinha(){
    var textoElemento = document.getElementById('n1');
    var textoEscrito = textoElemento.value;

    if(textoEscrito > numeroGerado){
        let novoElemento = document.createElement('p');
        novoElemento.className = "alerta";
        novoElemento.innerText = "Seu número " +textoEscrito+ " é maior do que o número do computador";
    
        let elemento = document.querySelector('.alertaDiv');
        elemento.appendChild(novoElemento); 
    }else if(textoEscrito < numeroGerado){
        let novoElemento = document.createElement('p');
        novoElemento.className = "alerta";
        novoElemento.innerText = "Seu número " +textoEscrito+ " é menor do que o número do computador";
    
        let elemento = document.querySelector('.alertaDiv');
        elemento.appendChild(novoElemento); 
    }else{
        let novoElemento = document.createElement('p');
        novoElemento.className = "alerta";
        novoElemento.innerText = "Seu número " +textoEscrito+ " é o correto, parabéns!" + "Você levou " +tentativas+ " tentativa(s)";
    
        let elemento = document.querySelector('.alertaDiv');
        elemento.appendChild(novoElemento); 
    }
}
