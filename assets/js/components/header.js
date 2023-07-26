export async function renderHeader() {
    let template = document.createElement('header');
    template.classList.add('header', 'position-rel');
    template.innerHTML = `
    <div class="header-div white-bg-8 blur-background-wrapper">
        <div class="container">
            <div class=" header-wrapper flex-block align-center">
                <a class="block logo-a-tag" href="/">
                    <div class="logo-wrapper flex-block align-center">
                        <img class="logo" src="/assets/images/logo.png" alt="" />
                        <p class="uppercase">Blur</p>
                    </div>
                </a>
                <div class="header-list-wrapper">
                    <div class="header-right-col flex-block align-center flex-row flex-column">
                        <div class="item uppercase"><a class="home white-color-60" href="/">Home</a></div>
                        <div class="item uppercase"><a class="about white-color-60" href="/about">About</a></div>
                        <div class="item uppercase"><a class="book white-color-60" href="/bookings">Booking</a></div>
                        <div class="item uppercase"><a class="courses white-color-60" href="/courses">Courses</a></div>
                    </div>
                </div>
                <div class="header-res-bg"></div>
                <div class="hamburger white-color-60">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    </div>
    `;

    //
    // hamburger function
    //
    let hamburger = template.querySelector('.hamburger');
    let list = template.querySelector('.header-list-wrapper');
    let bg = template.querySelector('.header-res-bg');

    hamburger.addEventListener('click', () => {
        list.classList.add('active');
        bg.classList.add('dark-bg-responsive');
    });

    bg.addEventListener('click', () => {
        list.classList.remove('active');
        bg.classList.remove('dark-bg-responsive');
    });

    return template;
}