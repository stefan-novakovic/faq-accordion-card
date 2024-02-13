const initApp = () => {
  console.log("DOM Content Loaded!");
  const summaryArray = document.querySelectorAll(
    ".container__text-container__questions__summary"
  );
  const arrowsArray = document.querySelectorAll(
    ".container__text-container__questions__summary img"
  );

  for (let i = 0; i <= 4; i++) {
    summaryArray[i].addEventListener("click", (event) => {
      summaryArray[i].classList.toggle("selected-question-text");
      arrowsArray[i].classList.toggle("selected-arrow-default");
      arrowsArray[i].classList.toggle("selected-arrow-animation");
    });
  }
};

document.addEventListener("DOMContentLoaded", initApp);
