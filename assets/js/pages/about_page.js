import { 
    apiUrl,
    endPoint,
    fetchData,
    removeLoader,
} from "../helper.js";


//
// render staff information
//
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
        document.querySelector('.about-instructors').innerHTML = '';
        for (let i = 0; i < p.length; i++) {
            let div = document.createElement('div');
            div.classList.add('about-instructor');
            
            div.innerHTML = `
            <div class="position-rel about-img-wrapper over-flow-hidden" id="about-staff-image-${i}">
                <div class="about-hidden-speech-bg position-abs"><div class="about-hidden-speech position-abs">${p[i]['instructorSpeech']}</div></div>
                <div class="image pd-top-100" style="background-image: url(${p[i]['avatar']})"></div>
            </div>
            <p class="about-staff-job uppercase gradient-text">${p[i]['job']}</p>
            <h3 class="font-weight-400">${p[i]['name']}</h3>
            `;

            document.querySelector('.about-instructors').appendChild(div);
        }
    }

    await fetchData(getInstructor);
}

//
// main function
//
export async function renderAbout() {
    let template = document.createElement('div');
    template.classList.add('about-page');
    template.innerHTML = `
    <section class="about-slide1">
        <div class="container position-rel">
            <div class="row about-slide1-row1 z-index-111">
                <div class="flex-block flex-align-justify">
                    <h2 class="uppercase inline-block font-weight-200">Our</h2>
                    <h2 class="uppercase inline-block font-weight-200 z-index-111">Story</h2>
                    <div class="position-abs about-jelly-fish">
                        <div class="image pd-top-1-2" style="background-image: url(/assets/images/jelly_fish.png)"></div>
                    </div>
                </div>
            </div>
            <div class="position-abs slides-bg-wrapper about-slide1-bg z-index-1">
                <div class="uppercase position-abs scroll-text l-visible mb-hidden">Scroll</div>
                <div class="blue dot about-slide1-dot1"></div>
            </div>
        </div>
    </section>

    <section class="about-slide2">
        <div class="container position-rel">
            <div class="row">
                <div class="about-slide2-row1 block l-flex-block z-index-111 flex-align-justify">
                    <div class="l-col7 ab-mb-mg">
                        <div class="ab-slide2-row1-pd">
                            <h1 class="uppercase font-weight-200">Our mission</h1>
                            <p class="small-text"><b>BLUR</b> was established in 2002 by Mr.Linh, a passionate adventurers who wanted to live and work differently. With over 20 years of experience in diving and tourism, <b>BLUR</b> has become one of the largest dive centers in Vietnam.</p>
                            <p class="small-text">Our multilingual instructors are <b>BLUR Five Star IDC certified</b> and passionate about sharing their love and knowledge of the ocean with guests.</p>
                            <p class="small-text">Our mission is to provide exceptional customer satisfaction and unforgettable diving and snorkeling experiences in Vietnam.</p>
                            </div>
                    </div>
                    <div class="l-col5">
                        <div class="ab-slide2-row1-pd">
                            <div class="image pd-top-100 l-pd-top-2-1" style="background-image: url(/assets/images/big_boss.jpg)"></div>
                        </div>
                    </div>
                </div>
                <div class="position-abs slides-bg-wrapper about-slide2-bg z-index-1">
                    <div class="uppercase background-text">Mission</div>
                    <div class="blue dot about-slide2-dot1"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="about-slide3">
        <div class="container position-rel">
            <div class="row about-slide3-row1 z-index-111">
                <h2 class="uppercase font-weight-200 text-align-center">Our team</h2>
                <div class="image pd-top-1-3 team-image" style="background-image: url(/assets/images/team.jpg)"></div>
                <div class="about-instructors grid-block">${instructors()}</div>
            </div>
            <div class="position-abs slides-bg-wrapper about-slide3-bg z-index-1">
                <div class="uppercase background-text">Team</div>
                <div class="red dot about-slide3-dot1"></div>
                <div class="red dot about-slide3-dot2"></div>
            </div>
        </div>
    </section>

    `;

    let aboutText = document.querySelector('.about');
    aboutText.classList.add('white-text');

    return template;
}