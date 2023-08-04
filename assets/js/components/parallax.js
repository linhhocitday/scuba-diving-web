export async function parallax(p) {
  window.addEventListener("scroll", () => {
    if (window.innerWidth > 1024) {
      let scrollTag = p.querySelectorAll(".l-scroll");

      for (let i = 0; i < scrollTag.length; i++) {
        let pos = window.pageYOffset * scrollTag[i].dataset.rate;

        scrollTag[i].style.transform = `translate3d(0, ${pos}px, 0)`;
      }
    }
  });
}
