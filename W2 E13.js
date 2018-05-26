function xo(str) {
    var urut = str.length-1
    var countx= 0
    var counto= 0

    while (urut>=0) {
        if (str[urut]==='x'){
            countx++
        }else{
            counto++
        }
        urut--;
    }
    return (countx === counto)
}

// TEST CASES
console.log(xo('xoxoxo'))
console.log(xo('oxooxo'))
console.log(xo('oxo'))
console.log(xo('xxxooo'))
console.log(xo('xoxooxxo'))