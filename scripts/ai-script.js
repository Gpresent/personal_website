let currentIndex = 0;
const menu = document.querySelector('.menu');

document.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        currentIndex = Math.min(currentIndex + 1, 4);
    } else {
        currentIndex = Math.max(currentIndex - 1, 0);
    }

    const offset = currentIndex * 80; // 80% for each card
    menu.style.transform = `translateX(-${offset}%)`;
});
