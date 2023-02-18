'use strict'

const reviews = document.querySelectorAll('.item-review'),
    reviewDots = document.querySelectorAll('.dot-review'),
    reviewLeft = document.querySelector('.review-left'),
    reviewRight = document.querySelector('.review-right');

reviewDots.forEach((item, i) => {
    item.addEventListener('click', () => {
        addClass();
    });

    function addClass() {
        removeCurentDot();
        item.classList.add('current-dot');
        reviews[i].classList.add('current-review');
    }
});



function removeCurentDot() {
    reviewDots.forEach(item => {
        item.classList.remove('current-dot');
    });
    reviews.forEach(item => {
        item.classList.remove('current-review');
    });
}

reviewLeft.addEventListener('click', () => {
    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].classList.contains('current-review')) {
            removeCurrentClassAndDot();
            if (i > 0) {
                i--;
                showCurrent(i);
                break;                
            } else {
                let lastEl = reviews.length-1;
                i = lastEl;
                reviews[i].classList.add('current-review');
                reviewDots[i].classList.add('current-dot');
            }
        }
    }
});
function showCurrent(i) {
    reviews[i].classList.add('current-review');
    reviewDots[i].classList.add('current-dot');
}

reviewRight.addEventListener('click', () => {
    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].classList.contains('current-review')) {
            removeCurrentClassAndDot();
            if (i < reviews.length-1) {
                i++;
                showCurrent(i);
                break;                
            } else {
                reviews[0].classList.add('current-review');
                reviewDots[0].classList.add('current-dot');
            }
        }
    }
});

function removeCurrentClassAndDot() {
    reviewDots.forEach(item => {
        item.classList.remove('current-dot');
    });

    reviews.forEach(item => {
        item.classList.remove('current-review');
    });
}