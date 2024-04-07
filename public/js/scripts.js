(function($){
    $('[data-hook="qa"]').click(function(){
        $(this).parent('div').toggleClass('expanded');
    });

    $('[data-hook="nav"]').click(function(){
        $('aside').toggleClass('active');
        $('html').toggleClass('noscroll');
    });

  
  })(jQuery);

const nav = document.querySelector(".masthead");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY >= 72) {
        nav.classList.add("is-hidden");
    }
    
    if (lastScrollY > window.scrollY && lastScrollY > 64) {
        nav.classList.add("scroll-up");
    }
    if (lastScrollY < window.scrollY && lastScrollY > 64) {
        nav.classList.remove("scroll-up");
    }
    if (lastScrollY <= 8) {
        nav.classList.remove("is-hidden");
    }

    lastScrollY = window.scrollY;
});