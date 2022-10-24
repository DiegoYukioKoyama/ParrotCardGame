
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

const tempo = document.querySelector("temporizador");

cartaFront2 = [...cartaFront];

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
            
            contador++;

        }

        const final = document.querySelectorAll(".virada");
        if(final.length == nCarta){
            setTimeout(fimDeJogo,500);
        }

}



function adicionarCarta(){

    const cartas = document.querySelector(".container-cartas")

    const carta = `<div onclick="virar(this)" class="carta">

        <div class="carta-front face">
            ${cartaFront2[i]}
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
        
        while(cartaFront2.length > nCarta/2){

            cartaFront2.pop();

        }

        cartaFront2 = [...cartaFront2, ...cartaFront2];
        cartaFront2.sort(comparador);

        for(i = 0; i < nCarta; i++){
      
                adicionarCarta();

        }

    }

    else{
        numeroCartas();
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function fimDeJogo(){
    alert(`Você ganhou em ${contador} jogadas!`)
}

