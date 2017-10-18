function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function cek() {
  $("#result").text("")
  var email = $("#email").val()
  var empt = document.forms["form1"]["text1"].value

  if (empt == "") {
    $(".kolom").css("border", "3px solid grey")
  } else if (validateEmail(email)) {
    $("#result").css("color", "green")
    $(".kolom").css("border", "3px solid green")
    $("#result").text(" Email Benar")
  } else {
    $("#result").css("color", "red")
    $(".kolom").css("border", "3px solid red")
    $("#result").text(" Email Salah")
  }
  return false
}

$("#email").keyup("input", cek)
