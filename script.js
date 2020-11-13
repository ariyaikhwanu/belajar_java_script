// var x = 10;
// console.log(x);
// console.log("Hello world");

// alert('Hello World!');

//var nama = prompt('Masukan Nama: ');
//console.log(nama);

//var tes = confirm("Kamu yakin?");
//if (tes == true) {
//   alert("User pencet OK!");
// } else {
//   alert("User pencet cancel!");
// }

// alert("Selamat Datang..");
// var lagi = true;

// while (lagi === true) {
//   var nama = prompt("Masukan nama: ");
//   alert("Hallo " + nama);

//   lagi = confirm("Coba lagi ?");
// }

// alert("Terima kasih..");
tanya = true;
while (tanya == true) {
  var p = prompt("Silakan pilih : gajah, semut, atau orang");
  var computer = Math.random();

  if (computer < 0.34) {
    computer = "gajah";
  } else if (computer >= 0.34 && computer < 0.67) {
    computer = "semut";
  } else {
    computer = "orang";
  }

  var hasil = "";

  if (p == computer) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    //   if (computer == "orang") {
    //     hasil = "Menang";
    //   } else {
    //     hasil = "Kalah";
    //   }
    hasil = computer == "orang" ? "Menang" : "Kalah";
  } else if (p == "orang") {
    if (computer == "gajah") {
      hasil = "Menang";
    } else {
      hasil = "Kalah";
    }
  } else if (p == "semut") {
    hasil = computer == "orang" ? "Kalah" : "Menang";
  } else {
    hasil = "Memasukkan pilihan yang salah";
  }

  alert(
    "Kamu pilih: " +
      p +
      " dan Komputer memilih : " +
      computer +
      " \n maka hasilnya kamu: " +
      hasil
  );
  tanya = confirm("Apakah ingin lanjut?");
}

alert("Terima kasih telah bermain");
