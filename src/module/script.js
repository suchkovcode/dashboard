// @ts-nocheck
window.addEventListener("DOMContentLoaded", () => {
   const toggleBurgetMenu = async () => {
      const burger = document.querySelector(".header__menu");
      const aside = document.querySelector(".aside ");
      const mediaQuery = window.matchMedia("(max-width: 992px)");

      burger.addEventListener("click", (event) => {
         event.preventDefault();
         event.stopPropagation();
         if (mediaQuery.matches) {
            burger.classList.toggle("active");
            aside.classList.toggle("active");
         } else {
            burger.classList.remove("active");
            aside.classList.remove("active");
         }
      });
   };
   toggleBurgetMenu();

   const toggleMenuItem = async () => {
      const menuItem = document.querySelectorAll(".aside__nav-item");

      menuItem.forEach((element) => {
         element.addEventListener("click", (event) => {
            event.stopPropagation();
            menuItem.forEach((elementRemove) => {
               elementRemove.classList.remove("active");
            });
            event.currentTarget.classList.add("active");
         });
      });
   };

   toggleMenuItem();

   const togglePAgination = async () => {
      const paginationItem = document.querySelectorAll(".pagination__item:not(.pagination__item[data-type='more'])");

      paginationItem.forEach((element) => {
         element.addEventListener("click", (event) => {
            event.stopPropagation();
            paginationItem.forEach((elementRemove) => {
               elementRemove.classList.remove("active");
            });
            event.currentTarget.classList.add("active");
         });
      });
   };

   togglePAgination();
});
