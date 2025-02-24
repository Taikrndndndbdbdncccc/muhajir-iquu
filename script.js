function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "muhaji" && password === "4718") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-message").textContent = "Username atau password salah!";
    }
}

function logout() {
    window.location.href = "index.html";
}

function redirectToWhatsApp() {
    var phoneNumber = "6285372736144"; // 6285372736144 (tanpa tanda +)
    var message = "Halo, saya ingin mendaftar."; // Pesan otomatis
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.location.href = url;
}
// Fungsi untuk menampilkan jam real-time di dashboard
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Tambahkan 0 di depan jika angka kurang dari 10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").textContent = timeString;
}

// Jalankan updateClock setiap 1 detik
setInterval(updateClock, 1000);

// Panggil fungsi pertama kali agar jam langsung muncul
updateClock();
