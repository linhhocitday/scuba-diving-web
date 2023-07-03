import { 
    apiUrl,
    endPoint,
    fetchData,
    removeLoader,
} from "../helper.js";

async function instructors(p) {
    let getInstructor = {
        apiUrl: apiUrl,
        endPoint: endPoint.diving,
        method: 'GET',
        async callback(p) {
            await removeLoader();
            await renderInstructor(p);
        }
    }

    async function renderInstructor(p) {
        document.querySelector('.instructors').innerHTML = '';
        for (let instructor of p) {
            let {name, instructorSpeech} = instructor;

            let div = document.createElement('div');
            div.classList.add('instructor');
            
            div.innerHTML = `
            <p>${name}</p>
            <p>${instructorSpeech}</p>
            `;

            document.querySelector('.instructors').appendChild(div);
        }
    }

    await fetchData(getInstructor);
}

export async function renderHome() {
    let template = document.createElement('div');
    template.classList.add('home-page');
    template.innerHTML = `
    <div class="position-abs home-s1-bg-div">
        <div class="container">
            <div div class="row1-slide1 grid-block">
                <div></div>
                <div class="home-s1-bg-wrapper">
                    <div class="image home-s1-bg pd-top-5-4" style="background-image: url(assets/images/home_s1_bg.jpg)"></div>
                </div>
                <div class="position-abs home-s1-jellyfish-wrapper z-index-111">
                    <div class="image pd-top-100 home-s1-jellyfish" style="background-image: url(assets/images/jelly_fish.png)"></div>
                </div>
            </div>
        </div>
    </div>

    <section class="slide1 pd-top-bttm-200">
        <div class="container">
            <div class="row row1-slide1 grid-block">
                <div class="position-rel">
                    <h1 class="uppercase home-h1 font-weight-200 width-50vw z-index-11">Undersea exploration</h1>
                    <div class="width-30vw z-index-11">
                        <p class="small-text intro-text white-color-60">
                            Welcome to BLUR! Our goal is to provide you with everything you
                            need to explore the ocean and proficient in scuba diving.
                        </p>
                        <button class="btn uppercase see-more-btn white-color-100">See more</button>
                    </div>
                    <div class="ellipse home-s1-ell position-abs"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="pd-top-bttm-200">
        <div class="container">
            <div class="row">
                <h2 class="uppercase font-weight-200">slide 2</h2>
                <div class="instructors">${instructors()}</div>
            </div>
        </div>
    </section>
    `;

    let homeText = document.querySelector('.home');
    homeText.classList.add('white-text');

    return template;
}