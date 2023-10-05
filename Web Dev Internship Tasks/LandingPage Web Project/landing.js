document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.querySelector(".navbar ul li:nth-child(2) a");
    const aboutLink = document.querySelector(".navbar ul li:nth-child(3) a");
    const contactSection = document.querySelector(".contact-section");
    const aboutSection = document.querySelector(".about-section");
  
    contactLink.addEventListener("click", function(event) {
      event.preventDefault();
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  
    aboutLink.addEventListener("click", function(event) {
      event.preventDefault();
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  });