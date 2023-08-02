import { apiUrl, endPoint, fetchData, removeLoader } from "../helper.js";

let clientCart = {};

if (localStorage.getItem("cart")) {
  clientCart = JSON.parse(localStorage.getItem("cart"));
}

async function setLocalStorage(p) {
  let destination = p.querySelector("input:checked").id;
  let departure = p.querySelector("#departure").value;
  let participants = p.querySelector(".people-number").textContent;

  let choseItem = {
    destination: destination,
    departure: departure,
    participants: participants,
  };

  let pathname = location.pathname;
  pathname = pathname.split("/")[2].replace("detail=", "");

  let key = `course-${pathname}`;

  clientCart[key] = choseItem;

  console.log(clientCart);

  localStorage.setItem("cart", JSON.stringify(clientCart));
}

//
// render clientCart
//
async function renderClientCart(p) {
  let { clientCart, template } = p;
  console.log(clientCart);

  let pathname = location.pathname;
  pathname = pathname.split("/")[2].replace("detail=", "");
  let key = `course-${pathname}`;

  let checkedInput = template.querySelector(
    `input#${clientCart[key]["destination"]}`
  );
  checkedInput.checked = "checked";
  template.querySelector(".checked-dot").classList.remove("checked-dot");
  template
    .querySelector(`.${clientCart[key]["destination"]}`)
    .classList.add("checked-dot");

  let departure = template.querySelector("#departure");
  departure.value = clientCart[key]["departure"];

  let participants = template.querySelector(".people-number");
  participants.innerHTML = clientCart[key]["participants"];
}

//
// change number => money (usd)
//
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

//
// render topic title
//
async function courseChoices(p) {
  let pathname = location.pathname;
  pathname = pathname.split("/")[2].replace("detail=", "");
  let getCourseProduct = {
    apiUrl: apiUrl,
    endPoint: endPoint.product + "/" + pathname,
    method: "GET",
    async callback(p) {
      await removeLoader();
      await renderCourseDetails(p);
    },
  };

  async function renderCourseDetails(p) {
    let product = document.querySelector(".course-product");

    product.innerHTML = `
        <h1 class="product-name uppercase font-weight-600">${p["course"]}</h1>
        <p class="product-price uppercase gradient-text">${formatter.format(
          p["coursePrice"]
        )} / pax</p>
        <p class="product-description small-text">${p["courseDescription"]}</p>
        `;

    let pathname = location.pathname;
    pathname = pathname.split("/")[2].replace("detail=", "");
    let key = `course-${pathname}`;

    let total = document.querySelector("#total-price");
    let price = formatter.format(p["coursePrice"]);
    if (clientCart[key])
      price = formatter.format(
        p["coursePrice"] * Number(clientCart[key]["participants"])
      );
    total.innerHTML = price;

    document.querySelector(".decrease").addEventListener("click", () => {
      total.innerHTML = formatter.format(
        p["coursePrice"] * Number(clientCart[key]["participants"])
      );
    });

    document.querySelector(".increase").addEventListener("click", () => {
      total.innerHTML = formatter.format(
        p["coursePrice"] * Number(clientCart[key]["participants"])
      );
    });
  }
  await fetchData(getCourseProduct);
}

//
// custom radio input
//
async function checkedDestination(p) {
  let input = p.querySelectorAll(".destination-input");
  for (let i of input) {
    i.addEventListener("click", () => {
      p.querySelector(".checked-dot").classList.remove("checked-dot");
      p.querySelector(`.${i.id}`).classList.add("checked-dot");
      setLocalStorage(p);
    });
  }
}

//
// limit date input, set default date, get and save date data
//
async function limitDate(p) {
  let departure = p.querySelector("#departure");

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) month = "0" + month;
  let day = date.getDate();
  if (day < 10) day = "0" + day;

  departure.min = `${year}-${month}-${day}`;
  departure.value = `${year}-${month}-${day}`;

  departure.addEventListener("change", () => {
    setLocalStorage(p);
  });
}

