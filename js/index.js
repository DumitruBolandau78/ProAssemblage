'use strict'
const tabsCont = document.querySelectorAll('.tab-photo-container'),
    tabsHeader = document.querySelectorAll('.change-photo-click');


tabsHeader.forEach(item => {
    item.classList.remove('tabheader__item_active');
});

tabsHeader.forEach((item, i) => {
    item.addEventListener('click', () => {
        hideTabElet();
        showTabElet(i);
    });

    hideTabElet();
    showTabElet(0);
});
function hideTabElet() {
    tabsCont.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
        item.classList.remove('fade');
    });
};

function showTabElet(i) {
    tabsCont[i].classList.add('show');
    tabsCont[i].classList.add('fade');
    tabsCont[i].classList.remove('hide');
};

const links = document.querySelectorAll('.change-photo-click');

links.forEach((item, i) => {
    links[i].addEventListener('click', () => {
        removeStyles();
        newStylesForLink(i)
    });
    newStylesForLink(0);
});

function removeStyles(){
    links.forEach((item) => {
        item.style.color = '';
        item.style.backgroundColor = '';
    });
}

function newStylesForLink(i){
    links[i].style.color = 'rgb(22, 22, 22)';
    links[i].style.backgroundColor = 'white';
}

const header = document.querySelector('.header'),
    headerLinks = header.querySelectorAll('a'),
    changeStyle = document.querySelectorAll('.nav-links ul li a'),
    asideLink = document.querySelectorAll('.aside a'),
    language = document.querySelectorAll('.language');

let path = document.location.pathname;

function HeaderChangeStyleLink(){
    if (path == '/index.html' || path == '/' || path == '/pages/home_en.html'){
        changeStyle[0].style.fontWeight = 'bold';
        changeStyle[0].style.setProperty('--scaleBig', 'scaleX(1)');
        asideLink[0].style.borderBottom = '1px solid white';
    } else if (path == '/pages/services_fr.html' || path == '/pages/services_en.html'){
        changeStyle[1].style.fontWeight = 'bold';
        changeStyle[1].style.setProperty('--scaleBig', 'scaleX(1)');
        asideLink[1].style.borderBottom = '1px solid white';
    } else if (path == '/pages/services-area_fr.html' || path == '/pages/services-area_en.html'){
        changeStyle[2].style.fontWeight = 'bold';
        changeStyle[2].style.setProperty('--scaleBig', 'scaleX(1)');
        asideLink[2].style.borderBottom = '1px solid white';
    } else if (path == '/pages/photo_fr.html' || path == '/pages/photo_en.html'){
        changeStyle[3].style.fontWeight = 'bold';
        changeStyle[3].style.setProperty('--scaleBig', 'scaleX(1)');
        asideLink[3].style.borderBottom = '1px solid white';
    } else if (path == '/pages/samples_en.html' || path == '/pages/samples_fr.html'){
        changeStyle[4].style.fontWeight = 'bold';
        changeStyle[4].style.setProperty('--scaleBig', 'scaleX(1)');
        asideLink[4].style.borderBottom = '1px solid white';
    } else if (path == '/pages/reviews_en.html'  || path == '/pages/reviews_fr.html'){
        changeStyle[5].style.fontWeight = 'bold';
        changeStyle[5].style.setProperty('--scaleBig', 'scaleX(1)');
        asideLink[5].style.borderBottom = '1px solid white';
    } else if (path == '/pages/contacts_fr.html'  || path == '/pages/contacts_en.html'){
        changeStyle[6].style.fontWeight = 'bold';
        changeStyle[6].style.setProperty('--scaleBig', 'scaleX(1)');
        asideLink[6].style.borderBottom = '1px solid white';
    }
}

if (path == '/index.html' || path == '/' || path == '/pages/services_fr.html' || path == '/pages/services-area_fr.html' || path == '/pages/photo_fr.html' || path == '/pages/samples_fr.html' || path == '/pages/reviews_fr.html' ||  path == '/pages/contacts_fr.html'){
    language[0].classList.add('language-active');
}
else {
    language[1].classList.add('language-active');
}

HeaderChangeStyleLink();

window.addEventListener('scroll', () => {
    if(window.scrollY >= 50){
        header.classList.add('active_bar');
        headerLinks.forEach(item => {
            item.style.color = 'rgb(22, 22, 22)';
        });
        header.style.borderBottom = '1px solid rgb(17, 17, 17)';
        changeStyle.forEach(item => {
            item.style.setProperty("--forBeforeColor", "rgb(22, 22, 22)");
        });
        HeaderChangeStyleLink();
    } else {
        header.classList.remove('active_bar');
        headerLinks.forEach(item => {
            item.style.color = 'white';
        });
        header.style.borderBottom = 'none';
        changeStyle.forEach(item => {
            item.style.setProperty("--forBeforeColor", "#fff");
        });
        HeaderChangeStyleLink();
    }
});