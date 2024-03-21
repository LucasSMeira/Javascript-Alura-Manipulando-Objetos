const calculadora = {
    soma: function somar(num,numDois) {
        return  num + numDois;
    },
    subtracao: function subtrair (num,numDois) {
        return  num - numDois;
    },
    multiplicacao: function multiplicacao (num,numDois) {
        return  num * numDois;
    },
    divisao: function divisao (num,numDois) {
        if(numDois === 0){
            console.log("Não é possível fazer a divisão de um número por 0");
        }
        else{
            return num/numDois;
        }
    }
}

console.log(calculadora.soma(10,2));
console.log(calculadora.subtracao(10,2));
console.log(calculadora.multiplicacao(10,2));
console.log(calculadora.divisao(10,2));