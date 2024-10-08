(function($){
    $('[data-hook="qa"]').click(function(){
        $(this).parent('div').toggleClass('expanded');
    });

    $('[data-hook="nav"]').click(function(){
        $('aside').toggleClass('active');
        $('html').toggleClass('noscroll');
    });

    $('[data-hook="nav-item"]').click(function(){
        $('aside').removeClass('active');
        $('html').removeClass('noscroll');
    });

    $('[data-hook="theme"]').click(function(){
        $('html').toggleClass('toggle-theme');
    });

    $('[data-hook="overlay"]').click(function(){
        $('html').removeClass('noscroll');
        $('.is-open').removeClass('is-open');
        $('aside').removeClass('active');
    });

    $('.work__item').click(function(){
        var projectID = $(this).attr('data-hook');

        if(projectID === 'totalexpert') {
            const password = prompt('Woah friend, ya gotta enter the super secret password first.');

            if(password == 'aardvark') {
                $('#totalexpert').toggleClass('is-open');
                $('aside').removeClass('active');
                $('html').toggleClass('noscroll');
            }
            else {
                return;
            }
        }

        else {
            $('#' + projectID).toggleClass('is-open');
            $('aside').removeClass('active');
            $('html').toggleClass('noscroll');
        }
    });

    $('[data-hook="modalClose"]').click(function(){
        $(this).closest('.modal').removeClass('is-open');
        $('html').removeClass('noscroll');
    });

    // $('[data-hook="next"]').click(function(){
    //     console.log('click');
    //     $('article.current-project').removeClass('current-project').next('article').addClass('current-project');
    // });

  
  })(jQuery);

//   const modal = document.querySelector('#dialog-panel');

//   const openModal = document.querySelector('[data-hook="chalkboard"]');
//   const closeModal = document.querySelector('[data-hook="dialogClose"]');
  
//   openModal.addEventListener('click', function() {
//       modal.showModal();
//   });
  
//   closeModal.addEventListener('click', function() {
//       modal.close();
//   })