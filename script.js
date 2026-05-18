// 1. Kita 'tangkap' dulu elemen HTML-nya masukin ke variabel
const tombol = document.getElementById('tombolLogin');
const kolomNama = document.getElementById('inputNama');


// 2. Kita pasang CCTV (Event Listener) di tombolnya
// JIKA tombol diklik, maka jalankan tugas di dalam function ini
tombol.addEventListener('click', function() {
   
    // Kita ambil teks yang lagi diketik sama user di kolom nama
    const namaUser = kolomNama.value;


    // 3. Logika Satpam (If-Else)
    // Kalau kolom nama kosong (nggak diisi apa-apa)
    if (namaUser === "") {
        // Munculin pop-up marah
        alert("Woi! Namanya diisi dulu napa, masa login pake jalur gaib? 👻");
    } else {
        // Kalau kolom nama ada isinya, panggil namanya!
        alert("Gacorrr! Selamat datang, " + namaUser + "! Lu berhasil masuk ke tongkrongan Barbarce 🚀");
       
        // (Opsional) Kosongin lagi formnya setelah berhasil login
        kolomNama.value = "";
    }


});
