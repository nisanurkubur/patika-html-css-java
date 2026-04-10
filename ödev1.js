/**
 * Kodluyoruz JavaScript Patikası - Ödev 1
 */

// 1. Kullanıcıdan isim bilgisini alalım
let userName = prompt("Lütfen adınızı giriniz:");

// 2. İsim bilgisini ekrana (span içine) yazdıralım
let myName = document.querySelector("#myName");

// Eğer kullanıcı bir isim girmişse onu yaz, girmediyse "Ziyaretçi" yaz
if (userName && userName.trim().length > 0) {
    myName.innerHTML = userName;
} else {
    myName.innerHTML = "Ziyaretçi";
}

// 3. Saat ve Gün bilgisini sürekli güncelleyecek fonksiyonu yazalım
function showTime() {
    const now = new Date(); // Sistem saatini al

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.getDay(); // 0-6 arası sayı döner

    // Sayıları iki basamaklı formatta tutalım (08:05:01 gibi)
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Gün sayılarını metin karşılığına çevirelim
    const days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi"
    ];

    // Ekranda görünecek hali birleştirelim
    let timeString = `${hours}:${minutes}:${seconds} ${days[day]}`;

    // HTML içindeki 'myClock' alanına yerleştirelim
    document.querySelector("#myClock").innerHTML = timeString;

    // Her saniye (1000 milisaniye) bu fonksiyonu tekrar çalıştır
    setTimeout(showTime, 1000);
}

// Fonksiyonu sayfa yüklendiğinde bir kez başlat
showTime();