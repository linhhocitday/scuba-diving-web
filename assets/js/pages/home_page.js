import { 
    apiUrl,
    endPoint,
    fetchData,
    removeLoader,
    fish
} from "../helper.js";

async function fishes() {
    let fish = document.createElement('div');
}

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
            <div div class="home-s1-bg-grid grid-block">
                <div class="ellipse home-s1-ell position-rel"></div>
                <div class="home-s1-bg-wrapper">
                    <div class="image home-s1-bg pd-top-4-3" style="background-image: url(assets/images/home_s1_bg.jpg)"></div>
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
                </div>
            </div>
        </div>
    </section>

    <section class="pd-top-bttm-200 position-rel">
        <div class="container">
            <div class="row row1-slide2 z-index-111">
                <h2 class="font-weight-200 text-align-center intro-para">We are BLUR, one of the best scuba diving centers in Vietnam. We can cater to everybody, through our diving courses from Beginner to Professional, fun dives for certified divers, freediving for those who want to do it all natural by breath holding, and snorkeling for those who prefer to stay at the surface.</h2>
            </div>
            <div class="position-abs slides-bg-wrapper bg-wrapper-slide2 z-index-1">
                <div class="uppercase background-text">About</div>
                <div class="red dot slide2-dot1"></div>
            </div>
        </div>
    </section>

    <section class="pd-top-bttm-200 position-rel">
        <div class="container">
            <div class="row row1-slide3">
                <div class="row1-slide3-wrapper grid-block z-index-111">
                    <div class="slide3-img-wrapper">
                        <div class="image pd-top-4-3" style="background-image: url(assets/images/slide3_pic1.jpg)"></div>
                        <div class="uppercase text-align-center light-blue-color-100">Mistical creatures</div>
                        <h3 class="uppercase text-align-center font-weight-200">Right in front of your eyes</h3>
                    </div>
                    <div class="position-rel slide3-text-middle">
                        <div class="vertical-line" style="height: 200px"></div>
                        <div class="uppercase text-align-center light-blue-color-100">Connect</div>
                        <div class="horizontal-line"></div>
                        <h2 class="uppercase font-weight-600 text-align-center">With the ocean</h2>
                        <div class="vertical-line" style="height: 600px"></div>
                    </div>
                    <div class="slide3-img-wrapper">
                        <div class="image pd-top-4-3" style="background-image: url(assets/images/slide3_pic2.jpg)"></div>
                        <div class="uppercase text-align-center light-blue-color-100">Visiting</div>
                        <h3 class="uppercase text-align-center font-weight-200">The stunning coral reefs yourself</h3>
                    </div>
                </div>
                <div class="position-abs slides-bg-wrapper bg-wrapper-slide3 z-index-1">
                    <div class="blue dot slide3-dot1"></div>
                    <div class="purple dot slide3-dot2"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="slide4 pd-top-bttm-200 position-rel">
        <div class="container">
            <div class="row row1-slide4">
                <div class="row1-slide4-wrapper z-index-111">
                    <h2 class="uppercase font-weight-200">Are you a big fan of Disney?</h2>
                    <div class="uppercase text-align-right check-this-out-text">Then check this out!</div>
                    <div class="uppercase text-align-right light-blue-color-100">We have some friends from "finding nemo"</div>
                </div>
                <div class="position-abs slides-bg-wrapper bg-wrapper-slide4 z-index-1">
                    <div class="blue dot slide4-dot1"></div>
                    <div class="purple dot slide4-dot2"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="pd-top-bttm-200">
        <div class="container">
            <div class="row grid-block">
                <div class="instructors">${instructors()}</div>
            </div>
        </div>
    </section>
    `;

    let homeText = document.querySelector('.home');
    homeText.classList.add('white-text');

    return template;
}