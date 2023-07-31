function waitScene() {
  const logo = document.querySelectorAll("#logo-svg-loading path");

  for (let i = 0; i < logo.length; i++) {
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
  }
}

export const loading = {
  logo() {
    let div = document.createElement("div");
    div.classList.add("loading-bg", "loader", "black-bg-100");
    div.innerHTML = `
        <div class="middle-block blur-bg-logo-night"></div>
        <svg
            id="logo-svg-loading"
            class="middle-block logo-svg-loading-night"
            width="221"
            height="220"
            viewBox="0 0 221 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M140.556 10H10V158.244C46.1553 105.511 104.461 69.1023 171.538 62.3749C174.34 57.3173 175.935 51.5008 175.935 45.3125C175.935 25.8099 160.095 10 140.556 10Z"
                stroke="#fffaf3"
                &
                stroke-width="2"
            />
            <path
                d="M10 210H140.869C179.601 210 211 178.52 211 139.688C211 115.357 198.674 93.9126 179.941 81.2893C109.709 82.6243 47.8008 117.905 10 171.379V210Z"
                stroke="#fffaf3"
                &
                stroke-width="2"
            />
        </svg>
        `;
    document.querySelector("body").style.overflow = "hidden";

    waitScene();

    return div;
  },
};
