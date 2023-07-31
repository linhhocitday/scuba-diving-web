import { apiUrl, endPoint, fetchData, removeLoader } from "../helper.js";

let clientCart = {};

if (localStorage.getItem("cart")) {
  clientCart = JSON.parse(localStorage.getItem("cart"));
}

//
// render client cart
//
async function renderClientCart(p) {
  let getService = {
    apiUrl: apiUrl,
    endPoint: endPoint.product,
    method: "GET",
    async callback(p) {
      await removeLoader();
      await getCart(p);
    },
  };

  async function getCart(p) {
    let hiddenCart = document.querySelector(".hidden-cart");
    hiddenCart.innerHTML = "";

    let noticeDot = document.querySelector(".notice-dot-wrapper");

    if (!localStorage.getItem("cart")) {
      noticeDot.style.display = "none";

      let notice = document.createElement("i");
      notice.classList.add("text-align-center", "block");
      notice.innerHTML = "You didn't book any of our services";
      hiddenCart.appendChild(notice);
    } else {
      noticeDot.style.display = "block";

      let cartAmount = document.querySelector(".cart-amount");
      cartAmount.innerHTML = Object.keys(clientCart).length;

      for (let [k, v] of Object.entries(clientCart)) {
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item", "position-rel");

        cartItem.innerHTML = `
          <a class="item-link block" href="/form/${k.split("-")[0]}=${
          k.split("-")[1]
        }">
              <div class="item-infor-wrapper">
                  <h3>${p[k.split("-")[1] - 1][k.split("-")[0]]}</h3>
                  <div class="cart-item-infor">Destination: <b class="${
                    v["destination"]
                  }"></b></div>
                  <div class="cart-item-infor">Departure: <b>${
                    v["departure"]
                  }</b></div>
                  <div class="cart-item-infor">Participants: <b>${
                    v["participants"]
                  }</b></div>
              </div>
          </a>
          <div class="trash-can-wrapper position-abs">
              <svg 
              class="trash-can"
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="w-6 h-6">
                <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
          </div>
          `;

        let place = cartItem.querySelector(`.${v["destination"]}`);

        if (v["destination"] == "dn") {
          place.innerHTML = "Da Nang";
        }

        if (v["destination"] == "nt") {
          place.innerHTML = "Nha Trang";
        }

        if (v["destination"] == "pq") {
          place.innerHTML = "Phu Quoc";
        }

        cartItem.querySelector(".trash-can").addEventListener("click", () => {
          if (
            location.pathname == `/form/${k.split("-")[0]}=${k.split("-")[1]}`
          ) {
            alert(
              "You can not delete an item while finishing the transaction."
            );
            return false;
          }

          if (
            confirm(
              `Are you sure you want to delete ${
                p[k.split("-")[1] - 1][k.split("-")[0]]
              } in your cart?`
            ) == true
          ) {
            delete clientCart[k];

            localStorage.setItem("cart", JSON.stringify(clientCart));

            if (!Object.keys(clientCart).length) {
              localStorage.removeItem("cart", clientCart);
            }

            renderClientCart();
          }
        });

        hiddenCart.appendChild(cartItem);
      }
    }
  }

  await fetchData(getService);
}

//
// cart icon function
//
async function cartIcon(p) {
  let cartIcon = p.querySelector(".cart-icon");
  cartIcon.addEventListener("click", () => {
    console.log(clientCart);
  });
}

//
// hamburger function
//
async function hamburger(p) {
  let { template, btn, hiddenList, activeClass } = p;

  let hamburger = template.querySelector(btn);
  let list = template.querySelector(hiddenList);
  let bg = template.querySelector(".header-res-bg");
  let body = document.querySelector("body");

  hamburger.addEventListener("click", () => {
    list.classList.add(activeClass);
    bg.classList.add("dark-bg-responsive");
    body.style.overflow = "hidden";
  });

  bg.addEventListener("click", () => {
    list.classList.remove(activeClass);
    bg.classList.remove("dark-bg-responsive");
    body.style.overflow = "auto";
  });
}

export async function renderHeader() {
  let template = document.createElement("header");
  template.classList.add("header", "position-rel");
  template.innerHTML = `
    <div class="header-div white-bg-8 blur-background-wrapper">
        <div class="container">
            <div class=" header-wrapper flex-block align-center">
                <a class="block logo-a-tag" href="/">
                    <div class="logo-wrapper flex-block align-center">
                        <img class="logo" src="/assets/images/logo.png" alt="" />
                        <p class="uppercase">Blur</p>
                    </div>
                </a>
                <div class="flex-block align-center position-rel">
                    <div class="header-list-wrapper">
                        <div class="header-right-col flex-block align-center flex-row flex-column">
                          <!-- p<div class="item uppercase"><a class="home white-color-60" href="/">Home</a></div> -->
                            <div class="item uppercase"><a class="about white-color-60" href="/about">About</a></div>
                            <div class="item uppercase"><a class="book white-color-60" href="/bookings">Booking</a></div>
                            <div class="item uppercase"><a class="courses white-color-60" href="/courses">Courses</a></div>
                        </div>
                    </div>
                    <div class="white-color-60 cart-icon position-rel">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        class="w-6 h-6">
                            <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <div class="notice-dot-wrapper position-abs">
                            <div class="notice-dot position-rel">
                                <div class="cart-amount position-abs"></div>
                            </div>
                        </div>
                    </div>
                    <div class="hamburger white-color-60">
                      <i class="fa-solid fa-bars"></i>
                    </div>
                    <div class="header-res-bg"></div>
                    <div class="hidden-cart"></div>
                </div>
            </div>
        </div>
    </div>
    `;

  renderClientCart();

  await cartIcon(template);

  await hamburger({
    template: template,
    btn: ".hamburger",
    hiddenList: ".header-list-wrapper",
    activeClass: "active",
  });

  await hamburger({
    template: template,
    btn: ".cart-icon",
    hiddenList: ".hidden-cart",
    activeClass: "hidden-cart-active",
  });

  return template;
}
