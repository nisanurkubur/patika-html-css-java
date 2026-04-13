'use strict';

// Seçiciler
const inputDOM = document.querySelector('#task');
const listDOM = document.querySelector('#list');

// 1. TIKLAMA OLAYI (Çizme ve Mavi Yapma)
// Listenin kendisine bir dinleyici ekliyoruz, böylece yeni eklenen elemanlar da etkilenir.
listDOM.addEventListener('click', function (e) {
    // Tıklanan eleman bir LI (liste öğesi) ise
    if (e.target.tagName === 'LI') {
        // CSS'indeki .checked sınıfını ekle/çıkar
        e.target.classList.toggle('checked');
    }
});

// 2. YENİ ELEMAN EKLEME
function newElement() {
    const taskValue = inputDOM.value.trim();

    if (taskValue === "") {
        // Boşsa hata toast'unu göster
        $('.error').toast('show');
    } else {
        // Yeni bir li oluştur
        const li = document.createElement("li");
        li.textContent = taskValue;

        // Kapatma butonu (X) oluştur
        const span = document.createElement("span");
        span.textContent = "\u00D7";
        span.className = "close";
        span.onclick = function () {
            this.parentElement.remove();
        };

        li.appendChild(span);
        listDOM.appendChild(li);

        // Başarı toast'unu göster ve kutuyu temizle
        $('.success').toast('show');
        inputDOM.value = "";
    }
}

// 3. ARAMA MOTORU ÖZELLİĞİ
// Kutucuğa yazdıkça listeyi filtreler
inputDOM.addEventListener("keyup", function () {
    const filter = inputDOM.value.toLowerCase();
    const items = listDOM.getElementsByTagName("li");

    Array.from(items).forEach(function (item) {
        // Sadece metni al (X butonunu hariç tut)
        const text = item.firstChild.textContent.toLowerCase();

        if (text.includes(filter)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

// 4. MEVCUT LİSTEDEKİLER İÇİN SİLME BUTONU EKLE
// HTML içinde hazır gelen (Ödev yap vs.) elemanlara X butonu ekler
const existingItems = document.querySelectorAll("#list li");
existingItems.forEach(item => {
    const span = document.createElement("span");
    span.textContent = "\u00D7";
    span.className = "close";
    span.onclick = function () {
        this.parentElement.remove();
    };
    item.appendChild(span);
});