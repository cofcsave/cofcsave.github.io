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
        markedClass : 'highlight--1',
        zone        : [0, -30] // percentage distance from top & bottom
    });
    
}