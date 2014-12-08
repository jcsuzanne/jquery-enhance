/*
 * Returning Scroll dimensions
 * http://api.jquery.com/outerHeight/
 *
 */
jQuery.fn.outerScrollWidth=function(includeMargin){var element=this[0];var jElement=$(element);var totalWidth=element.scrollWidth;totalWidth+=jElement.outerWidth(includeMargin)-jElement.innerWidth();return totalWidth};
jQuery.fn.outerScrollHeight=function(includeMargin){var element=this[0];var jElement=$(element);var totalHeight=element.scrollHeight;totalHeight+=jElement.outerHeight(includeMargin)-jElement.innerHeight();return totalHeight};

/**
 * http://stackoverflow.com/questions/1184624/convert-form-data-to-js-object-with-jquery
 * BOWER!
 */
$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};

/**
* https://gist.github.com/oomlaut/1101534
*/
jQuery.extend({
    parseQuerystring: function() {
        var nvpair = {};
        var qs = window.location.search.replace('?', '');
        var pairs = qs.split('&');
        $.each(pairs, function(i, v) {
            var pair = v.split('=');
            nvpair[pair[0]] = pair[1];
        });
        return nvpair;
    },
    getHashParams : function() {
      var hashParams = {};
      var e,
          a = /\+/g,  // Regex for replacing addition symbol with a space
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
          q = window.location.hash.substring(1);

      while (e = r.exec(q))
         hashParams[d(e[1])] = d(e[2]);

      return hashParams;
    }
});

/**
* http://stackoverflow.com/questions/1227631/using-jquery-to-check-if-a-link-is-internal-or-external
*/
$.expr[':'].external = function (a) {
    var PATTERN_FOR_EXTERNAL_URLS = /^\w+:\/\//;
    var href = $(a).attr('href');
    return href !== undefined && href.search(PATTERN_FOR_EXTERNAL_URLS) !== -1;
};

$.expr[':'].internal = function (a) {
    return $(a).attr('href') !== undefined && !$.expr[':'].external(a);
};
// $.expr[':'].internal = function (obj, index, meta, stack)
//             {
//                 // Prepare
//                 var url = $(obj).attr('href') || '';

//                 return url.substring(0,rootUrl.length) === rootUrl || url.indexOf(':') === -1;
//             };

jQuery.extend({
  getBrowserScrollbarWidth: function() {
    var outer, outerStyle, scrollbarWidth;
    outer = document.createElement('div');
    outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.width = '100px';
    outerStyle.height = '100px';
    outerStyle.overflow = 'scroll';
    outerStyle.top = '-9999px';
    document.body.appendChild(outer);
    scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);
    return scrollbarWidth;
  }
});

/**
* http://onwebdev.blogspot.com/2011/05/jquery-randomize-and-shuffle-array.html
*/
(function($) {
  $.randomize = function(arr) {
    for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
  };
})(jQuery);

/* http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript */
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};