/** header change effect **/

const header = document.querySelector('#header')
const stickyHeader = () => {
    const scry = window.scrollY;
    if (scry > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

window.addEventListener('scroll', stickyHeader);

/** scroll reveal effect**/
const sr = ScrollReveal({
    reset: false,
});

sr.reveal('.landing-text-box', {
    duration: 1000,
    origin: 'right',
    distance: '80px',
});

sr.reveal('.meet-text-box', {
    duration: 1000,
    origin: 'bottom',
    distance: '49px',
});

sr.reveal('.meet-wrapper img', {
    duration: 1000,
    origin: 'bottom',
    distance: '40px',
    interval: 200, //0.2초 간격으로 효과 실행
});