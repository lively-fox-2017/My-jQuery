function emailValidate(input) {  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(input.match(mailformat)) {  
        return true;  
    } else {  
        return false;  
    }  
}
let input = document.getElementById("email")
let msg = document.getElementById('message')
input.addEventListener("keypress", function(){
    if(emailValidate(input.value)) {
        input.style.border='5px solid green'
        msg.innerHTML = ''
    } else {
        input.style.border='5px solid red'
        msg.innerHTML = 'Email address is not valid!'
        msg.style.color = "red"
    }
});