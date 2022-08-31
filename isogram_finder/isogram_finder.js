const IsogramFinder = function (word) {
    this.letters = word.toLowerCase().split("")

}

IsogramFinder.prototype.isIsogram = function () {
const filteredList = this.letters.filter((letter,index,array)=> array.indexOf(letter)===index)
return filteredList.length === this.letters.length
    }

module.exports = IsogramFinder;
