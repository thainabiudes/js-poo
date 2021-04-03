// classe abstrata, só funciona para ser herdade, não posso instanciar
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;

    if(this.constructor === Conta){
      throw new Error('Não pode instanciar objeto do tipo Conta diretamente, pois essa é uma classe abstrata.');
    }
  }

  set cliente(novoValor) {
    if(novoValor instanceof Cliente) this._cliente = novoValor;
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  // método sacar público que consome o método privado
  sacar(valor) {
    // método abstrato, é vazio, garantimos que todas as implementações de conta tem que chamar o sacar e manipular dentro de sua classe
    throw new Error("O método Sacar da conta é abstrato.");
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;

    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  depositar(valor) {
    if(valor <= 0) return; 
    
    this._saldo += valor;
    // console.log(this._saldo)
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    if (valorSacado) conta.depositar(valorSacado);
  }
}