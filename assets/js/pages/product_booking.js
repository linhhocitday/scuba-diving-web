import { 
    apiUrl,
    endPoint,
    fetchData,
    removeLoader,
} from "../helper.js";

async function bookingChoices(p) {
    let pathname = location.pathname;
    pathname = pathname.split('/')[2].replace('detail=', '');
    let getBookingProduct = {
        apiUrl: apiUrl,
        endPoint: endPoint.diving + '/' + pathname,
        method: 'GET',
        async callback(p) {
            await removeLoader();
            await renderBookingProduct(p);
        }
    }

    async function renderBookingProduct(p) {
        document.querySelector('.booking-product').innerHTML = p['name'];
    }
    await fetchData(getBookingProduct);
}


export async function renderProductBooking(p) {
    console.log(location.pathname);
    let template = document.createElement('div');
    template.innerHTML = `<h1 class="booking-product">${bookingChoices()}</h1>`
    return template
}