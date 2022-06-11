
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.navlinks');
const links = document.querySelector('.navlinks li');

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  // links.forEach(link =>{
  //   link.classList.toggle("fade");
  // });
});

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex , 0) newIndex = sldies.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
