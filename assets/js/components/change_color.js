export async function changeColor() {
    let date = new Date();
    let currentHour = date.getHours();

    // let currentHour = 10;

    let whiteColor100 = document.querySelectorAll('.white-color-100');
    let whiteColor80 = document.querySelectorAll('.white-color-80');
    let whiteColor60 = document.querySelectorAll('.white-color-60');
    let blackBg100 = document.querySelectorAll('.black-bg-100');
    let whiteBg8 = document.querySelectorAll('.white-bg-8');

    let homeBg = document.querySelector('.home-s1-bg');

    let loadingLogo = document.querySelector('.loading-bg');
    let logoSvgLoading = document.querySelector('.logo-svg-loading-night');
    let blurBgLogoNight = document.querySelector('.blur-bg-logo-night');

    let logo = document.querySelector('img.logo');

    let whiteText = document.querySelector('.white-text');

    let homeS1Ell = document.querySelector('.home-s1-ell');

    if (currentHour >= 6 && currentHour < 18) {
        for (let tag of whiteColor100) {
            tag.classList.remove('white-color-100');
            tag.classList.add('black-color-100');
        }
        for (let tag of whiteColor80) {
            tag.classList.remove('white-color-80');
            tag.classList.add('black-color-80');
        }
        for (let tag of whiteColor60) {
            tag.classList.remove('white-color-60');
            tag.classList.add('black-color-60');
        }
        for (let tag of blackBg100) {
            tag.classList.remove('black-bg-100');
            tag.classList.add('white-bg-100');
        }
        for (let tag of whiteBg8) {
            tag.classList.remove('white-bg-8');
            tag.classList.add('black-bg-8');
        }

        homeBg.style.backgroundImage = 'url(assets/images/day_home_s1_bg.jpg)';

        loadingLogo.innerHTML = `
        <div class="middle-block blur-bg-logo"></div>
        <svg 
            id="logo-svg-loading"
            class="middle-block"
            width="221" 
            height="220" 
            viewBox="0 0 221 220" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M140.556 10H10V158.244C46.1553 105.511 104.461 69.1023 171.538 62.3749C174.34 57.3173 175.935 51.5008 175.935 45.3125C175.935 25.8099 160.095 10 140.556 10Z" 
                stroke="#03182D"
                &
                stroke-width="2"
                />
            <path 
                d="M10 210H140.869C179.601 210 211 178.52 211 139.688C211 115.357 198.674 93.9126 179.941 81.2893C109.709 82.6243 47.8008 117.905 10 171.379V210Z" 
                stroke="#03182D"
                &
                stroke-width="2"
                />
        </svg>
        
        `;
        logoSvgLoading.classList.remove('logo-svg-loading-night');
        logoSvgLoading.classList.add('logo-svg-loading-day');
        blurBgLogoNight.classList.remove('blur-bg-logo-night');
        blurBgLogoNight.classList.add('blur-bg-logo-day');


        whiteText.style.color = '#03182D';

        logo.style.src = 'assets/images/day_logo.png';

        homeS1Ell.style.background = '#266C90';
    }
    
    if (currentHour >= 18 && currentHour <= 23 || currentHour >= 0 && currentHour < 6) {
        for (let tag of whiteColor100) {
            tag.classList.remove('black-color-100');
            tag.classList.add('white-color-100');
        }
        for (let tag of whiteColor80) {
            tag.classList.remove('black-color-80');
            tag.classList.add('white-color-80');
        }
        for (let tag of whiteColor60) {
            tag.classList.remove('black-color-60');
            tag.classList.add('white-color-60');
        }
        for (let tag of blackBg100) {
            tag.classList.remove('white-bg-100');
            tag.classList.add('black-bg-100');
        }
        for (let tag of whiteBg8) {
            tag.classList.remove('black-bg-8');
            tag.classList.add('white-bg-8');
        }

        homeBg.style.backgroundImage = 'url(assets/images/home_s1_bg.jpg)';

        loadingLogo.innerHTML = `
        <div class="middle-block blur-bg-logo-night"></div>
        <svg
            id="logo-svg-loading"
            class="middle-block logo-svg-loading-night"
            width="221"
            height="220"
            viewBox="0 0 221 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M140.556 10H10V158.244C46.1553 105.511 104.461 69.1023 171.538 62.3749C174.34 57.3173 175.935 51.5008 175.935 45.3125C175.935 25.8099 160.095 10 140.556 10Z"
                stroke="#fffaf3"
                &
                stroke-width="2"
            />
            <path
                d="M10 210H140.869C179.601 210 211 178.52 211 139.688C211 115.357 198.674 93.9126 179.941 81.2893C109.709 82.6243 47.8008 117.905 10 171.379V210Z"
                stroke="#fffaf3"
                &
                stroke-width="2"
            />
        </svg>
        `;
        logoSvgLoading.style.animation = 'fill-white 1s ease forwards 0.8s';

        whiteText.style.color = '#fffaf3';

        logo.style.src = 'assets/images/logo.png';

        homeS1Ell.style.background = '#132eb3';
    }
    console.log(logoSvgLoading);
}