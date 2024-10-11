// let oyuncuHamlesi = prompt('Hamlenizi giriniz.');
// let oyuncuinHamlesi = ["taş", "kağıt", "makas"].at(Math.floor(Math.random() *3));
// console.log(oyuncuHamlesi);

// let bilgisayarHamlesi = prompt('Bilgisayar Hamlesi')


let oyuncuHamlesi = prompt('Hamlenizi giriniz');
console.log('Oyuncu hamlesi:' + oyuncuHamlesi);

let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random() * 3));
console.log('Bilgisayarın hamlesi:' + bilgisayarHamlesi);

if (oyuncuHamlesi === bilgisayarHamlesi) {
  console.log('Berabere kaldık!');
} else if (
  (oyuncuHamlesi === "taş" && bilgisayarHamlesi === "makas") ||
  (oyuncuHamlesi === "kağıt" && bilgisayarHamlesi === "taş") ||
  (oyuncuHamlesi === "makas" && bilgisayarHamlesi === "kağıt") 
) {
  console.log('Kazandın hadi gene iyisin! Çorba parası çıktı :)');
} else {
  console.log('Öğrende gel!')
}
