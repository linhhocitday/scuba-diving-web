import { apiUrl, endPoint, fetchData, removeLoader } from "../helper.js";

import { renderClientCart } from "../components/header.js";

//
// get cart data
//
let clientCart = {};

if (localStorage.getItem("cart")) {
  clientCart = JSON.parse(localStorage.getItem("cart"));
}

//
// get client information
//
let clientInfor = {};

if (localStorage.getItem("client")) {
  clientInfor = JSON.parse(localStorage.getItem("client"));
}

//
// set client information into localStorage
//
function setClientInfor(p) {
  let firstName = formatName(p.querySelector("#first-name").value);
  let lastName = formatName(p.querySelector("#last-name").value);

  let email = p.querySelector("#email").value;

  let number = p.querySelector("#number").value;

  let client = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    number: number,
  };

  let pathname = location.pathname;
  pathname = pathname.split("/")[2].replace("=", "-");
  let key = pathname;

  clientInfor[key] = client;

  console.log(clientInfor);

  localStorage.setItem("client", JSON.stringify(clientInfor));
}

//
// format name => Name
//
function formatName(name) {
  let n = name.split(" ");
  let nameArr = [];
  for (let i of n) {
    let firstLetter = i.slice(0, 1).toUpperCase();
    let restOfName = i.slice(1, i.length).toLowerCase();

    let formedName = firstLetter + restOfName;

    nameArr.push(formedName);
  }

  return nameArr.join(" ");
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

//
// render cart
//
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
        <div class="data-name uppercase">Destination:</div>
        <div class="data font-weight-600" id="${
          clientCart[pathname]["destination"]
        }"></div>
    </div>
    <div class="data-wrapper">
        <div class="data-name uppercase">Departure:</div>
        <div class="data font-weight-600">${await reverseDate(
          clientCart[pathname]["departure"]
        )}</div>
    </div>
    <div class="data-wrapper">
        <div class="data-name uppercase">Participants:</div>
        <div class="data font-weight-600">${
          clientCart[pathname]["participants"]
        }</div>
    </div>
    <div class="total-wrapper font-weight-200">Total: <b class="total-price"></b></div>
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
    <div class="default-price gradient-text">${formatter.format(
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
    let firstName = formatName(p.querySelector("#first-name").value);
    let firstNameAlert = p.querySelector(".first-name-alert");
    firstNameAlert.innerHTML = "";
    if (!firstName) {
      firstNameAlert.innerHTML = "*Your first name can not be blank";
    }

    let lastName = formatName(p.querySelector("#last-name").value);
    let lastNameAlert = p.querySelector(".last-name-alert");
    lastNameAlert.innerHTML = "";
    if (!lastName) {
      lastNameAlert.innerHTML = "*Your last name can not be blank";
    }

    let email = p.querySelector("#email").value;
    let emailAlert = p.querySelector(".email-alert");
    emailAlert.innerHTML = "";
    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(validEmail)) {
      emailAlert.innerHTML = "*Invalid email address";
    }

    let number = p.querySelector("#number").value;
    let numberAlert = p.querySelector(".number-alert");
    numberAlert.innerHTML = "";
    if (!number) {
      numberAlert.innerHTML = "*Invalid phone number";
    }

    if (!firstName || !lastName || !email.match(validEmail) || !number) {
      return false;
    }

    setClientInfor(p);

    for (let [k, v] of Object.entries(clientCart)) {
      delete clientCart[k];

      localStorage.setItem("cart", JSON.stringify(clientCart));

      if (!Object.keys(clientCart).length) {
        localStorage.removeItem("cart", clientCart);
      }

      renderClientCart();
    }

    for (let [k, v] of Object.entries(clientInfor)) {
      delete clientInfor[k];
      localStorage.setItem("client", JSON.stringify(clientInfor));

      if (!Object.keys(clientInfor).length) {
        localStorage.removeItem("client", clientInfor);
      }
    }

    let pathname = location.pathname;
    pathname = pathname.split("/")[2];
    location.href = `/thanks/${pathname}`;
  });
}

//
// change input active when press enter
//
async function changeActive(p) {
  let input = p.querySelectorAll("input");
  for (let i = 0; i < input.length - 1; i++) {
    input[i].addEventListener("keyup", (e) => {
      if (e.keyCode == 13 || e.keyCode == 40) {
        setClientInfor(p);
        input[i + 1].focus();
      }
    });
  }

  input[input.length - 1].addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
      p.querySelector(".form-submit-btn").click();
    }
  });

  for (let i = 1; i < input.length; i++) {
    input[i].addEventListener("keyup", (e) => {
      if (e.keyCode == 38) {
        setClientInfor(p);
        input[i - 1].focus();
      }
    });
  }

  for (let i of input) {
    i.addEventListener("mouseup", () => {
      setClientInfor(p);
    });
  }
}

//
// render client information if localStorage exist
//
async function renderClientInfor(p) {
  let { template } = p;

  let pathname = location.pathname;
  pathname = pathname.split("/")[2].replace("=", "-");
  let key = pathname;

  let firstName = template.querySelector("#first-name");
  firstName.value = clientInfor[key]["firstName"];

  let lastName = template.querySelector("#last-name");
  lastName.value = clientInfor[key]["lastName"];

  let email = template.querySelector("#email");
  email.value = clientInfor[key]["email"];

  let number = template.querySelector("#number");
  number.value = clientInfor[key]["number"];
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
                        <i class="alert-text position-abs email-alert email-alert"></i>
                    </div>
                    <div class="infor-wrapper position-rel">
                        <label for="number" class="uppercase">Your phone number</label>
                        <input type="tel" id="number" placeholder="0912345678" maxlength="16" oninput="this.value = this.value.replace(/[^0-9.]/g, '')" />
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

  await changeActive(template);

  let pathname = location.pathname;
  pathname = pathname.split("/")[2].replace("=", "-");
  let key = pathname;
  if (clientInfor[key]) {
    await renderClientInfor({
      template: template,
    });
  }

  return template;
}
