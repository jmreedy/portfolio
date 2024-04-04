(function($){
    $('[data-hook="qa"]').click(function(){
        $(this).parent('div').toggleClass('expanded');
    });

    $('[data-hook="nav"]').click(function(){
        $('aside').toggleClass('active');
        $('html').toggleClass('noscroll');
    });
  
  
  })(jQuery);
  
  
  // var offset = [0,0];
  // var divPopup = document.getElementById ("popup");
  // var isDown = false;
  // divPopup.addEventListener('mousedown', function(e) {
  //     isDown = true;
  //     offset = [
  //         divPopup.offsetLeft - e.clientX,
  //         divPopup.offsetTop - e.clientY
  //     ];
  // }, true);
  // document.addEventListener('mouseup', function() {
  //     isDown = false;
  // }, true);
  
  // document.addEventListener('mousemove', function(e) {
  //     event.preventDefault();
  //     if (isDown) {
  //         divPopup.style.left = (e.clientX + offset[0]) + 'px';
  //     }
  // }, true);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  