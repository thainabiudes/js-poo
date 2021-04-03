import { Cliente } from './Cliente.js';
// import { ContaSalario } from './Conta/ContaSalario.js';
// import { ContaCorrente } from './Conta/ContaCorrente.js';
// import { ContaPoupanca } from './Conta/ContaPoupanca.js';

// const cliente = new Cliente('Thaina', '064478599360');
// const contaCorrente = new ContaCorrente(0, cliente, 3131);

// contaCorrente.depositar(100);
// contaCorrente.sacar(50);

// const contaPoupanca = new ContaPoupanca(50, cliente, 1001);
// const contaSalario = new ContaSalario(cliente);

// contaSalario.depositar(100);
// contaSalario.sacar(50);

// console.log(contaCorrente);
// console.log(contaPoupanca);
// console.log(contaSalario);

import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js'; 

const diretor = new Diretor("Mariza", 10000, 49161016555);
diretor.cadastrarSenha("123456");
const gerente = new Gerente ("Janete", 5000, 12345973215);
gerente.cadastrarSenha("1256");

const isLoginDiretor = SistemaAutenticacao.login(diretor, "123456");
const isLoginGerente = SistemaAutenticacao.login(gerente, "1256");

const cliente = new Cliente('Thaina', '064478599360', '12343');
const isLoginCliente = SistemaAutenticacao.login(cliente, "12343");


console.log(isLoginCliente);