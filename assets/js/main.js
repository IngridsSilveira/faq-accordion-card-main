const paragraph = [...document.querySelectorAll(".paragraph")];
const paragraphInvisible = [
  ...document.querySelectorAll(".paragraph-invisible"),
];

paragraph.map((element) => {
  element.addEventListener("click", (event) => {
    element.classList.toggle("active");

    const click = event.target.id;

    if (click == 0) {
      paragraphInvisible[0].classList.toggle("d-none");
    } else if (click == 1) {
      paragraphInvisible[1].classList.toggle("d-none");
    } else if (click == 2) {
      paragraphInvisible[2].classList.toggle("d-none");
    } else if (click == 3) {
      paragraphInvisible[3].classList.toggle("d-none");
    } else if (click == 4) {
      paragraphInvisible[4].classList.toggle("d-none");
    }
  });
});
