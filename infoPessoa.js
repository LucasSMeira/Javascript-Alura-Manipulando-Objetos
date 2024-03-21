
const pessoa = {
    nome: "Fax",
    idade: 21,
    solteiro: true,
    hobbies: ["lol","academia","ouvir música"],
    endereco: {
        rua:"Alameda José Pinheiro",
        cidade: "Capivara do Leste",
        estado: "Mato Grosso do Sul",
    }
}

const mostrarInfoPessoa = (pessoa) => {
    console.log(typeof pessoa.nome +" "+ pessoa.nome);
    console.log(typeof pessoa.idade +" "+ pessoa.idade);
    console.log(typeof pessoa.solteiro +" "+ pessoa.solteiro);
    console.log(typeof pessoa.hobbies +" "+ pessoa.hobbies);
    console.log(typeof pessoa.endereco +" "+ pessoa.endereco.rua+ "\n"+pessoa.endereco.cidade+"\n"+pessoa.endereco.estado);
}

mostrarInfoPessoa(pessoa);