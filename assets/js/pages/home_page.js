import { 
    apiUrl,
    endPoint,
    fetchData,
    removeLoader
} from "../helper.js";

let fish = [
	{
		name: "It's Nemo, isn't it?",
        color: 'red-line',
		image: 'assets/images/slide4_fish1.jpg',
		intro: 'Or we normally call “clownfish”. Depending on the species, clownfish are overall yellow, orange, or a reddish or blackish color, and many show white bars or patches.'
	},
	{
		name: 'Dory is that you?',
        color: 'blue-line',
		image: 'assets/images/slide4_fish2.jpg',
		intro: 'Blue tangs are small fish native to coral reefs in the Indo-Pacific. The animals are easy to spot, thanks to their characteristically vibrant colorations of royal blue and canary yellow.'
	},
	{
		name: 'Omg so many Gill!',
        color: 'yellow-line',
		image: 'assets/images/slide4-fish3.webp',
		intro: 'The Moorish Idol has a very long, white, sickle-shaped dorsal fin, two broad black bars on the body, and a yellow saddle across the snout. There is a small, bony projection in front of both eyes of adults.'
	}
]

//
// fishes render
//
async function fishes(fish) {
    let fishes = document.createElement('div');
    fishes.classList.add('fishes');
    fishes.innerHTML = '';

    for (let species of fish) {
        let aFish = document.createElement('div');
        aFish.classList.add('fish');
        aFish.innerHTML = `
        <div class="flex-block fish-infor-wrapper">
            <div class="col5">
                <div class="fish-pd-flex">
                    <div class="image pd-top-4-3" style="background-image: url(${species['image']})"></div>
                </div>
            </div>
            <div class="col7">
                <div class="fish-pd-flex">
                    <h3 class="font-weight-200 uppercase">${species['name']}</h3>
                    <div class="${species['color']} slide4-line"></div>
                    <div class="small-text">${species['intro']}</div>
                </div>
            </div>
        </div>
        `;

        fishes.appendChild(aFish);
    }
    return fishes;
}

//
// instructors render
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

