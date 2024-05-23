const start = document.getElementById('start');

start.addEventListener('click', () => {

    let vidas = 3;
    let pontos = 0;
    let max = 55;
    let min = 0;

    let soma = 0;
    let divisao = 1;
    let subtracao = 2;
    let multiplicacao = 3;
    let resultado = 0;

    while(vidas > 0){
        let n1 = Math.floor(Math.random() * (max - min) + min);
        let n2 = Math.floor(Math.random() * (max - min) + min);
        let conta = Math.floor(Math.random () * 4);

        let sinal = "";

        if(conta == soma){
            sinal = "+";
            resultado = n1 + n2;
        }
        else if(conta == divisao){
            while(n1 % n2 != 0){
                n1 = Math.floor(Math.random() * (max - min) + min);
                n2 = Math.floor(Math.random() * (max - min) + min);
            }
            sinal = "/";
            resultado = n1 / n2;
        }
        else if(conta == subtracao){
            sinal = "-";
            resultado = n1 - n2;
        }
        else if(conta == multiplicacao){
            sinal = "x";
            resultado = n1 * n2;
        }

        let resposta = prompt("Quanto é " + n1 + " " + sinal + " " + n2 + "?");

        if(resposta == resultado){
            pontos += 1;
        }
        else{
            vidas -= 1;
            if(vidas == 0){
                alert("Fim de jogo, voce fez " + pontos + " pontos");
            }
            if(vidas > 0){
                alert("Errou!, " + vidas + " restantes");
            }
        }
    }
});