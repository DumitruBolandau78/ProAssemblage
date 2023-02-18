function slider(flag, num) {
    var current = $(".item.current"),
        next,
        index;
    if (!flag) {
        next = current.is(":last-child") ? $(".item").first() : current.next();
        index = next.index();
    } else if (flag === 'dot') {
        next = $(".item").eq(num);
        index = num;
    } else {
        next = current.is(":first-child") ? $(".item").last() : current.prev();
        index = next.index();
    }
    next.addClass("current");
    current.removeClass("current");
    $(".dot").eq(index).addClass("current").siblings().removeClass("current");
}
// var setSlider = setInterval(slider, 4000);

$(".button").on("click", function () {
    // clearInterval(setSlider);
    var flag = $(this).is(".prev") ? true : false;
    slider(flag);
    // setSlider = setInterval(slider, 4000);
});

$(".dot").on("click", function () {
    if ($(this).is(".current")) return;
    // clearInterval(setSlider);
    var num = $(this).index();
    slider('dot', num);
    // setSlider = setInterval(slider, 4000);
});


const photoCollection = document.querySelectorAll('.galery .photo'),
    modalSlider = document.querySelector('.modal-slider'),
    closeModalSlider = document.querySelector('.icon-close'),
    sliderBigImg = document.querySelectorAll('.items .photo'),
    dotCollection = document.querySelectorAll('.dot');

closeModalSlider.addEventListener('click', () => {
    header.style.display = 'flex';
    modalSlider.style.display = 'none';
});

function closeModalGetLocation(){
    const coordinates = document.querySelector('.current').getBoundingClientRect();
    closeModalSlider.style.top = coordinates.top + 'px';
    closeModalSlider.style.right = coordinates.left + 'px';
}

photoCollection.forEach((item, i) => {
    photoCollection[i].addEventListener('click', () => {
        removeCurrentImg();
        removeCurrentDot();
        header.style.display = 'none';
        openModal();
        sliderBigImg[i].classList.add('current');
        dotCollection[i].classList.add('current');
        closeModalGetLocation();
    });
});

function openModal(){
    modalSlider.style.display = 'flex';
    modalSlider.style.justifyContent = 'center';
    modalSlider.style.alignItems = 'center';
}

function removeCurrentImg(){
    sliderBigImg.forEach(item => {
        item.classList.remove('current');
    });
}

function removeCurrentDot(){
    dotCollection.forEach(item => {
        item.classList.remove('current');
    });
}

window.addEventListener('resize', () => {
    closeModalGetLocation();
});