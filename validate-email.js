function checkEmail(email) {
  var pattern = /[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/;
  return pattern.test(email);
}

function validate() {
  $("#result").text("");
  var email = $("#email").val();
  if ($(this).val() == ""){
     $("#email").css("border", "");
  } else if (checkEmail(email)) {
    $("#result").text(email + " is valid email");
    $("#result").css("color", "green");
    $(".fEmail").css("border","2px solid green")
  } else {
    $("#result").text(email + " is invalid");
    $("#result").css("color", "red");
    $(".fEmail").css("border","2px solid red")
  }
  return false;
}

$("#email").keyup("click", validate);
