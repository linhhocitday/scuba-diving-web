import { 
    apiUrl,
    endPoint,
    fetchData,
    removeLoader,
} from "../helper.js";

import { 
    booking 
} from "../fake_data.js";

//
// change number => money (usd)
//
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

//
// render topic title
//
async function bookingChoices(p) {
    let pathname = location.pathname;
    pathname = pathname.split('/')[2].replace('detail=', '');
    let getBookingProduct = {
        apiUrl: apiUrl,
        endPoint: endPoint.diving + '/' + pathname,
        method: 'GET',
        async callback(p) {
            await removeLoader();
            await renderBookingDetails(p);
        }
    }

    async function renderBookingDetails(p) {
        let product = document.querySelector('.booking-product');

        product.innerHTML = `
        <h1 class="product-name uppercase font-weight-600">${booking[p['id'] - 1]['choice']}</h1>
        <p class="product-price uppercase gradient-text">${formatter.format(booking[p['id'] - 1]['price'])} / pax</p>
        <p class="product-description small-text">${booking[p['id'] - 1]['description']}</p>
        `;
    }
    await fetchData(getBookingProduct);
}

//
// custom radio input
//
async function checkedDestination(p) {
    let input = p.querySelectorAll('.destination-input');
    for (let i of input) {
        i.addEventListener('click', () => {
            p.querySelector('.checked-dot').classList.remove('checked-dot');
            p.querySelector(`.${i.id}`).classList.add('checked-dot');
        });
    }
}

//
// limit date input 
//
async function limitDate(p) {
    let departure = p.querySelector('#departure');

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) month = '0'+ month;
    let day = date.getDate() + 1;
    if (day < 10) day = '0'+ day;


    departure.min = `${year}-${month}-${day}`;
}

//
// add function for minus and plus button
// 
async function changeNumber(p) {
    let {type, number} = p;

    if (type == 'decrease') {
        number = number - 1;
    }

    if (type == 'increase') {
        number += 1;
    }
}

async function changeNumberBtn(p) {
    let participants = p.querySelector('.people-number');

    let number = 1;
    participants.innerHTML = number;

    p.querySelector('.decrease').addEventListener('click', () => {
        changeNumber({
            type: 'decrease',
            number: number
        });
        participants.innerHTML = number;
    });
}

//
// calculate total money
//
async function inputValue(p) {
    let btn = p.querySelector('.product-booking-btn');
    btn.addEventListener('click', () => {
        let destination = p.querySelector('input:checked').id;
        let departure = p.querySelector('#departure').value;
        let participants = p.querySelector('.people-number');
        let total = p.querySelector('#total-price');
        
        if (!departure) {
            p.querySelector('.departure-alert').innerHTML = '*Time must be in the future';
            return false
        }

        console.log(`${destination}-${departure}-${participants}`);
    });
}

//
// main function
//
export async function renderProductBooking(p) {
    let template = document.createElement('div');
    template.innerHTML = `
    <section class="product-slide1">
        <div class="container position-rel">
            <div class="row z-index-111">
                <div class="booking-product text-align-center">${bookingChoices()}</div>
            </div>
            <div class="position-abs slides-bg-wrapper product-slide1-bg z-index-1">
                <div class="uppercase background-text">Detail</div>
                <div class="blue dot product-slide1-dot1"></div>
                <div class="red dot product-slide1-dot2"></div>
            </div>
        </div>
    </section>

    <section class="product-slide2 position-rel">
        <div class="container z-index-111">
            <div class="row product-slide2-row1">
                <h2 class="uppercase font-weight-200 text-align-center">We need some basic information</h2>
                <div class="uppercase text-align-center gradient-text">To make a transaction</div>
                <div class="product-input-wrapper flex-block">
                    <div class="product-destination-choices">
                        <div class="uppercase input-label">Destination:</div>
                        <div class="destination-choices">
                            <div class="flex-block destination-choice-wrapper">
                                <input type="radio" id="dn" name="destination" checked="checked" class="position-abs destination-input">
                                <label for="dn" class="custom-checkbox position-rel block dn checked-dot"></label>
                                <label for="dn" class="destination-choice-text">Da Nang</label>
                            </div>
                            <div class="flex-block destination-choice-wrapper">
                                <input type="radio" id="nt" name="destination" class="position-abs destination-input">
                                <label for="nt" class="custom-checkbox position-rel block nt"></label>
                                <label for="nt" class="destination-choice-text">Nha Trang</label>
                            </div>
                            <div class="flex-block destination-choice-wrapper">
                                <input type="radio" id="pq" name="destination" class="position-abs destination-input">
                                <label for="pq" class="custom-checkbox position-rel block pq"></label>
                                <label for="pq" class="destination-choice-text">Phu Quoc</label>
                            </div>
                        </div>
                    </div>
                    <div class="product-departure-choices">
                        <label for="departure" class="uppercase block input-label">Departure:</label>
                        <input type="date" id="departure" class="product-input">
                        <p><i class="departure-alert alert-text"></i></p>
                    </div>
                    <div>
                        <div for="participants" class="uppercase block input-label">No of participants:</div>
                        <!--<input type="number" id="participants" class="product-input" min="1" value="1">-->
                        <div id="participants" class="product-input flex-block flex-align-justify no-pd">
                            <div class="decrease amount-btn">-</div>
                            <div class="people-number"></div>
                            <div class="increase amount-btn">+</div>
                        </div>
                        <p><i class="participants-alert alert-text"></i></p>
                    </div>
                    <div>
                        <div class="uppercase input-label">Total: <strong id="total-price"></strong></div>
                        <a href="#" class="uppercase product-booking-btn">Book now</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="position-abs slides-bg-wrapper product-slide2-bg">
            <div class="product-jellyfish-wrapper">
                <div class="image pd-top-1-2" style="background-image: url(/assets/images/jelly_fish.png)"></div>
            </div>
        </div>
    </section>
    `;

    await limitDate(template);

    await checkedDestination(template);

    await changeNumberBtn(template)

    await inputValue(template);

    return template;
}