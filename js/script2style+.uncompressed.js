(function (d, textcss) {

var scripts = d.getElementsByTagName('script'),
    me      = scripts[scripts.length - 1],
    head    = d.getElementsByTagName('head')[0],
    content = me.innerHTML.replace(/@import\((.*?)\);?/m,function (m,href) {
        // IE crashes on link.rel = 'stylesheet' if the link is not attached
        // to the head, so we can't use a DocumentFragment for an all-in-one
        // replacement
        link = head.appendChild(d.createElement('link'));
        link.type = textcss;
        link.rel  = 'stylesheet';
        link.href = href.replace(/^[\s'"]*|[\s'"]*$/g,'');
        return '';
    }),
    link,style;

if (/\S/m.test(content)) {
    style = d.createElement('style');
    style.type = textcss;

    if (style.styleSheet) {
        style.styleSheet.cssText = content;
    } else {
        style.appendChild(d.createTextNode(content));
    }

    head.appendChild(style);
}

me.parentNode.removeChild(me);

})(document, 'text/css');
