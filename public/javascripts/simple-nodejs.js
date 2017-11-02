(function($){

  $.LoadingOverlaySetup({
    image           : "images/load.svg",
  });


    $.fn.simpleGoTo = function(url){
        var base = this;
        base.parent().parent().LoadingOverlay("show");
            $.get(url, function (result) {
                /*console.log(result);
                base.empty();
                console.log(base);
                $(result).insertBefore(base);*/

                base.html(result);
                base.parent().parent().LoadingOverlay("hide", true);

            });
        return this;
    };

/**
 * Generic method to initialize every page onload, when have "a href" link
 */
    $.fn.initGoTo = function(){
        var base = this;
        var link = base.find('a');

        link.on("click", function(){
            var url = $( this ).data('url');
            var target = $( this ).data('target');

            $( target ).simpleGoTo(url);
        });
    }

})(jQuery);


/*
 * Initial Menu Bar Navigation
 */
(function($){


    $( "ul.menu-nav a" ).each(function() {
      var element = $( this );

      element.on("click", function(){
            var url = $( this ).data('url');
            var target = $( this ).data('target');

            removeMenuActiveClass();
            $( this ).parent().addClass("active");
            $( target ).simpleGoTo(url);
        });
    });

})(jQuery);

function removeMenuActiveClass(){
    $( "ul.menu-nav .active" ).each(function() {
        var element = $( this );
        element.removeClass("active");
    });
}

function initialSidebarToggle(){
    var toggle = $('.navbar-toggle');
    var sidebar = $('.sidebar-wrapper').first();
    var mainPanel = $('.main-panel');

    var state = 'close';


    toggle.click(function(){

            if(state!='open'){
                sidebar.addClass('sidebar-wide');
                mainPanel.addClass('sidebar-wide');
                state = 'open';
            }else{

                sidebar.removeClass('sidebar-wide');
                mainPanel.removeClass('sidebar-wide');
                state = 'close';
            }

    });
}
