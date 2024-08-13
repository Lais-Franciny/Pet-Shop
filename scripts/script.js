let bannerItens = document.querySelectorAll('.banner-item');
let currentBanner = 0;

function rotateBanner() {
    bannerItens[currentBanner].classList.remove('active');
    currentBanner = (currentBanner + 1) % bannerItens.length;
    bannerItens[currentBanner].classList.add('active')
}

setInterval(rotateBanner, 5000);