const hamburger = document.querySelector(".hamburger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburgerImageOne = hamburger.querySelector(".active");
const hamburgerImageTwo = hamburger.querySelector(".hidden");
const mobileTitles = document.querySelectorAll(".mobile-menu-items li");
const deskSubmenu = document.querySelectorAll(".list-items li");





function mobileToggle() {
  mobileMenu.classList.toggle("active");
  hamburgerImageOne.classList.toggle("hidden");
  hamburgerImageTwo.classList.toggle("hidden");
}

hamburger.addEventListener("click", mobileToggle);

/* MOBILE MENU DROPDOWN SUBMENU TOGGLE */

mobileTitles.forEach((mobileTitle) => {
  mobileTitle.addEventListener("click", () => {
    let isActive = mobileTitle.classList.contains("active");
    /* 
        mobileTitles.forEach(el => {
                el.classList.remove('active');  // removes the active state from one list item once another is clicked
            })  */

    if (isActive) mobileTitle.classList.remove("active");
    else mobileTitle.classList.add("active");
  });
});

/*    DESKTOP MENU DROPDOWN TOGGLE */

deskSubmenu.forEach((deskSub) => {
  deskSub.addEventListener("click", () => {
    let open = deskSub.classList.contains("active");

    if (open) {
      deskSub.classList.remove("active");
    } else {
      deskSub.classList.add("active");
    }
  });
});
