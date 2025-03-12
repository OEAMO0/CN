document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu i");
  const navMenu = document.querySelector(".nav-menu");

  menuIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    // تبديل الأيقونة بين القائمة المفتوحة والمغلقة
    if (navMenu.classList.contains("active")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-xmark");
    } else {
      menuIcon.classList.remove("fa-xmark");
      menuIcon.classList.add("fa-bars");
    }
  });
});
