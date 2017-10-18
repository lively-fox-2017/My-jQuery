$('#email').on('keypress', function(){
  var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (!pattern.test(this.value)) {
    $('#message').html("<img src='../images/false.png' width='15'> Invalid Email Address").css({"color":"red"}).show("slow")
  } else {
    $('#message').html("<img src='../images/true.png' width='15'> Cool Email!").css({"color": "green"}).show(100)
  }
})
