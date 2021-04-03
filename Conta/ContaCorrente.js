import { Conta } from './Conta.js';

export class ContaCorrente extends Conta{
  // atributo estático, não referente ao individual que usa a classe, e sim a todos
  static numeroDeContas = 0;

  constructor(saldoInicial = 0, cliente, agencia) {
    // chama construtor da classe pai - herança
    super(saldoInicial, cliente, agencia);
    ContaCorrente.numeroDeContas += 1;
  }

  // sobreescrevendo o comportamento do sacar
  sacar(valor) {
    let taxa = 1.1;
    
    return this._sacar(valor, taxa);
  }
}