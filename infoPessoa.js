
const pessoa = {
    nome: "Fax",
    idade: 21,
    solteiro: true,
    hobbies: ["lol","academia","ouvir música"],
}

const mostrarInfoPessoa = (pessoa) => {
    console.log(typeof pessoa.nome +" "+ pessoa.nome);
    console.log(typeof pessoa.idade +" "+ pessoa.idade);
    console.log(typeof pessoa.solteiro +" "+ pessoa.solteiro);
    console.log(typeof pessoa.hobbies +" "+ pessoa.hobbies);
}

mostrarInfoPessoa(pessoa);