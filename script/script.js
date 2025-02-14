let sliderImage = document.querySelector('.slider');
let Polets = document.querySelectorAll('.slider .container .info ul li');
let PoletsArray = Array.from(Polets);
let slideNumber = 1;


setInterval(() => {
        sliderImage.style.cssText = `background-image: url('../images/slider0${slideNumber}.png');`;
        PoletsArray.forEach(function(ele) {
                ele.classList.remove("active");
        });
        PoletsArray[slideNumber-1].classList.add("active");
        (slideNumber === 3) ? slideNumber = 1 : slideNumber++;
}, 3000);