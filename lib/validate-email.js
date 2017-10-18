(function( $ ) {

  $.fn.emailChecker = function( customText ) {
    let out='Email belum valid'
    let color='red'
    if (customText=='') out='Email tidak boleh kosong' 
    else if(new RegExp(/\S+@\S+\.+\S/).exec(customText)){
      out='Email sudah valid'
      color='green'
    }

    return this.each( function() {
        $(this).text(out);
        $(this).css(`color`, color)
    });

  }

}( jQuery ));

// function cekEmail(string){
//   if(new RegExp(/\S+@\S+/).exec(string)){
//     console.log(string);
//   }
// }
//
// cekEmail('jquery@ks.cl')
// cekEmail('ijsdi')
