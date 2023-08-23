import { apiUrl, endPoint, fetchData, removeLoader } from "../helper.js";

import { fish } from "../fake_data.js";

import { parallax } from "../components/parallax.js";

//
// fishes render
//
async function fishes(fish) {
  let fishes = document.createElement("div");
  fishes.classList.add("fishes");
  fishes.innerHTML = "";

  for (let species of fish) {
    let aFish = document.createElement("div");
    aFish.classList.add("fish");
    aFish.innerHTML = `
        <div class="block l-flex-block fish-infor-wrapper flex-align-justify">
            <div class="l-col5 mb-mg">
                <div class="fish-pd-flex">
                    <div class="image pd-top-100 l-pd-top-4-3" style="background-image: url(${species["image"]})"></div>
                </div>
            </div>
            <div class="l-col7">
                <div class="fish-pd-flex">
                    <h3 class="font-weight-200 uppercase">${species["name"]}</h3>
                    <div class="gradient-line slide4-line"></div>
                    <div class="small-text">${species["intro"]}</div>
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
    method: "GET",
    async callback(p) {
      await removeLoader();
      await renderInstructor(p);
    },
  };

  async function renderInstructor(p) {
    document.querySelector(".instructors").innerHTML = "";
    for (let i = 0; i < 4; i++) {
      let div = document.createElement("div");
      div.classList.add("instructor");

      div.innerHTML = `
            <div class="position-rel img-wrapper over-flow-hidden" id="staff-image-${i}">
                <div class="hidden-speech-bg position-abs"><div class="hidden-speech position-abs">${p[i]["instructorSpeech"]}</div></div>
                <div class="image pd-top-100" style="background-image: url(${p[i]["avatar"]})"></div>
            </div>
            <p class="staff-job uppercase gradient-text">${p[i]["job"]}</p>
            <h3 class="font-weight-400">${p[i]["name"]}</h3>
            `;

      document.querySelector(".instructors").appendChild(div);
    }
  }

  await fetchData(getInstructor);
}

//
// main function
//
export async function renderHome() {
  let template = document.createElement("div");
  template.classList.add("home-page");
  template.innerHTML = `
    <div class="position-abs home-s1-bg-div">
        <div class="container">
            <div div class="home-s1-bg-grid l-grid-block block">
                <div class="ellipse home-s1-ell position-rel mobile-display-none"></div>
                <div class="home-s1-bg-wrapper">
                    <div class="image home-s1-bg pd-top-4-3 mobile-pd-top-6-7" style="background-image: url(./assets/images/home_s1_bg.jpg)"></div>
                </div>
                <div class="position-abs home-s1-jellyfish-wrapper z-index-111 mobile-display-none">
                    <div class="image pd-top-100 home-s1-jellyfish l-scroll" data-rate="-0.2" style="background-image: url(./assets/images/home_jelly_fish.png)"></div>
                </div>
            </div>
        </div>
    </div>

    <section class="slide1">
        <div class="container">
            <div class="row mb-max-width row1-slide1 l-grid-block block">
                <div class="position-rel text-align-center l-text-align-left">
                    <h1 class="uppercase home-h1 font-weight-200 l-width-50vw z-index-11">Undersea exploration</h1>
                    <div class="l-width-30vw z-index-11">
                        <p class="small-text intro-text white-color-60">
                            Welcome to BLUR! Our goal is to provide you with everything you
                            need to explore the ocean and proficient in scuba diving.
                        </p>
                        <a class="uppercase see-more-btn white-color-100" href="/bookings">
                            Book now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="pd-top-bttm-200 l-pd-300">
        <div class="container position-rel">
            <div class="row row1-slide2 z-index-111 grid-block">
                <div>
                    <div class="image pd-top-4-7" style="background-image: url(/assets/images/slide2_pic1.jpg)"></div>
                </div>
                <div class="slide2-intro-text text-align-center l-text-align-left">
                    <div class="gradient-text uppercase mb-colorful-text l-colorful-text">Something about us</div>
                    <h2 class="font-weight-200 uppercase">We are BLUR, one of the best scuba diving centers in Vietnam.</h2>
                    <div class="small-text">
                        We can cater to everybody, through our diving courses from Beginner to Professional, fun dives for certified divers, freediving for those who want to do it all natural by breath holding, and snorkeling for those who prefer to stay at the surface.
                    </div>
                </div>
            </div>
            <div class="position-abs slides-bg-wrapper bg-wrapper-slide2 z-index-1">
                <div class="uppercase">
                    <div class="l-scroll background-text" data-rate="0.2">About</div>
                </div>
                <div class="red dot slide2-dot1"></div>
                <div class="blue dot slide2-dot2"></div>
            </div>
        </div>
    </section>

    <section class="pd-top-bttm-200">
        <div class="container position-rel">
            <div class="row row1-slide3">
                <div class="row1-slide3-wrapper grid-block z-index-111">
                    <div class="position-rel mb-order-2 l-order-1 home-slide3-go-up">
                        <div class="slide3-img-wrapper l-scroll" data-rate="-0.3">
                            <div class="image pd-top-100 l-pd-top-4-3" style="background-image: url(/assets/images/slide3_pic1.jpg)"></div>
                            <div class="uppercase text-align-center gradient-text mb-colorful-text l-colorful-text">Mistical creatures</div>
                            <h3 class="uppercase text-align-center font-weight-200">Right in front of your eyes</h3>
                        </div>
                    </div>
                    <div class="position-rel slide3-text-middle mb-order-1 l-order-2">
                        <div class="vertical-line l-visible mb-hidden" style="height: 200px"></div>
                        <div class="uppercase text-align-center gradient-text mb-colorful-text l-colorful-text">Connect</div>
                        <div class="horizontal-line"></div>
                        <h2 class="uppercase font-weight-600 text-align-center">With the ocean</h2>
                        <div class="vertical-line l-visible mb-hidden" style="height: 600px"></div>
                    </div>
                    <div class="position-rel order-3 home-slide3-go-down">
                        <div class="slide3-img-wrapper l-scroll" data-rate="0.2">
                            <div class="image pd-top-100 l-pd-top-4-3" style="background-image: url(/assets/images/slide3_pic2.jpg)"></div>
                            <div class="uppercase text-align-center gradient-text mb-colorful-text l-colorful-text">Visiting</div>
                            <h3 class="uppercase text-align-center font-weight-200">The stunning coral reefs yourself</h3>
                        </div>
                    </div>
                </div>
                <div class="position-abs slides-bg-wrapper bg-wrapper-slide3 z-index-1">
                    <div class="blue dot slide3-dot1"></div>
                    <div class="red dot slide3-dot2"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="slide4 pd-top-bttm-200">
        <div class="container position-rel">
            <div class="row row1-slide4">
                <div class="row1-slide4-wrapper z-index-111">
                    <h2 class="uppercase font-weight-200">Are you a big fan of Disney?</h2>
                    <div class="uppercase text-align-right font-weight-200 check-this-out-text">Then check this out!</div>
                    <div class="uppercase text-align-right gradient-text slide4-small-text mb-colorful-text l-colorful-text">We have some friends from "finding nemo"</div>
                    <div class="fishes-wrapper"></div>
                </div>
                <div class="position-abs slides-bg-wrapper bg-wrapper-slide4 z-index-1">
                    <div class="uppercase">
                        <div class="l-scroll background-text" data-rate="0.2">Species</div>
                    </div>
                    <div class="blue dot slide4-dot1"></div>
                    <div class="red dot slide4-dot2"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="pd-top-bttm-200">
        <div class="slide5-container position-rel">
            <div class="row row1-slide5 z-index-111">
                <div class="uppercase text-align-center gradient-text mb-colorful-text l-colorful-text">And many other "actors"</div>
                <h2 class="uppercase text-align-center font-weight-200">Wanna find out what species they are?</h2>
                <div class="grid-block slide5-choice-grid">
                    <div class="position-rel over-flow-hidden">
                        <div class="image mb-pd-top-140 l-pd-top-100" style="background-image: url(/assets/images/slide5_pic1.jpg)"></div>
                        <div class="position-abs slide5-dark-bg">
                            <div class="position-abs text-align-center slide5-choice">
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
                                            <div class="slide5-location font-weight-500">Da Nang / Nha Trang / Phu Quoc</div>
                                            <div class="font-weight-200 mb-font-14 l-font-16">We operate  lessons at 3 locations.</div>
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
                                            <div class="slide5-location font-weight-500">From 78$ / pax</div>
                                            <div class="font-weight-200 mb-font-14 l-font-16">Per person, included all taxes and equipments.</div>
                                        </div>
                                    </div>
                                    <a href="/bookings" class="uppercase">More details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="position-rel over-flow-hidden">
                        <div class="image mb-pd-top-140 l-pd-top-100" style="background-image: url(/assets/images/slide5_pic2.jpg)"></div>
                        <div class="position-abs slide5-dark-bg">
                            <div class="position-abs text-align-center slide5-choice">
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
                                            <div class="slide5-location font-weight-500">Da Nang / Nha Trang / Phu Quoc</div>
                                            <div class="font-weight-200 mb-font-14 l-font-16">We operate  lessons at 3 locations.</div>
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
                                            <div class="slide5-location font-weight-500">From 185$ / pax</div>
                                            <div class="font-weight-200 mb-font-14 l-font-16">Per person, included all taxes and equipments.</div>
                                        </div>
                                    </div>
                                    <a href="/courses" class="uppercase">More details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="position-abs slides-bg-wrapper bg-wrapper-slide5 z-index-1">
                <div class="uppercase">
                    <div class="l-scroll background-text" data-rate="0.2">Services</div>
                </div>
                <div class="red dot slide5-dot1"></div>
                <div class="blue dot slide5-dot2"></div>
            </div>
        </div>
    </section>

    <section class="pd-top-bttm-200">
        <div class="container position-rel">
            <div class="row row1-slide6 z-index-111">
                <h2 class="uppercase font-weight-200 text-align-center">Our instructors will accompany you</h2>
                <div class="uppercase gradient-text text-align-center mb-colorful-text l-colorful-text">"Move your mouse pointer to their image"</div>
                <div class="instructors grid-block">${instructors()}</div>
            </div>
            <div class="position-abs slides-bg-wrapper bg-wrapper-slide6 z-index-1">
                <div class="uppercase">
                    <div class="l-scroll background-text" data-rate="0.2">Staff</div>
                </div>
                <div class="red dot slide6-dot1"></div>
            </div>
        </div>
    </section>
    `;

  // active => white
  //   let homeText = document.querySelector(".home");
  //   homeText.classList.add("white-text");

  // fishes render
  template.querySelector(".fishes-wrapper").appendChild(await fishes(fish));

  await parallax(template);

  return template;
}
