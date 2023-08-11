async function backBtn(p) {
  let pathname = location.pathname.split("/")[2].split("=")[0];
  console.log(`${pathname}s`);

  let btn = p.querySelector(".back-btn");
  btn.innerHTML = `<i class="fa-solid fa-arrow-left"></i><div class="inline-block">Back to ${pathname}<div>`;

  btn.addEventListener("click", () => {
    location.href = `/${pathname}s`;
  });
}

export async function renderThanks(p) {
  let template = document.createElement("div");
  template.innerHTML = `
    <section class="thanks-slide1">
        <div class="container position-rel">
            <div class="z-index-111">
                <div class="back-btn-wrapper">
                    <a class="back-btn inline-block"></a>
                </div>
                <div class="row text-align-center">
                    <h1 class="uppercase font-weight-900">Thank you</h1>
                    <div class="gradient-text l-colorful-text mb-colorful-text">Your reservation is confirmed.</div>
                </div>
            </div>
            <div class="position-abs slides-bg-wrapper thanks-slide1-bg z-index-1">
                <div class="red dot thanks-slide1-dot1"></div>
                <div class="blue dot thanks-slide1-dot2"></div>
          </div>
        </div>
    </section>
        `;

  backBtn(template);

  return template;
}
