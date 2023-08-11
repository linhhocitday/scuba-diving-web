export async function dialog(p) {
  let { template, message, buttons, clientCart, k, renderClientCart } = p;

  // create dark background
  let darkBackground = document.createElement("div");
  darkBackground.classList.add("darkBackground");
  template.appendChild(darkBackground);

  // add dark background a function
  darkBackground.addEventListener("click", () => {
    dialog.remove();
    darkBackground.remove();
  });

  // create the dialog
  let dialog = document.createElement("div");
  dialog.classList.add("dialog");
  dialog.innerHTML = message + buttons;
  template.appendChild(dialog);

  // add function to cancel button
  if (dialog.querySelector(".cancel")) {
    let cancel = dialog.querySelector(".cancel");
    cancel.addEventListener("click", () => {
      dialog.remove();
      darkBackground.remove();
    });
  }

  // add function to agree button
  if (dialog.querySelector(".agree")) {
    let agree = dialog.querySelector(".agree");
    agree.addEventListener("click", () => {
      delete clientCart[k];
      renderClientCart;

      localStorage.setItem("cart", JSON.stringify(clientCart));

      if (!Object.keys(clientCart).length) {
        localStorage.removeItem("cart", clientCart);
      }

      dialog.remove();
      darkBackground.remove();
    });
  }
}
