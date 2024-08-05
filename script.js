document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      parallaxScroll();
    });

    function parallaxScroll() {
      const scrolled = window.scrollY;
      document.getElementById("parallax-bg1").style.top = `${scrolled * -0.25}px`;
      document.getElementById("parallax-bg2").style.top = `${scrolled * -0.5}px`;
      document.getElementById("parallax-bg3").style.top = `${scrolled * -0.75}px`;
    }
  });
  