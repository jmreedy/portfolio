!function($){$('[data-hook="qa"]').click((function(){$(this).parent("div").toggleClass("expanded")})),$('[data-hook="nav"]').click((function(){$("aside").toggleClass("active"),$("html").toggleClass("noscroll")})),$('[data-hook="nav-item"]').click((function(){$("aside").removeClass("active"),$("html").removeClass("noscroll")})),$('[data-hook="theme"]').click((function(){$("html").toggleClass("toggle-theme")})),$('[data-hook="overlay"]').click((function(){$("html").removeClass("noscroll"),$(".is-open").removeClass("is-open"),$("aside").removeClass("active")})),$(".work__item").click((function(){var o=$(this).attr("data-hook");$("#"+o).toggleClass("is-open"),$("aside").removeClass("active"),$("html").toggleClass("noscroll")})),$('[data-hook="modalClose"]').click((function(){$(this).closest(".modal").removeClass("is-open"),$("html").removeClass("noscroll")}))}(jQuery);