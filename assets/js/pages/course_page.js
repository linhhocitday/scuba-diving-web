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
            let {name} = instructor;

            let div = document.createElement('div');
            div.classList.add('instructor');
            
            div.innerHTML = `
            <p>${name}</p>
            `;

            document.querySelector('.instructors').appendChild(div);
        }
    }

    await fetchData(getInstructor);
}

export async function renderCourse() {
    let template = document.createElement('div');
    template.classList.add('course-page');
    template.innerHTML = `
    <div class="container">
        <h1>Course page</h1>
        <div class="instructors">${instructors()}</div>
    </div>
    `;
    
    let courseText = document.querySelector('.course');
    courseText.classList.add('white-text');

    return template;
}