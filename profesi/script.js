const title = document.getElementById("title-content")
const box = document.getElementById("box")
const img = document.getElementById("desc-img")
const text = document.getElementById("desc-text")
const btn = document.getElementById("btn-grp")
const ya = document.getElementById("btn-true")
const tak = document.getElementById("btn-false")

ya.addEventListener('click', e => {
    title.innerHTML = 'Anda Berbohong!';
    text.innerHTML = 'Anda adalah seorang Teknisi'
    box.style.backgroundColor = "#E12E2E";
    btn.style.display = "none"
    img.src = "image 3.png"
});

tak.addEventListener('click', e => {
    title.innerHTML = 'Anda Benar!';
    text.innerHTML = 'Anda adalah seorang Mahasiswa'
    box.style.backgroundColor = "#6FD240";
    btn.style.display = "none"
    img.src = "image 2.png"
});