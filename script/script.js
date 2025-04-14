// Exibe uma mensagem de boas-vindas ao usuário
alert('Bem vindo ao Banco JS');

// Objeto que representa uma conta bancária
const conta = {
    // Propriedade que armazena o saldo da conta
    saldo: 1000,

    // Método para realizar depósitos na conta
    depositar: function() {
        // Solicita ao usuário o valor a ser depositado e converte para número
        let valorDeposito = Number(prompt(`Quanto quer depositar? `));

        // Verifica se o valor é inválido (não é um número ou é menor/igual a zero)
        if (isNaN(valorDeposito) || valorDeposito <= 0) {
            alert('Depósito inválido'); // Exibe mensagem de erro
            return; // Encerra a função
        }

        // Armazena o saldo anterior antes do depósito
        let saldoAnterior = this.saldo;

        // Adiciona o valor depositado ao saldo atual
        this.saldo += valorDeposito;

        // Exibe uma mensagem de sucesso com os detalhes do depósito
        alert(`Depósito realizado!\n Saldo anterior R$: ${saldoAnterior.toFixed(2)}\nValor do depósito R$: ${valorDeposito.toFixed(2)}\nSaldo atual R$: ${this.saldo.toFixed(2)}`);
    },

    // Método para realizar saques na conta
    sacar: function() {
        // Solicita ao usuário o valor a ser sacado e converte para número
        let valorSaque = Number(prompt('Digite o valor que deseja sacar'));

        // Verifica se o valor é inválido (não é um número ou é maior que o saldo disponível)
        if (isNaN(valorSaque) || valorSaque > this.saldo) {
            alert('Saldo insuficiente!'); // Exibe mensagem de erro
            return; // Encerra a função
        }

        // Subtrai o valor sacado do saldo atual
        this.saldo -= valorSaque;

        // Exibe uma mensagem de sucesso com os detalhes do saque
        alert(`Saque realizado com sucesso!\n Valor do saque R$: ${valorSaque.toFixed(2)}\n Valor atualizado R$: ${this.saldo.toFixed(2)}`);
    }
};

// Chama o método de depósito para o usuário realizar um depósito
conta.depositar();

// Chama o método de saque para o usuário realizar um saque
conta.sacar();