//
// main function
//
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
                        <a class="uppercase see-more-btn white-color-100" href="/booking">
                            See more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="pd-top-bttm-200">
        <div class="container position-rel">
            <div class="row row1-slide2 z-index-111 grid-block">
                <div>
                    <div class="image pd-top-4-7" style="background-image: url(assets/images/slide2_pic1.jpg)"></div>
                </div>
                <div class="slide2-intro-text">
                    <div class="light-blue-color-100">Something about us</div>
                    <h2 class="font-weight-200 intro-para uppercase">We are BLUR, one of the best scuba diving centers in Vietnam.</h2>
                    <div class="small-text">
                        We can cater to everybody, through our diving courses from Beginner to Professional, fun dives for certified divers, freediving for those who want to do it all natural by breath holding, and snorkeling for those who prefer to stay at the surface.
                    </div>
                </div>
            </div>
            <div class="position-abs slides-bg-wrapper bg-wrapper-slide2 z-index-1">
                <div class="uppercase background-text">About</div>
                <div class="red dot slide2-dot1"></div>
                <div class="blue dot slide2-dot2"></div>
            </div>
        </div>
    </section>

    <section class="pd-top-bttm-200">
        <div class="container position-rel">
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

    <section class="slide4 pd-top-bttm-200">
        <div class="container position-rel">
            <div class="row row1-slide4">
                <div class="row1-slide4-wrapper z-index-111">
                    <h2 class="uppercase font-weight-200">Are you a big fan of Disney?</h2>
                    <div class="uppercase text-align-right check-this-out-text">Then check this out!</div>
                    <div class="uppercase text-align-right light-blue-color-100 slide4-small-text">We have some friends from "finding nemo"</div>
                    <div class="fishes-wrapper"></div>
                </div>
                <div class="position-abs slides-bg-wrapper bg-wrapper-slide4 z-index-1">
                    <div class="uppercase background-text">Species</div>
                    <div class="blue dot slide4-dot1"></div>
                    <div class="yellow dot slide4-dot2"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="pd-top-bttm-200">
        <div class="slide5-container position-rel">
            <div class="row row1-slide5 z-index-111">
                <div class="uppercase text-align-center light-blue-color-100">And many other "actors"</div>
                <h2 class="uppercase text-align-center font-weight-200">Wanna find out what species they are?</h2>
                <div class="grid-block slide5-choice-grid">
                    <div class="position-rel">
                        <div class="image pd-top-4-6" style="background-image: url(assets/images/slide5_pic1.jpg)"></div>
                        <div class="position-abs slide5-dark-bg">
                            <div class="position-abs text-align-center">
                                <h3 class="uppercase font-weight-600">Go diving</h3>
                                <div class="slide5-hidden-list">
                                    <div class="small-text">Scuba diving lessons are detailed and focused on an individual’s need. Available for any level of diver, from complete beginners right through to competition divers.</div>
                                    <div class="flex-block slide5-infor-wrapper text-align-left">
                                        <div class="col2">
                                            <div class="slide5-icon-padding">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="col10">
                                            <div class="slide5-location">Da Nang / Nha Trang / Phu Quoc</div>
                                            <div class="font-weight-200">We operate  lessons at 3 locations.</div>
                                        </div>
                                    </div>
                                    <div class="flex-block slide5-infor-wrapper text-align-left">
                                        <div class="col2">
                                            <div class="slide5-icon-padding">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="col10">
                                            <div class="slide5-location">From 80$ / week</div>
                                            <div class="font-weight-200">Per person, included all taxes and equipments.</div>
                                        </div>
                                    </div>
                                    <a href="/booking" class="uppercase">More details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="position-rel">
                        <div class="image pd-top-4-6" style="background-image: url(assets/images/slide5_pic2.jpg)"></div>
                        <div class="position-abs slide5-dark-bg">
                            <div class="position-abs text-align-center">
                                <h3 class="uppercase font-weight-600">Dive course</h3>
                                <div class="slide5-hidden-list">
                                    <div class="small-text">Scuba diving lessons are detailed and focused on an individual’s need. Available for any level of diver, from complete beginners right through to competition divers.</div>
                                    <div class="flex-block slide5-infor-wrapper text-align-left">
                                        <div class="col2">
                                            <div class="slide5-icon-padding">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="col10">
                                            <div class="slide5-location">Da Nang / Nha Trang</div>
                                            <div class="font-weight-200">We operate  lessons at 2 locations.</div>
                                        </div>
                                    </div>
                                    <div class="flex-block slide5-infor-wrapper text-align-left">
                                        <div class="col2">
                                            <div class="slide5-icon-padding">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="col10">
                                            <div class="slide5-location">From 80$ / week</div>
                                            <div class="font-weight-200">Per person, included all taxes and equipments.</div>
                                        </div>
                                    </div>
                                    <a href="/course" class="uppercase">More details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="position-abs slides-bg-wrapper bg-wrapper-slide5 z-index-1">
                <div class="uppercase background-text">Services</div>
                <div class="green dot slide5-dot1"></div>
                <div class="blue dot slide5-dot2"></div>
            </div>
        </div>
    </section>

    <section class="pd-top-bttm-200">
        <div class="container position-rel">
            <div class="row row1-slide6 z-index-111">
                <h2 class="uppercase font-weight-200 text-align-center">Our instructors will accompany you</h2>
                <div class="instructors">${instructors()}</div>
            </div>
            <div class="position-abs slides-bg-wrapper bg-wrapper-slide6 z-index-1">
                <div class="uppercase background-text">Staff</div>
                <div class="green dot slide6-dot1"></div>
            </div>
        </div>
    </section>
    `;

    // active => white
    let homeText = document.querySelector('.home');
    homeText.classList.add('white-text');

    // fishes render 
    template.querySelector('.fishes-wrapper').appendChild(await fishes(fish))

    return template;
}
