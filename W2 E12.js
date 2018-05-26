function konversiMenit(menit) {
    var mnt = Math.floor(menit/60)
    var sec = menit%60
    
    if (sec < 10) {
        sec = "0" + sec
    }else{
        sec=sec
    }

    return mnt+ ':' +sec
  }
  
  // TEST CASES
  console.log(konversiMenit(63))
  console.log(konversiMenit(124))
  console.log(konversiMenit(53))
  console.log(konversiMenit(88))
  console.log(konversiMenit(120))