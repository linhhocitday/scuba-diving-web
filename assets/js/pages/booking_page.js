import { apiUrl, endPoint, fetchData, removeLoader } from "../helper.js";

import { parallax } from "../components/parallax.js";

//
// render booking choices
//
async function bookingChoices(p) {
  let getBooking = {
    apiUrl: apiUrl,
    endPoint: endPoint.product,
    method: "GET",
    async callback(p) {
      await removeLoader();
      await renderBookingChoices(p);
    },
  };

  async function renderBookingChoices(p) {
    document.querySelector(".booking-choices").innerHTML = "";
    for (let i = 0; i < p.length; i++) {
      let div = document.createElement("div");
      div.classList.add(
        "booking",
        `booking-grid-img-${p[i]["id"]}`,
        "position-rel"
      );

      div.innerHTML = `
            <div class="block image booking-img" style="background-image: url(${p[i]["bookingImage"]})"></div>
            <a href="/go-diving/detail=${p[i]["id"]}" class="gradient-bg booking-gradient-bg position-abs">
                <div class="position-abs text-align-left">
                    <p class="uppercase booking-hidden-text">Book now</p>
                    <h3 class="uppercase">${p[i]["booking"]}</h3>
                </div>
            </a>
            `;

      document.querySelector(".booking-choices").appendChild(div);
    }
  }

  await fetchData(getBooking);
}

//
// main function
//
export async function renderBooking() {
  let template = document.createElement("div");
  template.classList.add("booking-page");
  template.innerHTML = `
    <section class="booking-slide1">
        <div class="container position-rel">
            <div class="row booking-slide1-row1 z-index-111">
                <div class="text-align-center">
                    <h1 class="uppercase inline-block font-weight-200 z-index-111">Booking</h1>
                    <div class="position-abs booking-jelly-fish">
                        <div class="image pd-top-1-2 l-scroll" data-rate="0.4" style="background-image: url(/assets/images/jelly_fish.png)"></div>
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
                <h2 class="uppercase font-weight-200">Which one is suitable for you</h2>
                <p class="uppercase gradient-text inline-block">Choose one!</p>
                <div class="booking-choices grid-block">${bookingChoices()}</div>
            </div>
            <div class="position-abs slides-bg-wrapper booking-slide2-bg z-index-1">
                <div class="uppercase">
                    <div class="l-scroll background-text" data-rate="0.2">Choices</div>
                </div>
                <div class="red dot booking-slide2-dot1"></div>
                <div class="blue dot booking-slide2-dot2"></div>
            </div>
        </div>
    </section>
    `;

  let bookingText = document.querySelector(".book");
  bookingText.classList.add("white-text");

  await parallax(template);

  return template;
}
