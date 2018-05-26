// TUGAS 1
function shoutOut(){
  return 'Halo Function!'
}

console.log(shoutOut())


// TUGAS 2
var num1 = 5
var num2 = 6

function calculateMultiply(num1,num2){
  return num1 * num2
}

console.log(calculateMultiply(num1,num2))


// TUGAS 3
var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogjakarta"
var hobby = "gaming"
var fullSentence = processSentence(name,age,address,hobby);

function processSentence(name,age,address,hobby){
  return "Nama saya " +name+ ", umur saya " +age+ " tahun, alamat saya di " +address+ ", dan saya punya hobby yaitu " +hobby+ " !"
}

console.log(fullSentence)