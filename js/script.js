// Simple Mobile Popout Menu //

function myFunction() {
    var x = document.getElementById("navFunction");
    if (x.className === "topNav") {
        x.className += " responsive";
    } else {
        x.className = "topNav";
    }
}

//Animating on When in view //

var getElementsInArea = (function(docElm){
    var viewportHeight = docElm.clientHeight;

    return function(e, opts){
        var found = [], i;
        
        if( e && e.type == 'resize' )
            viewportHeight = docElm.clientHeight;

        for( i = opts.elements.length; i--; ){
            var elm        = opts.elements[i],
                pos        = elm.getBoundingClientRect(),
                topPerc    = pos.top    / viewportHeight * 100,
                bottomPerc = pos.bottom / viewportHeight * 100,
                middle     = (topPerc + bottomPerc)/2,
                inViewport = middle > opts.zone[1] && 
                             middle < (100-opts.zone[1]);

            elm.classList.toggle(opts.markedClass, inViewport);

            if( inViewport )
                found.push(elm);
        }
    };
})(document.documentElement);

window.addEventListener('scroll', f)
window.addEventListener('resize', f)

function f(e){
    getElementsInArea(e, {
        elements    : document.querySelectorAll('.skills'), 
        markedClass : 'highlight-1',
        zone        : [0, -30] // percentage distance from top & bottom
    });
    
}

//Active links on Scroll and Click//

// Cache selectors
var lastId,
    topMenu = $(".topNavLinks"),
    topMenuHeight = topMenu.outerHeight()+400,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});

 // Multiple Popop for Other works     
      $(".info").on("click", function() {
  var pop = $(this).data("modal");
  $(pop).show();
});

$(".popup").on("click", function(e) {
  var className = e.target.className;
  if(className === "popup" || className === "close"){
    $(this).closest(".popup").hide();
  }
});