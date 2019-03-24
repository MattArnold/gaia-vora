(function () {
  document.addEventListener("DOMContentLoaded", function() {
    var contact_btn = document.getElementById("contact-btn");
    contact_btn.addEventListener('click', function(){
      window.location.href = "mailto:nemorathwald@magicmeeplegames.com";
    })
  });
})();