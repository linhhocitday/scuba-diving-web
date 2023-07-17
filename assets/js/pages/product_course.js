import { 
    apiUrl,
    endPoint,
    fetchData,
    removeLoader,
} from "../helper.js";

import { 
    course 
} from "../fake_data.js";

async function coursesChoices(p) {
    let pathname = location.pathname;
    pathname = pathname.split('/')[2].replace('detail=', '');
    let getCoursesProduct = {
        apiUrl: apiUrl,
        endPoint: endPoint.diving + '/' + pathname,
        method: 'GET',
        async callback(p) {
            await removeLoader();
            await renderCourseDetails(p);
        }
    }

    async function renderCourseDetails(p) {
        let h1 = document.querySelector('.course-product');
        for (let i = 0; i < course.length; i++) {
            h1.innerHTML = course[p['id'] - 1]['choice'];
        }
    }
    await fetchData(getCoursesProduct);
}


export async function renderProductCourse(p) {
    console.log(location.pathname);
    let template = document.createElement('div');
    template.innerHTML = `
    <section>
        <div class="container">
            <div class="row">
                <h1 class="course-product">${coursesChoices()}</h1>
            </div>
        </div>
    </section>
    `;
    return template;
}