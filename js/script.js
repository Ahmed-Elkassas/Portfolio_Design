$(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".nav-bar").addClass("sticky");
    } else {
      $(".nav-bar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Toggle the nav menu
  $(".nav-bar .menu-bar").click(function () {
    $(".nav-bar .menu").toggleClass("active");
    $(".nav-bar .menu-bar i").toggleClass("active");
  });

  // Toggle the nav when clicking on the links
  $(".nav .menu li a").click(function () {
    $(".nav-bar .menu").toggleClass("active");
    $(".nav-bar .menu-bar i").toggleClass("active");
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "smooth");
  });

  // typed animation script
  const typed1 = new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer", "Programmer"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true,
  });

  const typed2 = new Typed(".typing-2", {
    strings: ["Programmer", "Developer", "Designer", "Designer"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true,
  });
});
