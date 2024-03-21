
class Pessoa {
    constructor(nome,idade,cidade){
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }
}

let pessoa1 = new Pessoa("Fax",21,"Divinopolis");
let pessoa2 = new Pessoa("Rhei",33,"Londrina");
let pessoa3 = new Pessoa("Miguel",23,"Londrina");

let pessoaNova = new Pessoa("Sura",29,"Londrina");

const listaDePessoas = [pessoa1,pessoa2,pessoa3];

listaDePessoas.push(pessoaNova);

const mostrarListaPessoas = (listaDePessoas) => {
    const dados = listaDePessoas.forEach(pessoa => {
        console.log(pessoa.nome + "\n" + pessoa.idade +"\n"+ pessoa.cidade + "\n-----------------");
    });
}

mostrarListaPessoas(listaDePessoas);

console.log("*** Exercício 3 *** ");

const filtrarPorCidade = (listaDePessoas,cidade) => {
    const listaFiltrada = listaDePessoas.forEach( pessoa  => {
        if(pessoa.cidade === cidade) {
            console.log(pessoa.nome + "\n" + pessoa.idade +"\n"+ pessoa.cidade + "\n-----------------");
        }
    });
}

filtrarPorCidade(listaDePessoas,"Londrina");
console.log("______");
filtrarPorCidade(listaDePessoas,"Divinopolis");