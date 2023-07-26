import { 
    removeLoader,
} from "../helper.js";

let clientCart = {};

if (localStorage.getItem('cart')) {
    clientCart = JSON.parse(localStorage.getItem('cart'));
}

async function getId(p) {
    let pathname = location.pathname;
    pathname = pathname.split('/')[2].replace('=', '-')
    console.log(clientCart[pathname]);

    let cartInfor = p.querySelector('.cart-infor');
    cartInfor.innerHTML = `
    <div>
        <div>Destination:</div>
        <div>${clientCart[pathname]['destination']}</div>
    </div>
    <div>
        <div>Departure:</div>
        <div>${clientCart[pathname]['departure']}</div>
    </div>
    <div>
        <div>Participants:</div>
        <div>${clientCart[pathname]['participants']}</div>
    </div>
    `;
}

//
// main function
//
export async function renderForm(p) {
    let template = document.createElement('div');
    template.innerHTML = `
    <section>
        <div class="container">
            <div class="row">
                <h1>Hello</h1>
                <div class="cart-infor"></div>
            </div>
        </div>
    </section>
    `;

    getId(template)

    await removeLoader();

    return template;
}