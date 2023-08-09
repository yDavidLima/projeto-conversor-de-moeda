const convertButton = document.querySelector(".convert-button") /*Primeiro passo 
                                                                  foi mapear meu botão para 
                                                                    quando eu clicar nele ele fazer uma ação. */
                                                                  //Segundo passo foi pegar o click do botão, addEventListener.
const currencySelect = document.querySelector(".currency-select")// nono passo foi "mapear" meu select para podermos pegar o valor dele quando clicarmos no botão e depois fazer nossa função de change 

function convertValues() { /* Terceiro passo foi Criar essa função para que quando eu clicar no meu botão ele converta os valores.*/
    const inputValue = document.querySelector(".values").value /* Quarto passo é pegar o valor do meu input e coloca-lo para dividir com o valor do dolar- Sexto passo é pegar esse valor e jogar na tela do Real(unConvertedReal) usando o innerHTML */
    const unconvertedValue = document.querySelector(".value-real") 
    const convertedValue = document.querySelector(".value-dolar") /* Quinto passo: antes de jogoar o valor na tela temos que jogar o valor convertido,
                                                            valor / dolar do dia. Criamos essa variavél para "guardar o valor convertido" */

    console.log(currencySelect.value)
    const dolar = 5.04
    const euro = 5.40 /* Esse é o quinto passo onde estamos fazendo o calculo para pegar o valor concertido. */
    const libras = 6.17

    const convertdValue = inputValue / dolar /* Quinto passo finalizado pegamos o valor do input e dividimos pelo dolar do dia
                                                Depois é só formatar o valor assim como esta abaixo.  */

    if(currencySelect.value == "dolar"){ /* décimo passo usa o SE(if) para quando o (currencySelect) identificar o valor dolar do meu input  */
        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {// após eu CLICAR no botão vai fazer essa ação de trocar o innerHTML formatado.
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolar) /* Sétimo passo foi pegar o meu valor convertido(Convertedvalue) e colocar o valor do calculo Input / Dolar usando o innerHTML */


    }

    if(currencySelect.value == "euro"){ // igual ao passso 10º
        convertedValue.innerHTML = new Intl.NumberFormat("de-DE", { /* Oitavo passo foi Formatar meu numuero no caso o resultado para ficar escrito corretamente. Para isso usamos o Intl.NumberFormat */ 
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euro)

    }

    if(currencySelect.value == "libras"){
        convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libras)
        

    }


    console.log(currencySelect)
  





    unconvertedValue.innerHTML = new Intl.NumberFormat("pt-BR", { /* Esse foi Sexto passo: pegar o valor do meu input e jogar no real(unConvertedValue) */
        style: "currency",
        currency: "BRL"
    }).format(inputValue)




}



function changeCurrency(){ /* Décimo primeiro passo, criar essa função para que quando eu mudar meu select ele fazer essas ações do if abaixo,
                                para isso vou criar um "ouvinte" (addEventeListener) que é o próximo passo */
   const changeDolar = document.querySelector(".currency-dolar")
   const changeImg = document.querySelector(".change-image")
   

    if (currencySelect.value == "dolar") { /* Décimo terceiro passo, fazer esse (if) para quando eu mudar meu select acontecer o que está dentro do IF */
        changeDolar.innerHTML = "Dólar Americano"
        changeImg.src = "./assets/estados-unidos (1) 1.png"


    }




    if (currencySelect.value == "euro"){
        changeDolar.innerHTML = "Euro"
        changeImg.src = "./assets/Design sem nome 3.png"
       }

       if(currencySelect.value == "libras"){
            changeDolar.innerHTML = "Libra"
            changeImg.src = "./assets/libra 1 (1).png"
            
            

       }






    convertValues() /*  ultimo passo "aproveitar" essa função para quando eu mudar o select acontecer 
                            essa função que no caso é converter os valores.    */
    }







currencySelect.addEventListener("change", changeCurrency) /* Décimo segundo passo, ficar de olho quando eu mudar meu select */
convertButton.addEventListener ("click", convertValues)



// Como fazer a lógica de qualquer aplicação.


/* Para resolver qualquer aplicação devemos dividir em pequenos passo, micro etapas
    para que assim conseguimos chegar ao resultado final. 




*/