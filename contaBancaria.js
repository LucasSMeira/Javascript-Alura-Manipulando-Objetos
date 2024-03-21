const contaBancaria = {
    saldo: 180,
    depositar: function depositar(valor) {
        this.saldo += valor;
    },
    sacar: function sacar(valor) {
        if (this.saldo < valor) {
            console.log("Saldo Insuficiente");
        }
        else {
            this.saldo -= valor;
        }
    }
}

const cliente = {
    nome: "Fax",
    conta: contaBancaria,

}

function mostrarSaldo(cliente) {
    console.log(`Nome: ${cliente.nome} \nSaldo: ${cliente.conta.saldo}`);
} 

mostrarSaldo(cliente);
contaBancaria.depositar(100);
contaBancaria.sacar(10);
mostrarSaldo(cliente);