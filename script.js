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
// tanya = true;
// while (tanya == true) {
//   var p = prompt("Silakan pilih : gajah, semut, atau orang");
//   var computer = Math.random();

//   if (computer < 0.34) {
//     computer = "gajah";
//   } else if (computer >= 0.34 && computer < 0.67) {
//     computer = "semut";
//   } else {
//     computer = "orang";
//   }

//   var hasil = "";

//   if (p == computer) {
//     hasil = "SERI!";
//   } else if (p == "gajah") {
//     //   if (computer == "orang") {
//     //     hasil = "Menang";
//     //   } else {
//     //     hasil = "Kalah";
//     //   }
//     hasil = computer == "orang" ? "Menang" : "Kalah";
//   } else if (p == "orang") {
//     if (computer == "gajah") {
//       hasil = "Menang";
//     } else {
//       hasil = "Kalah";
//     }
//   } else if (p == "semut") {
//     hasil = computer == "orang" ? "Kalah" : "Menang";
//   } else {
//     hasil = "Memasukkan pilihan yang salah";
//   }

//   alert(
//     "Kamu pilih: " +
//       p +
//       " dan Komputer memilih : " +
//       computer +
//       " \n maka hasilnya kamu: " +
//       hasil
//   );
//   tanya = confirm("Apakah ingin lanjut?");
// }

// alert("Terima kasih telah bermain");

// var tanya = true;
// var kesempatan = 3;

// while (kesempatan == 0) {
//   var angka2 = Math.random();

//   var angka = angka2 * 10;
//   console.log;
//   var player = prompt(" Silakan tebak angka 1 - 10: ");
//   if (player == angka) {
//     alert("Benar! Jawban yang dimaksud adalah angka " + angka);
//     kesempatan = 0;
//   } else if (player > angka) {
//     alert("Salah! jawaban terlalu Rendah, kesempatan tinggal " + kesempatan);
//     kesempatan = kesempatan - 1;
//   } else if (player < angka) {
//     alert("Salah! jawaban terlalu Tinggi, kesempatan tinggal " + kesempatan);
//     kesempatan = kesempatan - 1;
//   } else {
//     alert("input salah");
//   }
// }
//   tanya = confirm("lagi ?");
// }

// alert("Terima kasih");

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
// tanya = true;
// while (tanya == true) {
//   var p = prompt("Silakan pilih : gajah, semut, atau orang");
//   var computer = Math.random();

//   if (computer < 0.34) {
//     computer = "gajah";
//   } else if (computer >= 0.34 && computer < 0.67) {
//     computer = "semut";
//   } else {
//     computer = "orang";
//   }

//   var hasil = "";

//   if (p == computer) {
//     hasil = "SERI!";
//   } else if (p == "gajah") {
//     //   if (computer == "orang") {
//     //     hasil = "Menang";
//     //   } else {
//     //     hasil = "Kalah";
//     //   }
//     hasil = computer == "orang" ? "Menang" : "Kalah";
//   } else if (p == "orang") {
//     if (computer == "gajah") {
//       hasil = "Menang";
//     } else {
//       hasil = "Kalah";
//     }
//   } else if (p == "semut") {
//     hasil = computer == "orang" ? "Kalah" : "Menang";
//   } else {
//     hasil = "Memasukkan pilihan yang salah";
//   }

//   alert(
//     "Kamu pilih: " +
//       p +
//       " dan Komputer memilih : " +
//       computer +
//       " \n maka hasilnya kamu: " +
//       hasil
//   );
//   tanya = confirm("Apakah ingin lanjut?");
// }

// alert("Terima kasih telah bermain");

// var tanya = true;
// var kesempatan = 3;
// var angka2 = Math.random();
// var angka = parseInt(angka2 * 10);
// console.log(angka);
// while (kesempatan > 0) {
//   var player = prompt(" Silakan tebak angka 0 - 10: ");
//   if (player == angka) {
//     alert("Benar! Jawban yang dimaksud adalah angka " + angka);
//     kesempatan = 0;
//   } else if (player > angka) {
//     kesempatan = kesempatan - 1;
//     alert("Salah! jawaban terlalu Rendah, kesempatan tinggal " + kesempatan);
//   } else if (player < angka) {
//     kesempatan = kesempatan - 1;
//     alert("Salah! jawaban terlalu Tinggi, kesempatan tinggal " + kesempatan);
//   } else {
//     alert("input salah");
//   }
// }

// // tanya = confirm("lagi ?");

// alert("Terima kasih, jawabannya adalah " + angka);

function jumlahVolumeDuaKudus(a, b) {
  var volumeA;
  var volumeB;
  var total;

  volumeA = a * a * a;
  volumeB = b * b * b;

  total = volumeA + volumeB;
  return total;
}

function tambah(a, b) {
  return a + b;
}

function tambah2() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
var c = 12;
var d = 10;
hasil = jumlahVolumeDuaKudus(tambah2(1, 2, 3, 4, 5, 6), d);
console.log(hasil);
