
document.addEventListener('DOMContentLoaded', function() {
    const mainEl = document.querySelector('#main');
    const postCntEl = document.querySelector('#post .container');

    // 製作 點擊滑動至目標 事件
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

        if (deviceHeight > targetPost.offsetHeight) {
            postCntEl.style.height = deviceHeight + 'px';
        } else {
            postCntEl.style.height = 'auto';
        }

        mainEl.style.height = 'auto';

        targetPost.style.opacity = 1;

        mainEl.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }

    // 註冊 點擊滑動至目標 事件
    const heroLinkEls = document.querySelectorAll('.hero-link');
    heroLinkEls.forEach((el) => {
        el.addEventListener('click', function(event) {
            linkScrollTo(event, this);
        });
    });

    // 註冊 點擊滑動至目標 事件
    const navLinkEls = document.querySelectorAll('.nav-link');
    navLinkEls.forEach((el) => {
        el.addEventListener('click', function(event) {
            linkScrollTo(event, this);
        });
    });

    // 註冊 點擊後新增class屬性<dropdown-mobile>
    const mNavOpenEl = document.querySelector('.nav-toggle-mobile .open');
    mNavOpenEl.addEventListener('click', () => {
        let dropdownEl = document.querySelector('.dropdown');
        dropdownEl.classList.add('dropdown-mobile');

        // 註冊 點擊後移除class屬性<dropdown-mobile>
        let mDropdownUlEl = document.querySelector('.dropdown-mobile ul');
        mDropdownUlEl.addEventListener('click', () => {
            dropdownEl.classList.remove('dropdown-mobile');
        });
    });

    // 註冊 點擊後移除class屬性<dropdown-mobile>
    const mNavCloseEl = document.querySelector('.nav-toggle-mobile .close');
    mNavCloseEl.addEventListener('click', () => {
        let mDropdownEl = document.querySelector('.dropdown-mobile');
        mDropdownEl.classList.remove('dropdown-mobile');
    });
});