
const body = document.body;
const images = [
    '/assets/background/1.jpg',
    '/assets/background/2.jpg',
    '/assets/background/3.jpg',
    '/assets/background/4.jpg',
    '/assets/background/5.jpg',
    '/assets/background/6.jpg',
    '/assets/background/7.jpg',
    '/assets/background/8.jpg',
    '/assets/background/9.jpg',
    '/assets/background/10.jpg'
];

function getRandomImage() {
    const randomImage = Math.floor(Math.random() * images.length);
    return images[randomImage];
}

function changeBackgroundImage() {
    body.style.backgroundImage = `url('${getRandomImage()}')`;
}

changeBackgroundImage();
setInterval(changeBackgroundImage, 10000);
