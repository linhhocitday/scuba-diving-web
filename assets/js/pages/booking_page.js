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

export async function renderBooking() {
    let template = document.createElement('div');
    template.classList.add('booking-page');
    template.innerHTML = `
    <div class="container">
        <h1>Booking page</h1>
        <div class="instructors">${instructors()}</div>
    </div>
    `;

    let bookingText = document.querySelector('.booking');
    bookingText.classList.add('white-text');

    return template;
}