const slidesContainer = document.getElementById("slidesContainer");
const slideLeft = document.getElementById("slideLeft");
const slideRight = document.getElementById("slideRight");
let index = 0;

const slides = [
  {
    id: 0,
    title: "React To Do App",
    src: "./images/project1.jpg",
  },
  {
    id: 1,
    title: "React memory game",
    src: "./images/project2.jpg",
  },
  {
    id: 2,
    title: "React memory game",
    src: "./images/project1.jpg",
  },
  {
    id: 3,
    title: "React memory game",
    src: "./images/project2.jpg",
  },
];
const changeSlide = (e) => {
  //Slide change
  if (e.target.id === "slideRight" && index < slides.length - 1) {
    index = index + 1;
    slidesContainer.style.backgroundImage = `url(${slides[index].src})`;
  }
  if (e.target.id === "slideLeft") {
    if (index === 0) {
      return;
    } else if (index > 0) {
      index--;
      slidesContainer.style.backgroundImage = `url(${slides[index].src})`;
    }
  }

  //   Make button not active
  if (index === slides.length - 1) {
    slideRight.classList.add("not-active");
  } else {
    slideRight.classList.remove("not-active");
  }

  if (index === 0) {
    slideLeft.classList.add("not-active");
  } else {
    slideLeft.classList.remove("not-active");
  }
};

slideLeft.addEventListener("click", changeSlide);
slideRight.addEventListener("click", changeSlide);
