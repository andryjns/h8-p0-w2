var tanggal =05
var bulan =11
var tahun = 2018

switch (bulan) {
    case 1: bulan="January"; break;
    case 2: bulan="February"; break;
    case 3: bulan="March";break;
    case 4: bulan="April";break;
    case 5: bulan="May";break;
    case 6: bulan="June";break;
    case 7: bulan="July";break;
    case 8: bulan="August";break;
    case 9: bulan="September";break;
    case 10: bulan="October";break;
    case 11: bulan="November";break;
    case 12: bulan="December";break;
    default: console.log('Invalid input');break;
}

if (tanggal>=1 && tanggal<=31){
    tanggal=tanggal
}
else{console.log('Invalid input')}

if (tahun>=1900 && tahun<=2200){
    tahun=tahun
}
else{console.log('Invalid input')}


console.log(tanggal+' '+bulan+' '+tahun)