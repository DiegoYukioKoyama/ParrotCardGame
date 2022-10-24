
let contador = 0;
let nCarta;
let cartaVirada1 = '';
let cartaVirada2 = '';

const cartaFront = [
    "<img src='imagens/bobrossparrot.gif'>",
    "<img src='imagens/explodyparrot.gif'>",
    "<img src='imagens/fiestaparrot.gif'>",
    "<img src='imagens/metalparrot.gif'>",
    "<img src='imagens/revertitparrot.gif'>",
    "<img src='imagens//tripletsparrot.gif'>",
    "<img src='imagens/unicornparrot.gif'>",
]

numeroCartas();

function virar(elemento){

        if(elemento.className.includes('virada')){
    
            return;
    
        }

        if(cartaVirada1 === ''){

        elemento.classList.add("virada");
        cartaVirada1 = elemento;
        
    
        }
        
        else if(cartaVirada2 === ''){

            elemento.classList.add("virada");
            cartaVirada2 = elemento;
            
        }

        if(cartaVirada1 !== '' && cartaVirada2 !== ''){

            if(cartaVirada1.innerHTML === cartaVirada2.innerHTML){

                cartaVirada1 = "";
                cartaVirada2 = "";

            } else{

                setTimeout(function(){

                    cartaVirada1.classList.remove("virada");
                    cartaVirada2.classList.remove("virada");

                    cartaVirada1 = "";
                    cartaVirada2 = "";

                }, 1000);

            }
            

        }

}



function adicionarCarta(){

    const cartas = document.querySelector(".container-cartas")

    const carta = `<div onclick="virar(this)" class="carta">

        <div class="carta-front face">
            ${cartaFront[i]}
        </div>
    
        <div class="carta-back face">
            <img src="imagens/back.png">
        </div>
    
    </div>`

    cartas.innerHTML += carta;

}

function numeroCartas(){

    nCarta = Number(prompt("Digite um número par de cartas entre 4 e 14"));
    
    if(nCarta >= 4 && nCarta <= 14 && nCarta % 2 === 0){
        
        for(i = 0; i < nCarta/2; i++){
            for(cont = 0; cont < 2;cont++){
            const cartas = document.querySelector(".container-cartas")

            const carta = `<div onclick="virar(this)" class="carta">

                <div class="carta-front face">
                    ${cartaFront[i]}
                </div>
    
                <div class="carta-back face">
                    <img src="imagens/back.png">
                </div>
    
            </div>`
    cartas.innerHTML += carta;
            }
        }

    }

    else{
        numeroCartas();
    }

    for(cont = 0; cont <= nCarta / 2; cont++){

    }

}

