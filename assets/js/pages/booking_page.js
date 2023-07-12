import { 
    apiUrl,
    endPoint,
    fetchData,
    removeLoader,
} from "../helper.js";

import { 
    booking 
} from "../fake_data.js";

async function bookingChoices(p) {
    let getBooking = {
        apiUrl: apiUrl,
        endPoint: endPoint.diving,
        method: 'GET',
        async callback(p) {
            await removeLoader();
            await renderBooking(p);
        }
    }

    async function renderBooking(p) {
        document.querySelector('.booking-choices').innerHTML = '';
        for (let i = 0; i < 4; i++) {
            let {id} = p[i];

            let div = document.createElement('div');
            div.classList.add('booking', `booking-grid-img-${id}`, 'position-rel');
            
            div.innerHTML = `
            <div class="block image booking-img" id="booking-img-${i}"></div>
            <a href="/go-diving/detail=${id}" class="gradient-bg booking-gradient-bg position-abs">
                <div class="position-abs text-align-left">
                    <p class="uppercase booking-hidden-text">Book now</p>
                    <h3 id="booking-h3-${i}" class="uppercase"></h3>
                </div>
            </a>
            `;

            document.querySelector('.booking-choices').appendChild(div);
        }

        for (let i = 0; i < booking.length; i++) {
            let h3 = document.getElementById(`booking-h3-${i}`);
            let imageWrapper = document.getElementById(`booking-img-${i}`);

            imageWrapper.style.backgroundImage = `url(${booking[i]['image']})`;

            h3.innerHTML = `${booking[i]['choice']}`;
        }
    }

    await fetchData(getBooking);
}

export async function renderBooking() {
    let template = document.createElement('div');
    template.classList.add('booking-page');
    template.innerHTML = `
    <section class="booking-slide1">
        <div class="container position-rel">
            <div class="row booking-slide1-row1 z-index-111">
                <div class="text-align-center">
                    <h2 class="uppercase inline-block font-weight-200 z-index-111">Booking</h2>
                    <div class="position-abs booking-jelly-fish">
                        <div class="image pd-top-1-2" style="background-image: url(/assets/images/jelly_fish.png)"></div>
                    </div>
                </div>
            </div>
            <div class="position-abs slides-bg-wrapper booking-slide1-bg z-index-1">
                <div class="blue dot booking-slide1-dot1"></div>
            </div>
        </div>
    </section>

    <section class="booking-slide2">
        <div class="container position-rel">
            <div class="row text-align-center z-index-111">
                <h2 class="uppercase font-weight-200">Let’s see which one is suitable for you</h2>
                <p class="uppercase gradient-text inline-block">Choose one!</p>
                <div class="booking-choices grid-block">${bookingChoices()}</div>
            </div>
            <div class="position-abs slides-bg-wrapper booking-slide2-bg z-index-1">
            <div class="uppercase background-text">Choices</div>
                <div class="red dot booking-slide2-dot1"></div>
                <div class="blue dot booking-slide2-dot2"></div>
            </div>
        </div>
    </section>
    `;

    let bookingText = document.querySelector('.booking');
    bookingText.classList.add('white-text');

    return template;
}