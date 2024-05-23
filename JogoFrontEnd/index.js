const start = document.getElementById('start');

start.addEventListener('click', () => {

    let vidas = 3;
    let pontos = 0;
    let max = 20;
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

        if (pontos > 10){
            conta = Math.floor(Math.random () * 2);
            let n3 = Math.floor(Math.random() * (max - min) + min);
            
            //resposta = prompt("Quanto é " + "(" + n1 + " " + sinal + " " + n2 + ")" + sinal + n3 + "?");

            if(conta == 0){
                resultado = (n1 + n2) * n3;
                resposta = prompt("Quanto é (" + n1 + " " + "+ " + n2 + ") x " + n3 + "?");
            }
            else {
                sinal = "x";
                sinal = "-";
                resultado = (n1 * n2) - n3;
                resposta = prompt("Quanto é " + n1 + " " + "x " + n2 + " - " + n3 + "?");
            }
        }


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

        if(pontos > 20){
            min = 121;
            max = 3221;
        } else if(pontos > 10){
            max = 73;
            min = 16;
        } else if(pontos > 5){
            max = 37;
            min = 6;
        } else {
            max = 20;
            min = 0;
        }
    }
});