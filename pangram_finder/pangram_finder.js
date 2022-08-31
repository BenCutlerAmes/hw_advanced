const PangramFinder = function (input) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.input = input.toLowerCase().split('')
}



PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every((letter)=> this.input.includes(letter))
}


module.exports = PangramFinder;
