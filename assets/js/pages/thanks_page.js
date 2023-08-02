async function backBtn(p) {
  let pathname = location.pathname.split("/")[2].split("=")[0];
  console.log(`${pathname}s`);

  let btn = p.querySelector(".back-btn");
  btn.innerHTML = `Back to ${pathname} page`;

  btn.addEventListener("click", () => {
    location.href = `/${pathname}s`;
  });
}

export async function renderThanks(p) {
  let template = document.createElement("div");
  template.innerHTML = `
    <section>
        <div class="container">
            <div class="row">
                <h1>Thank you!</h1>
                <div>Your reservation is confirmed</div>
                <a class="back-btn block"></a>
            </div>
        </div>
    </section>
        `;

  backBtn(template);

  return template;
}
