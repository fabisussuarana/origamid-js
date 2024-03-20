export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _actualDate() {
    // sem passar nada pega a data atual
    return new Date();
  }
  get _futureDate() {
    // passando a data futura que vem do parâmetro do construtor
    return new Date(this.futureDate);
  }
  // fazendo a diferença entre eles para ter o tempo que falta até o natal em milisegundos
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get days(){
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }
  get hours(){
    // Math. floor() é usada para arredondar o número passado como parâmetro 
    // para seu inteiro mais próximo, levando como base o valor menor
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }
  get minute(){
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }
  get seconds(){
    return Math.floor(this._timeStampDiff / 1000);
  }
  get total(){
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds
    }
  }
}