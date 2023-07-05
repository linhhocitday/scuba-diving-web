export async function renderHeader() {
    let template = document.createElement('header');
    template.classList.add('header');
    template.innerHTML = `
    <div class="header-div">
        <div class="container">
            <div class=" header-wrapper white-bg-8 flex-block align-center blur-background-wrapper">
                <a class="block logo-a-tag" href="/">
                    <div class="logo-wrapper flex-block align-center">
                        <img class="logo" src="assets/images/logo.png" alt="" />
                        <p class="uppercase">Blur</p>
                    </div>
                </a>
                <div class="header-right-col flex-block align-center">
                    <div class="item uppercase"><a class="home white-color-60" href="/">Home</a></div>
                    <div class="item uppercase"><a class="about white-color-60" href="/about">About</a></div>
                    <div class="item uppercase"><a class="booking white-color-60" href="/booking">Booking</a></div>
                    <div class="item uppercase"><a class="course white-color-60" href="/course">Courses</a></div>
                </div>
            </div>
        </div>
    </div>
    `;

    return template;
}