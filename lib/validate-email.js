$.fn.validateEmail = function(email) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(regex.test(email)){
    $('input#email').addClass("success")
    $('input#email').removeClass("error")
  }
  else {
    $('input#email').addClass("error")
  }
}
