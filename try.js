//Penjumlahan

let a = 9
let b = 45
function penjumlahan(a, b) {
  return a + b;
}

console.log('hasil penjumlahan = '+ penjumlahan(a, b));

//Mencari angka terbesar

let arr = [9,5,7,-2,-1,3,5,6,5,9,8];
function angkaTerbesar(arr) {
  terbesar = arr [0];
  for (let i = 1; i < arr.length;i ++){
    if (arr[i] > terbesar){
      terbesar = arr[i];
    }
  }
  return terbesar
}

console.log('angka yang terbesar yaitu ' + angkaTerbesar(arr));

//membalik string

let str = 'rofik awaludin'
function terbalik(str){
  let hasil = '';
  for (let i = str.length - 1; i >= 0; i --){
    hasil += str [i]
  }
  return hasil
}
console.log('reverse manual = ' + terbalik(str));

function reverseString(str){
  return str.split('').reverse().join('')
}
console.log('reverse string = '+ reverseString(str));

//membandingkan array dengan angka
let angka = 5;
function lebihBesar (arr, angka) {
  let hasil = [];
  for(let i = 0; i < arr.length; i ++){
    if (arr[i] > angka ) {
      hasil.push(arr[i]);
    }
  }
  return hasil;
}
console.log('array yang lebih besar dari array adalah ' + lebihBesar (arr, angka));

//Fibonacy

let limit = 5;
let a1 = 0;
let a2 = 1;
let a3 = 1;
let count = 1;

while (count <= limit) {
  console.log('iterasi ke '+count+' dari a3 adalah ' + a3);
  a1 = a2;
  a2 = a3;
  a3 = a1 + a2;
  count = count + 1;
}

let n = 11
function getFibonacci(n) {
  let fibonacci = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
  }
  return fibonacci.slice(0, n+1);
}
console.log('result dari function fibonacy sebanyak n iterasi adalah ' +  getFibonacci(n))


//lebih bsar dari rata"

function lebihBesardariRata(arr) {
  let rataRata = arr.reduce((total, num) => total + num, 0) / arr.length;
  let hasil = arr.filter(num => num > rataRata);
  return hasil;
}
console.log('array yang lebih besar dari rata-rata adalah '+ lebihBesardariRata(arr));

//rata-rata

function rataRata(arr){
  let total = 0;
  for (let i =0; i < arr.length; i ++){
    total += arr[i]
  }
  return total / arr.length
}
console.log('rata rata array = ' + rataRata(arr));

//remove duplicate

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log('remove duplicate dalam array sehingga hasilnya menjadi ' + removeDuplicates(arr));

function removeDuplicates(arr) {
  return Array.from(new Set(arr)).sort((a, b) => a - b);
}
console.log('remove duplicate dalam array hasilnya diurutkan dari angka terkecil ' + removeDuplicates(arr));

// menjumlahkan tiga angka dalam array apakah hasilnya 0 True/False

function findTriplets(arr){
  for(i = 0; i < arr.length - 2; i++){
    for(j = i + 1; j < arr.length -1; j++){
      for(k = j + 1; k < arr.length; k++){
        if(arr[i] + arr[j] + arr[k] === 0){
          return true
        }
      }
    }
  }
  return false
}

console.log('menjumlahkan tiga angka dalam array apakah hasilnya 0 True/False maka hasilnya = ' + findTriplets(arr));
