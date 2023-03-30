
document.addEventListener('DOMContentLoaded', function() {
    const mainEl = document.querySelector('#main');
    const postCntEl = document.querySelector('#post .container');

    const linkScrollTo = (event, el) => {
        event.preventDefault();

        let deviceHeight = window.innerHeight;

        mainEl.classList.remove('hidden');
        if (deviceHeight > mainEl.offsetHeight) {
            mainEl.style.height = deviceHeight + 'px';
        } else {
            mainEl.style.height = mainEl.offsetHeight + 'px';
        }

        postCntEl.querySelectorAll('.content').forEach((el) => {
            el.classList.add('hidden');
        });

        let targetPost = document.querySelector(el.hash);
        targetPost.classList.remove('hidden');
        targetPost.style.opacity = 0;
        targetPost.style.transition = 'opacity 1s ease-in-out';

        if (deviceHeight > targetPost.offsetHeight) {
            postCntEl.style.height = deviceHeight + 'px';
        } else {
            postCntEl.style.height = 'auto';
        }

        mainEl.style.height = 'auto';

        window.setTimeout(() => {
            targetPost.style.opacity = 1;
        });

        mainEl.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }

    const navLinkEls = document.querySelectorAll('.nav-link');
    const heroLinkEls = document.querySelectorAll('.hero-link');

    heroLinkEls.forEach((el) => {
        el.addEventListener('click', function(event) {
            linkScrollTo(event, this);
        });
    });

    navLinkEls.forEach((el) => {
        el.addEventListener('click', function(event) {
            linkScrollTo(event, this);
        });
    });

    const mNavOpenEl = document.querySelector('.nav-toggle-mobile .open');
    const dropdownEl = document.querySelector('.dropdown');

    mNavOpenEl.addEventListener('click', () => {
        dropdownEl.classList.add('dropdown-mobile');

        let mDropdownUlEl = document.querySelector('.dropdown-mobile ul');

        mDropdownUlEl.addEventListener('click', () => {
            dropdownEl.classList.remove('dropdown-mobile');
        });
    });

    const mNavCloseEl = document.querySelector('.nav-toggle-mobile .close');

    mNavCloseEl.addEventListener('click', () => {
        let mDropdownEl = document.querySelector('.dropdown-mobile');

        mDropdownEl.classList.remove('dropdown-mobile');
    });
});