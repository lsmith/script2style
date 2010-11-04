(function (d) {

var scripts = d.getElementsByTagName('script'),
    me      = scripts[scripts.length - 1],
    content = me.innerHTML,
    style   = d.createElement('style');

style.type = 'text/css';

if (style.styleSheet) {
    style.styleSheet.cssText = content;
} else {
    style.appendChild(d.createTextNode(content));
}

me.parentNode.replaceChild(style,me);

})(document);
