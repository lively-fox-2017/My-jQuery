
(function($) {
  var regexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi;
    $.fn.isEmail = function() {
      if(regexp.test($(this).val())){
        $(this).css( 'border-color', 'green' );
        // $("input.hidemsg").val()=''
      }else{
        $(this).css( 'border-color', 'red' );
        // $("input.hidemsg").val()='Email address is not valid'

      }
    }
}(jQuery));
