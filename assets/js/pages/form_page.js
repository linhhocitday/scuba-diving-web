import { apiUrl, endPoint, fetchData, removeLoader } from "../helper.js";

//
// get cart data
//
let clientCart = {};

if (localStorage.getItem("cart")) {
  clientCart = JSON.parse(localStorage.getItem("cart"));
}

//
// reverse date
//
async function reverseDate(date) {
  let newDate = date.split("-").reverse().join("-");
  return newDate;
}

//
// change number => money (usd)
//
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

async function getId(p) {
  let pathname = location.pathname;
  pathname = pathname.split("/")[2].replace("=", "-");
  console.log(clientCart[pathname]);

  let cartId = pathname.split("-")[1];
  let service = pathname.split("-")[0];

  let cartInfor = p.querySelector(".cart-infor");
  cartInfor.innerHTML = `
    <div class="service-infor"></div>
    <div class="data-wrapper">
        <div class="data-name uppercase font-weight-600">Destination:</div>
        <div id="${clientCart[pathname]["destination"]}"></div>
    </div>
    <div class="data-wrapper">
        <div class="data-name uppercase font-weight-600">Departure:</div>
        <div>${await reverseDate(clientCart[pathname]["departure"])}</div>
    </div>
    <div class="data-wrapper">
        <div class="data-name uppercase font-weight-600">Participants:</div>
        <div>${clientCart[pathname]["participants"]}</div>
    </div>
    <div class="total-wrapper">Total: <b class="total-price"></b></div>
    `;

  let destination = cartInfor.querySelector(
    `#${clientCart[pathname]["destination"]}`
  );

  if (clientCart[pathname]["destination"] == "dn") {
    destination.innerHTML = "Da Nang";
  }
  if (clientCart[pathname]["destination"] == "nt") {
    destination.innerHTML = "Nha Trang";
  }
  if (clientCart[pathname]["destination"] == "pq") {
    destination.innerHTML = "Phu Quoc";
  }

  let getPrice = {
    apiUrl: apiUrl,
    endPoint: endPoint.product + "/" + cartId,
    method: "GET",
    async callback(p) {
      await removeLoader();
      await renderPrice(p);
    },
  };

  async function renderPrice(p) {
    let price = p[`${service}Price`];
    cartInfor.querySelector(".total-price").innerHTML = formatter.format(
      price * clientCart[pathname]["participants"]
    );

    let serviceInfor = cartInfor.querySelector(".service-infor");
    serviceInfor.innerHTML = `
    <h2 class="uppercase">${p[service]}</h2>
    <div class="default-price">${formatter.format(
      p[`${service}Price`]
    )} / pax</div>
    `;
  }

  await fetchData(getPrice);
}

//
// add submit btn function
//
async function submitBtn(p) {
  p.querySelector(".form-submit-btn").addEventListener("click", () => {
    let firstName = p.querySelector("#first-name").value;
    let lastName = p.querySelector("#last-name").value;
    let email = p.querySelector("#email").value;
    let number = p.querySelector("#number").value;
    console.log(number);
  });
}

//
// main function
//
export async function renderForm(p) {
  let template = document.createElement("div");
  template.innerHTML = `
    <section class="form-slide1">
        <div class="container  position-rel">
            <div class="row grid-block z-index-111">
                <div class="white-bg-8 blur-background-wrapper right-col l-order-1 mb-order-2">
                    <h1 class="uppercase font-weight-200">Let's fill in this form to complete the transaction</h1>
                    <div class="uppercase gradient-text mb-colorful-text l-colorful-text">Please enter your details</div>
                    <div class="l-grid-block infor-wrapper">
                        <div class="position-rel">
                            <label for="first-name" class="uppercase">First name</label>
                            <input type="text" id="first-name" placeholder="Michael" />
                            <i class="alert-text position-abs first-name-alert"></i>
                        </div>
                        <div class="position-rel">
                            <label for="last-name" class="uppercase">Last name</label>
                            <input type="text" id="last-name" placeholder="Jackson" />
                            <i class="alert-text position-abs last-name-alert"></i>
                        </div>
                    </div>
                    <div class="infor-wrapper position-rel">
                        <label for="email" class="uppercase">Your email</label>
                        <input type="text" id="email" placeholder="jackson@gmail.com" />
                        <i class="alert-text position-abs email-alert"></i>
                    </div>
                    <div class="infor-wrapper position-rel">
                        <label for="number" class="uppercase">Your phone number</label>
                        <input type="tel" id="number" placeholder="0912345678" />
                        <i class="alert-text position-abs number-alert"></i>
                    </div>
                    <a class="form-submit-btn text-align-center">Submit</a>
                </div>
                <div class="white-bg-8 blur-background-wrapper left-col l-order-2 mb-order-1">
                    <div class="cart-infor"></div>
                </div>
            </div>
            <div class="position-abs slides-bg-wrapper form-slide1-bg z-index-1">
                <div class="blue dot form-slide1-dot1"></div>
                <div class="red dot form-slide1-dot2"></div>
            </div>
        </div>
    </section>
    `;

  await getId(template);

  await submitBtn(template);

  return template;
}
