var lastScrollTop = 0;

navbar = document.getElementById("header");

window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop) {
        navbar.style.top="-100px";
    } else {
        navbar.style.top="0";
        navbar.classList.add("filter");
    }
    lastScrollTop = scrollTop;
    navbar.classList.rremove("filter");
});

/*scrolling animations */

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            timout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length) {
window.addEventListener('scroll', debounce(function() {
    animeScroll();
}, 100));
}
