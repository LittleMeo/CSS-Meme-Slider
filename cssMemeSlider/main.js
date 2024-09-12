window.onload = function () {
  const slider = document.querySelector(".slider");
  const paginationBtns = document.querySelectorAll(".pagination__button");
  paginationBtns.forEach((el) => {
      el.addEventListener("click", () => {
          console.log(el);
          setDataId(el.id)
    });
  });
  
};

const setDataId = (id) => {
  const slider = document.querySelector(".slider");
  slider.dataset.activeSlide = id;
  console.log(slider.dataset);
};
