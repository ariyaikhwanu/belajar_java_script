var x = 10;
console.log(x);
console.log("Hello world");

//alert('Hello World!');

//var nama = prompt('Masukan Nama: ');
//console.log(nama);

//var tes = confirm("Kamu yakin?");
//if (tes == true) {
//   alert("User pencet OK!");
// } else {
//   alert("User pencet cancel!");
// }

alert("Selamat Datang..");
var lagi = true;

while (lagi === true) {
  var nama = prompt("Masukan nama: ");
  alert("Hallo " + nama);

  lagi = confirm("Coba lagi ?");
}

alert("Terima kasih..");
