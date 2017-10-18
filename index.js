function validateEmail(email) {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

function validate() {
  $("#result").text("");
  var email = $("#email").val();
  var kosong = document.forms["kotak"]["box"].value
  if(kosong == ""){
     $("#email").css("border", "3px solid black");
  } else if (validateEmail(email)) {
    $("#result").text(email + " is valid");
    $("#result").css("color", "green");
    $("#email").css("color", "green");
    $(".warna").css("border","2px solid green")
  } else {
    $("#result").text(email + " is not valid");
    $("#result").css("color", "red");
    $("#email").css("color", "red");
    $(".warna").css("border","2px solid red")
  }
  return false;
}

$("#email").keyup("click", validate);
