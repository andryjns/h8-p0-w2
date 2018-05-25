// TUGAS 1 LOOPING PERTAMA
console.log('LOOPING PERTAMA')

var angka=2
while (angka<=20){
    console.log (angka+' - I love coding')
    angka = angka+2
}


// TUGAS 1 LOOPING KEDUA
console.log('LOOPING KEDUA')

var nomor=20
while (nomor>=2){
    console.log (nomor+' - I will become fullstack developer')
    nomor = nomor-2
} 


// TUGAS 2 LOOPING PERTAMA
console.log('LOOPING PERTAMA')

for (var bil=1; bil<=20; bil++) {
    console.log (bil+' - I love coding')
} 


// TUGAS 2 LOOPING KEDUA
console.log('LOOPING KEDUA')

for (var bil2=20; bil2>=1; bil2--) {
    console.log (bil2+' - I will become fullstack developer')
}


// TUGAS 3 GANJIL GENAP
for (var angke=1; angke<=100; angke++){
    if (angke%2===0){
        console.log('"GENAP"')
    }else{
        console.log('"GANJIL"')
    }
}


// TUGAS 3 PERTAMBAHAN 2
for (var angke2=1; angke2<=100; angke2=angke2+2){
    if (angke2%3===0){
        console.log('"'+angke2+' KELIPATAN 3"')
    }else{
        console.log('""')
    }
}


// TUGAS 3 PERTAMBAHAN 5
for (var angke3=1; angke3<=100; angke3=angke3+5){
    if (angke3%6===0){
        console.log('"'+angke3+' KELIPATAN 6"')
    }else{
        console.log('""')
    }
}


// TUGAS 3 PERTAMBAHAN 9
for (var angke4=1; angke4<=100; angke4=angke4+9){
    if (angke4%10===0){
        console.log('"'+angke4+' KELIPATAN 10"')
    }else{
        console.log('""')
    }
}
