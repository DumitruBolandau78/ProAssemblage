const openAside = document.querySelector('.openAside'),
    closeAside = document.querySelector('.closeAside'),
    aside = document.querySelector('.aside');

openAside.addEventListener('click', () => {
    aside.style.right = '0';
    openAside.style.display = 'none';
    closeAside.style.display = 'block';
});

closeAside.addEventListener('click', () => {
    aside.style.right = '-100%';
    openAside.style.display = 'block';
    closeAside.style.display = 'none';
});