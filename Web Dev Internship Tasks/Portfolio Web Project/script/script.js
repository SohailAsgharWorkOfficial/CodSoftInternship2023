// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementsByClassName("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}



// for recaptcha
function onSubmit(token) {
  document.getElementById("demo-form").submit();
}

// trying
function onClick(e) {
  e.preventDefault();
  grecaptcha.ready(function() {
    grecaptcha.execute('6Ld3Y3gnAAAAAIcua65E5-q2p3MQIGddDphEbqDL', {action: 'submit'}).then(function(token) {
        // Add your logic to submit to your backend server here.
    });
  });
}
