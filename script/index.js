const desafio = () =>{
    alert('Encontre o valor de delta na equação quadrática')

    let delta = 0

    const valorA = parseInt(prompt('Digite o valor de A'))
    const valorB = parseInt(prompt('Digite o valor de B'))
    const valorC = parseInt(prompt('Digite o valor de C')) 
const equacao = (a,b,c) => {  

   return delta = Math.pow(b,2) - (4 * a * c)
}
equacao(valorA,valorB,valorC)

alert('O valor de delta é '+delta)

const raiz = parseInt(prompt("Digite 1 para mostrar o primeiro resultado \n Digite 2 para mostrar o segundo resultado"))
const raizes = (d,a,b) =>{
    let raiz1 = result = ((-b) + Math.sqrt(d))/(2*a)
    let raiz2 = result1 = ((-b) - Math.sqrt(d))/(2*a)
    
    if(raiz == 1){
        resultado = raiz1
        nomeRaiz = 'primeira'
    }else if(raiz == 2){
        resultado = raiz2
        nomeRaiz = 'segunda'
    }
    alert("O valor da " + nomeRaiz+ " raiz é: " + resultado )
}
raizes(delta,valorA,valorB)
}

const desafio2 = () =>{

const multiplo = ()=>{
const  num1 = parseInt(prompt('Digite o primeiro número'))
const  num2 = parseInt(prompt('Digite o segundo número'))



if(num1 % num2 == 0){
    return 'O número ' + num1 + ' é múltiplo de ' + num2
}
else
{
return 'O número ' + num1 + ' não é múltiplo de ' + num2
}
}


alert(multiplo())






}


