console.log('done')










/* LOADING BG + DOCUMENT.READYSTATE */

/* const loadingBg = document.getElementById('loading_bg')

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {
        loadingBg.style.opacity = 0;
        loadingBg.style.visibility = 'hidden';
        setTimeout(() => {
            menuBt.style.transform = 'translateY(0) rotate(0deg)'
        }, 200);
    }
} */





/* HAMBURGUER MENU */

const hambt = document.querySelector('.hambt')
const nav = document.querySelector('header nav')

const hamDivs = document.querySelectorAll('.hambt div')

let showingNav = false;

function toggleNav() {
    if(showingNav == false) {
        showingNav = true;
        nav.classList.add('showing_nav')

        for(i=0;i<hamDivs.length;i++) {
            hamDivs[i].style.backgroundColor = 'var(--light)';
        }
    } else {
        showingNav = false;
        nav.classList.remove('showing_nav')

        for(i=0;i<hamDivs.length;i++) {
            hamDivs[i].style.backgroundColor = 'var(--light)';
        }
    }
}

hambt.addEventListener('click', toggleNav)
const introImgs = document.querySelector('.intro_imgs_ctnr')
const paperWorkApe = document.querySelector('.paperwork_ape')

let windowPosition;
document.body.onscroll = function() {
    windowPosition = window.pageYOffset;

    introImgs.style.transform = 'translateY(' + windowPosition / 10 + 'px)';
    paperWorkApe.style.transform = 'translateY(calc(' + windowPosition / 6 + 'px - 15rem))';

    if(showingNav == true) {
        toggleNav()
    }
}
