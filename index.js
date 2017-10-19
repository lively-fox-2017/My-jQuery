function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    $("#validationText").text("")
    var email = $("#email").val()

    if (document.forms["iniForm"]["emailInput"].value == "") {
        $(".inputbox").css("border", "2px solid blue")
    } else if (validateEmail(email)) {
        $("#validationText").css("color", "green")
        $(".inputbox").css("border", "2px solid green")
        $("#validationText").text(" Valid Email Poem")
    } else {
        $("#validationText").css("color", "red")
        $(".inputbox").css("border", "2px solid red")
        $("#validationText").text(" Invalid Email Poem")
    }
    return false
}

$("#email").keyup("input", validate)