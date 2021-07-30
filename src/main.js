let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

// Counter Animation

let nCount = function (selector) {
  $(selector).each(function () {
    $(this).animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (value) {
          $(this).text(Math.ceil(value));
        },
      }
    );
  });
};

let a = 0;

$(window).scroll(function () {
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});

const nav = document.querySelectorAll(".nav-link");

nav.forEach(function (a) {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    const attr = e.target.getAttribute("href");
    const sec = document.querySelector(attr);
    sec.scrollIntoView({ behavior: "smooth" });
  });
});
