import { changeColor } from "./components/change_color.js";
import { loading } from "./components/loading_scene.js";
import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";

let body = document.querySelector("body");

const main = document.querySelector("main");
const script = document.querySelector("script");

async function initApp() {
  main.appendChild(loading.logo());

  body.insertBefore(await renderHeader(), main);
  body.insertBefore(await renderFooter(), script);

  if (location.pathname == "/") {
    let page = await import("./pages/home_page.js");
    let renderHome = await page.renderHome();
    main.appendChild(await renderHome);
  }
  if (location.pathname.includes("about")) {
    let page = await import("./pages/about_page.js");
    let renderAbout = await page.renderAbout();
    main.appendChild(await renderAbout);
  }
  if (location.pathname.includes("contact")) {
    let page = await import("./pages/contact_page.js");
    let renderContact = await page.renderContact();
    main.appendChild(await renderContact);
  }
  if (location.pathname.includes("bookings")) {
    let page = await import("./pages/booking_page.js");
    let renderBooking = await page.renderBooking();
    main.appendChild(await renderBooking);
  }
  if (location.pathname.includes("courses")) {
    let page = await import("./pages/course_page.js");
    let renderCourse = await page.renderCourse();
    main.appendChild(await renderCourse);
  }
  if (location.pathname.includes("go-diving/detail")) {
    let page = await import("./pages/product_booking.js");
    let renderProductBooking = await page.renderProductBooking();
    main.appendChild(await renderProductBooking);
  }
  if (location.pathname.includes("learn-diving/detail")) {
    let page = await import("./pages/product_course.js");
    let renderProductCourse = await page.renderProductCourse();
    main.appendChild(await renderProductCourse);
  }
  if (location.pathname.includes("form")) {
    let page = await import("./pages/form_page.js");
    let renderForm = await page.renderForm();
    main.appendChild(await renderForm);
  }
  if (location.pathname.includes("thanks")) {
    let page = await import("./pages/thanks_page.js");
    let renderThanks = await page.renderThanks();
    main.appendChild(await renderThanks);
  }

  // await changeColor();
}

initApp();
