//let h2 = document.getElementsByTagName('h2')

//let title = document.getElementById('title')
//console.log(title.innerHTML)

//hem konsolda hem de ekranda gözüktü merhaba dünyayı sildi dom içindeki bilgi değişti.
let title = document.getElementById('title')
title.innerHTML = 'değişen bilgi'
console.log(title.innerHTML)

//htmlde de link bilgisi istedik burda ise sadece sonuna değişti yazdık.
let link = document.querySelector('#kodluyoruzLink')
link.innerHTML += ' değişti'
link.style.color = 'red'

