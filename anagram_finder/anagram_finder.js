const AnagramFinder = function (word) {
    this.word = word.toLowerCase().split("").sort().join()
    this.original = word

}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const anagrams = []
    otherWords.forEach((word)=>{
        const sortedWord = word.toLowerCase().split("").sort().join()
        if (this.word === sortedWord){
            if(this.original !== word){
                anagrams.push(word)
            }
        }
    })
    return anagrams
}

module.exports = AnagramFinder;