//
// add function for minus and plus button
//
async function changeNumberBtn(p) {
  let participants = p.querySelector(".people-number");

  let pathname = location.pathname;
  pathname = pathname.split("/")[2].replace("detail=", "");
  let key = `course-${pathname}`;

  let number = 1;
  if (clientCart[key]) number = Number(clientCart[key]["participants"]);
  participants.innerHTML = number;

  p.querySelector(".decrease").addEventListener("click", () => {
    if (number == 1) {
      return false;
    }
    number -= 1;
    participants.innerHTML = number;

    setLocalStorage(p);
  });

  p.querySelector(".increase").addEventListener("click", () => {
    number += 1;
    participants.innerHTML = number;

    setLocalStorage(p);
  });
}

//
// get form information
//
async function inputValue(p) {
  let btn = p.querySelector(".product-booking-btn");
  btn.addEventListener("click", () => {
    let departure = p.querySelector("#departure").value;

    let timeAlert = p.querySelector(".departure-alert");
    timeAlert.innerHTML = "";
    if (!departure) {
      timeAlert.innerHTML = "*Time must be available";
      return false;
    }

    setLocalStorage(p);

    let pathname = location.pathname;
    pathname = pathname.split("/")[2].replace("detail=", "");
    location.href = `/form/course=${pathname}`;
  });
}

//
// main function
//
export async function renderProductCourse(p) {
  let template = document.createElement("div");
  template.innerHTML = `
    <section class="product-slide1">
    <div class="container position-rel">
        <div class="row z-index-111">
            <div class="course-product text-align-center"></div>
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
            <div class="product-input-wrapper block l-flex-block">
                <div class="product-destination-choices mb-mg">
                    <div class="uppercase input-label">Destination:</div>
                    <div class="destination-choices">
                        <div class="flex-block destination-choice-wrapper">
                            <input type="radio" id="dn" name="destination" checked="checked" class="position-abs destination-input" />
                            <label for="dn" class="custom-checkbox position-rel block dn checked-dot"></label>
                            <label for="dn" class="destination-choice-text">Da Nang</label>
                        </div>
                        <div class="flex-block destination-choice-wrapper">
                            <input type="radio" id="nt" name="destination" class="position-abs destination-input" />
                            <label for="nt" class="custom-checkbox position-rel block nt"></label>
                            <label for="nt" class="destination-choice-text">Nha Trang</label>
                        </div>
                        <div class="flex-block destination-choice-wrapper">
                            <input type="radio" id="pq" name="destination" class="position-abs destination-input" />
                            <label for="pq" class="custom-checkbox position-rel block pq"></label>
                            <label for="pq" class="destination-choice-text">Phu Quoc</label>
                        </div>
                    </div>
                </div>
                <div class="product-departure-choices mb-mg">
                    <label for="departure" class="uppercase block input-label">Departure:</label>
                    <input type="date" id="departure" class="product-input" />
                    <p><i class="departure-alert alert-text"></i></p>
                </div>
                <div class="mb-mg">
                    <div for="participants" class="uppercase block input-label">No of participants:</div>
                    <div id="participants" class="product-input flex-block flex-align-justify no-pd">
                        <div class="decrease amount-btn">-</div>
                        <div class="people-number"></div>
                        <div class="increase amount-btn">+</div>
                    </div>
                    <p><i class="participants-alert alert-text"></i></p>
                </div>
                <div>
                    <div class="uppercase input-label mb-font">Total: <strong id="total-price"></strong></div>
                    <a class="uppercase product-booking-btn text-align-center">Book now</a>
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

  courseChoices();

  await limitDate(template);

  await checkedDestination(template);

  await changeNumberBtn(template);

  await inputValue(template);

  let pathname = location.pathname;
  pathname = pathname.split("/")[2].replace("detail=", "");
  let key = `course-${pathname}`;
  if (clientCart[key]) {
    await renderClientCart({
      clientCart: clientCart,
      template: template,
    });
  }

  return template;
}
