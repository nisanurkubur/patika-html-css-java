/*
document.write("mehaba dünya"); 
alert("merhaba dünya"); //ekranda uyarı(yeni kart) açar
*/

/* let servername;
console.log(servername); //undefined */

/* let servername;
console.log(servername);
servername = "https://kodluyoruz.org"
console.log(servername); */

//let ile değişkene bilgi atayarak tanımladık.
/* let password = "2345678";
console.log(password); */

let price = 100;
let tax = 0.18
let priceTax = price * tax;
console.log("Fiyat:", price, "KDV oranı:", tax, "toplam:", priceTax);


//arttırma ve azaltma
let counter = 320;
//counter += 1;
//counter++;
counter--;
counter *= 10;
console.log(counter);

//mod kalan alma
console.log(15 % 2);

//üs alma **
console.log(2 * 2 * 2 * 2)
console.log(2 ** 8)

//yuvarlama
console.log(Math.floor(1.9)) //aşağı yuvarlar output:1
console.log(Math.ceil(1.9)) //yukarı yuvarlama output:2
console.log(Math.round(1.9)) //en yakına yuvarlar output:2

let string = "123456"
console.log(string) //string değerlerin rengi farklı olur.


//boolean T or F
let isActive = false


//veri türünü öğrenmek TYPEOF
let pricenew = 1111;
let stringPrice = "1234567";
let haspassword = true;
let email = "nisa@gmail.com"

console.log("price:", typeof (price)); //otuput:number

console.log(
    "stringprice:",
    typeof (stringPrice)
); //ouput:string

console.log("password:", typeof (haspassword)); //output:boolean

//string karakter sayısı
console.log(email.length)



