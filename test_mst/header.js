
const inner_header = document.querySelector('.inner_header')
const outer_header = document.querySelector('.outer_header')
const dark_bg = document.querySelector('.dark_bg')



window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        inner_header.style.opacity = '0';

        dark_bg.style.opacity = '0.2';

        outer_header.style.opacity = '1';
        outer_header.style.width = '100%';

    } else {
        inner_header.style.opacity = '1';

        outer_header.style.width = '70%';

        dark_bg.style.opacity = '0';
        outer_header.style.opacity = '0';
    }
})
