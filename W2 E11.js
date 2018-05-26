function balikKata(kata) {
    var rpt$ = ""
    var urut = kata.length-1
    
    while (urut>=0) {
        rpt$ += kata[urut]
        urut--
    }
    return rpt$
}

console.log(balikKata('Hello World and Coders'))
console.log(balikKata('John Doe'))
console.log(balikKata('I am a bookworm'))
console.log(balikKata('Coding is my hobby'))
console.log(balikKata('Super'))