import { 
    apiUrl,
    endPoint,
    fetchData,
    removeLoader,
} from "../helper.js";

import { 
    course 
} from "../fake_data.js";

//
// render course choices
//
async function courses(p) {
    let getCourses = {
        apiUrl: apiUrl,
        endPoint: endPoint.diving,
        method: 'GET',
        async callback(p) {
            await removeLoader();
            await renderCourseChoices(p);
        }
    }

    async function renderCourseChoices(p) {
        document.querySelector('.course-choices').innerHTML = '';
        for (let i = 0; i < 4; i++) {
            let {id} = p[i];

            let div = document.createElement('div');
            div.classList.add('course', `course-grid-img-${id}`, 'position-rel');
            
            div.innerHTML = `
            <div class="block image course-img" id="course-img-${i}"></div>
            <a href="/learn-diving/detail=${id}" class="gradient-bg course-gradient-bg position-abs">
                <div class="position-abs text-align-left">
                    <p class="uppercase course-hidden-text">Book now</p>
                    <h3 id="course-h3-${i}" class="uppercase"></h3>
                </div>
            </a>
            `;

            document.querySelector('.course-choices').appendChild(div);
        }

        for (let i = 0; i < course.length; i++) {
            let h3 = document.getElementById(`course-h3-${i}`);
            let imageWrapper = document.getElementById(`course-img-${i}`);

            imageWrapper.style.backgroundImage = `url(${course[i]['image']})`;

            h3.innerHTML = `${course[i]['choice']}`;
        }
    }

    await fetchData(getCourses);
}

//
// main function
//
export async function renderCourse() {
    let template = document.createElement('div');
    template.classList.add('course-page');
    template.innerHTML = `
    <section class="course-slide1">
        <div class="container position-rel">
            <div class="row course-slide1-row1 z-index-111">
                <div class="text-align-center">
                    <h2 class="uppercase inline-block font-weight-200 z-index-111">Courses</h2>
                    <div class="position-abs course-jelly-fish">
                        <div class="image pd-top-1-2" style="background-image: url(/assets/images/jelly_fish.png)"></div>
                    </div>
                </div>
            </div>
            <div class="position-abs slides-bg-wrapper course-slide1-bg z-index-1">
                <div class="uppercase position-abs scroll-text">Scroll</div>
                <div class="blue dot course-slide1-dot1"></div>
            </div>
        </div>
    </section>

    <section class="course-slide2">
        <div class="container position-rel">
            <div class="row text-align-center z-index-111">
                <h2 class="uppercase font-weight-200">Let’s see which one is suitable for you</h2>
                <p class="uppercase gradient-text inline-block">Choose one!</p>
                <div class="course-choices grid-block">${courses()}</div>
            </div>
            <div class="position-abs slides-bg-wrapper course-slide2-bg z-index-1">
            <div class="uppercase background-text">Choices</div>
                <div class="red dot course-slide2-dot1"></div>
                <div class="blue dot course-slide2-dot2"></div>
            </div>
        </div>
    </section>
    `;
    
    let courseText = document.querySelector('.courses');
    console.log(courseText)
    courseText.classList.add('white-text');

    return template;
}