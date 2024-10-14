function valorant() {
    const chars = [
        "Brimstone",
        "Jett",
        "Phoenix",
        "Sage",
        "Sova",
        "Breach",
        "Cypher",
        "Omen",
        "Raze",
        "Reyna",
        "Viper",
        "Killjoy",
        "Skye",
        "Yoru",
        "Astra",
        "KAY/O",
        "Chamber",
        "Neon",
        "Falde",
        "Harbor",
        "Gekko",
        "Deadlock",
        "Iso",
    ];
    // input'ların içeriğini almak için value
    const tahminKarakter = document.getElementById("char").value
    // div'lerin içeriğini almak için innerhtml
    const puan = document.getElementById("puan").innerHTML
    localStorage.setItem("puan", puan)

    const tahminEdilecekSayi = Math.floor(Math.random() * 23);

    const karakter = chars[tahminEdilecekSayi]

    console.log(puan)
    if (tahminKarakter == karakter) {
        alert("Tahmin Basarili !!!")
    } else {
        alert("Hata! Dogru cevap:" + karakter)

    }
}

function tahmin() {
    const tahminSayisi = document.getElementById("number").value
    const tahminEdilecekSayi = Math.floor(Math.random() * 11);
    if (tahminSayisi == tahminEdilecekSayi) {
        alert("tahmin başarılı")
    } else {
        alert("tahmin basarisiz. Dogru tahmin:" + tahminEdilecekSayi)
    }


}