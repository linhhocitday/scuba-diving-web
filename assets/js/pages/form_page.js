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
    <div>
        <div>Destination:</div>
        <div id="${clientCart[pathname]["destination"]}"></div>
    </div>
    <div>
        <div>Departure:</div>
        <div>${await reverseDate(clientCart[pathname]["departure"])}</div>
    </div>
    <div>
        <div>Participants:</div>
        <div>${clientCart[pathname]["participants"]}</div>
    </div>
    <div>Total: <b class="total-price"></b></div>
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
  }

  await fetchData(getPrice);
}

//
// main function
//
export async function renderForm(p) {
  let template = document.createElement("div");
  template.innerHTML = `
    <section class="form-slide1">
        <div class="container">
            <div class="row l-grid-block">
            <div class="white-bg-8 blur-background-wrapper">
                <h1 class="uppercase">Fill in this form to complete the transaction</h1>
            </div>
            <div class="white-bg-8 blur-background-wrapper">
                <div class="cart-infor"></div>
            </div>
                
            </div>
        </div>
    </section>
    `;

  await getId(template);

  return template;
}
