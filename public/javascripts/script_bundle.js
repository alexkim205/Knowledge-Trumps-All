(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

;(function (name, root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory()
    module.exports['default'] = factory()
  }
  /* istanbul ignore next */
  else if (typeof define === 'function' && define.amd) {
    define(factory)
  }
  else {
    root[name] = factory()
  }
}('slugify', this, function () {
  /* eslint-disable */
  var charMap = JSON.parse('{"$":"dollar","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}')
  /* eslint-enable */

  function replace (string, options) {
    if (typeof string !== 'string') {
      throw new Error('slugify: string argument expected')
    }

    options = (typeof options === 'string')
      ? {replacement: options}
      : options || {}

    var slug = string.split('')
      .reduce(function (result, ch) {
        return result + (charMap[ch] || ch)
          // allowed
          .replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]/g, '')
      }, '')
      // trim leading/trailing spaces
      .trim()
      // convert spaces
      .replace(/[-\s]+/g, options.replacement || '-')
      // remove trailing separator
      .replace('#{replacement}$', '')

    return options.lower ? slug.toLowerCase() : slug
  }

  replace.extend = function (customMap) {
    for (var key in customMap) {
      charMap[key] = customMap[key]
    }
  }

  return replace
}))

},{}],2:[function(require,module,exports){
$(document).ready(function () { 

  exports.corsEnabledFunction = (req, res) => {
    // Set CORS headers
    // e.g. allow GETs from any origin with the Content-Type header
    // and cache preflight response for an 3600s
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    // Send response to OPTIONS requests and terminate the function execution
    if (req.method == 'OPTIONS') {
      res.status(204).send('');
    }
    // Continue with function code
    
  }

})
},{}],3:[function(require,module,exports){
$(document).ready(function () {

  var slugify = require('slugify')

  $.getJSON( "../data/top_articles.json", function( data ) {

    var items = [];
    $list = $( "#list-of-articles")

    // console.log(data.top_articles)
    data.top_articles.forEach(e => {
      console.log(e.url)
      $li = $('<li><a href="/article/' + slugify(e.name) + '">' + e.name + '</a></li>')
      $list.append($li)
    });
   
  });

  function search_url() {
    url = $("#your-url").text()

    $.ajax({
      type: "POST",
      url: "https://us-central1-cdss-2018.cloudfunctions.net/function-article-info",
      data: {
        name: "url"
      },
      success: function(data) {
        console.log(data);
        //do something when request is successfull
      },
      dataType: "json"
    });
  }

})
},{"slugify":1}],4:[function(require,module,exports){
$(document).ready(function () { 
  
})
},{}],5:[function(require,module,exports){
function setupIndex() {
  require('./index')
}

function setupArticle() {
  require('./article')
}

function setupPublisher() {
  require('./publisher')
}


window.exportedFunctions = {
  "setupIndex": setupIndex,
  "setupArticle": setupArticle,
  "setupPublisher": setupPublisher,
};
},{"./article":2,"./index":3,"./publisher":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvc2x1Z2lmeS9pbmRleC5qcyIsInB1YmxpYy9qYXZhc2NyaXB0cy9hcnRpY2xlLmpzIiwicHVibGljL2phdmFzY3JpcHRzL2luZGV4LmpzIiwicHVibGljL2phdmFzY3JpcHRzL3B1Ymxpc2hlci5qcyIsInB1YmxpYy9qYXZhc2NyaXB0cy9zY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxuOyhmdW5jdGlvbiAobmFtZSwgcm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KClcbiAgICBtb2R1bGUuZXhwb3J0c1snZGVmYXVsdCddID0gZmFjdG9yeSgpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKGZhY3RvcnkpXG4gIH1cbiAgZWxzZSB7XG4gICAgcm9vdFtuYW1lXSA9IGZhY3RvcnkoKVxuICB9XG59KCdzbHVnaWZ5JywgdGhpcywgZnVuY3Rpb24gKCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICB2YXIgY2hhck1hcCA9IEpTT04ucGFyc2UoJ3tcIiRcIjpcImRvbGxhclwiLFwiJlwiOlwiYW5kXCIsXCI8XCI6XCJsZXNzXCIsXCI+XCI6XCJncmVhdGVyXCIsXCJ8XCI6XCJvclwiLFwiwqJcIjpcImNlbnRcIixcIsKjXCI6XCJwb3VuZFwiLFwiwqRcIjpcImN1cnJlbmN5XCIsXCLCpVwiOlwieWVuXCIsXCLCqVwiOlwiKGMpXCIsXCLCqlwiOlwiYVwiLFwiwq5cIjpcIihyKVwiLFwiwrpcIjpcIm9cIixcIsOAXCI6XCJBXCIsXCLDgVwiOlwiQVwiLFwiw4JcIjpcIkFcIixcIsODXCI6XCJBXCIsXCLDhFwiOlwiQVwiLFwiw4VcIjpcIkFcIixcIsOGXCI6XCJBRVwiLFwiw4dcIjpcIkNcIixcIsOIXCI6XCJFXCIsXCLDiVwiOlwiRVwiLFwiw4pcIjpcIkVcIixcIsOLXCI6XCJFXCIsXCLDjFwiOlwiSVwiLFwiw41cIjpcIklcIixcIsOOXCI6XCJJXCIsXCLDj1wiOlwiSVwiLFwiw5BcIjpcIkRcIixcIsORXCI6XCJOXCIsXCLDklwiOlwiT1wiLFwiw5NcIjpcIk9cIixcIsOUXCI6XCJPXCIsXCLDlVwiOlwiT1wiLFwiw5ZcIjpcIk9cIixcIsOYXCI6XCJPXCIsXCLDmVwiOlwiVVwiLFwiw5pcIjpcIlVcIixcIsObXCI6XCJVXCIsXCLDnFwiOlwiVVwiLFwiw51cIjpcIllcIixcIsOeXCI6XCJUSFwiLFwiw59cIjpcInNzXCIsXCLDoFwiOlwiYVwiLFwiw6FcIjpcImFcIixcIsOiXCI6XCJhXCIsXCLDo1wiOlwiYVwiLFwiw6RcIjpcImFcIixcIsOlXCI6XCJhXCIsXCLDplwiOlwiYWVcIixcIsOnXCI6XCJjXCIsXCLDqFwiOlwiZVwiLFwiw6lcIjpcImVcIixcIsOqXCI6XCJlXCIsXCLDq1wiOlwiZVwiLFwiw6xcIjpcImlcIixcIsOtXCI6XCJpXCIsXCLDrlwiOlwiaVwiLFwiw69cIjpcImlcIixcIsOwXCI6XCJkXCIsXCLDsVwiOlwiblwiLFwiw7JcIjpcIm9cIixcIsOzXCI6XCJvXCIsXCLDtFwiOlwib1wiLFwiw7VcIjpcIm9cIixcIsO2XCI6XCJvXCIsXCLDuFwiOlwib1wiLFwiw7lcIjpcInVcIixcIsO6XCI6XCJ1XCIsXCLDu1wiOlwidVwiLFwiw7xcIjpcInVcIixcIsO9XCI6XCJ5XCIsXCLDvlwiOlwidGhcIixcIsO/XCI6XCJ5XCIsXCLEgFwiOlwiQVwiLFwixIFcIjpcImFcIixcIsSCXCI6XCJBXCIsXCLEg1wiOlwiYVwiLFwixIRcIjpcIkFcIixcIsSFXCI6XCJhXCIsXCLEhlwiOlwiQ1wiLFwixIdcIjpcImNcIixcIsSMXCI6XCJDXCIsXCLEjVwiOlwiY1wiLFwixI5cIjpcIkRcIixcIsSPXCI6XCJkXCIsXCLEkFwiOlwiREpcIixcIsSRXCI6XCJkalwiLFwixJJcIjpcIkVcIixcIsSTXCI6XCJlXCIsXCLEllwiOlwiRVwiLFwixJdcIjpcImVcIixcIsSYXCI6XCJlXCIsXCLEmVwiOlwiZVwiLFwixJpcIjpcIkVcIixcIsSbXCI6XCJlXCIsXCLEnlwiOlwiR1wiLFwixJ9cIjpcImdcIixcIsSiXCI6XCJHXCIsXCLEo1wiOlwiZ1wiLFwixKhcIjpcIklcIixcIsSpXCI6XCJpXCIsXCLEqlwiOlwiaVwiLFwixKtcIjpcImlcIixcIsSuXCI6XCJJXCIsXCLEr1wiOlwiaVwiLFwixLBcIjpcIklcIixcIsSxXCI6XCJpXCIsXCLEtlwiOlwia1wiLFwixLdcIjpcImtcIixcIsS7XCI6XCJMXCIsXCLEvFwiOlwibFwiLFwixYFcIjpcIkxcIixcIsWCXCI6XCJsXCIsXCLFg1wiOlwiTlwiLFwixYRcIjpcIm5cIixcIsWFXCI6XCJOXCIsXCLFhlwiOlwiblwiLFwixYdcIjpcIk5cIixcIsWIXCI6XCJuXCIsXCLFkFwiOlwiT1wiLFwixZFcIjpcIm9cIixcIsWSXCI6XCJPRVwiLFwixZNcIjpcIm9lXCIsXCLFmFwiOlwiUlwiLFwixZlcIjpcInJcIixcIsWaXCI6XCJTXCIsXCLFm1wiOlwic1wiLFwixZ5cIjpcIlNcIixcIsWfXCI6XCJzXCIsXCLFoFwiOlwiU1wiLFwixaFcIjpcInNcIixcIsWiXCI6XCJUXCIsXCLFo1wiOlwidFwiLFwixaRcIjpcIlRcIixcIsWlXCI6XCJ0XCIsXCLFqFwiOlwiVVwiLFwixalcIjpcInVcIixcIsWqXCI6XCJ1XCIsXCLFq1wiOlwidVwiLFwixa5cIjpcIlVcIixcIsWvXCI6XCJ1XCIsXCLFsFwiOlwiVVwiLFwixbFcIjpcInVcIixcIsWyXCI6XCJVXCIsXCLFs1wiOlwidVwiLFwixblcIjpcIlpcIixcIsW6XCI6XCJ6XCIsXCLFu1wiOlwiWlwiLFwixbxcIjpcInpcIixcIsW9XCI6XCJaXCIsXCLFvlwiOlwielwiLFwixpJcIjpcImZcIixcIsagXCI6XCJPXCIsXCLGoVwiOlwib1wiLFwixq9cIjpcIlVcIixcIsawXCI6XCJ1XCIsXCLHiFwiOlwiTEpcIixcIseJXCI6XCJsalwiLFwix4tcIjpcIk5KXCIsXCLHjFwiOlwibmpcIixcIsiYXCI6XCJTXCIsXCLImVwiOlwic1wiLFwiyJpcIjpcIlRcIixcIsibXCI6XCJ0XCIsXCLLmlwiOlwib1wiLFwizoZcIjpcIkFcIixcIs6IXCI6XCJFXCIsXCLOiVwiOlwiSFwiLFwizopcIjpcIklcIixcIs6MXCI6XCJPXCIsXCLOjlwiOlwiWVwiLFwizo9cIjpcIldcIixcIs6QXCI6XCJpXCIsXCLOkVwiOlwiQVwiLFwizpJcIjpcIkJcIixcIs6TXCI6XCJHXCIsXCLOlFwiOlwiRFwiLFwizpVcIjpcIkVcIixcIs6WXCI6XCJaXCIsXCLOl1wiOlwiSFwiLFwizphcIjpcIjhcIixcIs6ZXCI6XCJJXCIsXCLOmlwiOlwiS1wiLFwizptcIjpcIkxcIixcIs6cXCI6XCJNXCIsXCLOnVwiOlwiTlwiLFwizp5cIjpcIjNcIixcIs6fXCI6XCJPXCIsXCLOoFwiOlwiUFwiLFwizqFcIjpcIlJcIixcIs6jXCI6XCJTXCIsXCLOpFwiOlwiVFwiLFwizqVcIjpcIllcIixcIs6mXCI6XCJGXCIsXCLOp1wiOlwiWFwiLFwizqhcIjpcIlBTXCIsXCLOqVwiOlwiV1wiLFwizqpcIjpcIklcIixcIs6rXCI6XCJZXCIsXCLOrFwiOlwiYVwiLFwizq1cIjpcImVcIixcIs6uXCI6XCJoXCIsXCLOr1wiOlwiaVwiLFwizrBcIjpcInlcIixcIs6xXCI6XCJhXCIsXCLOslwiOlwiYlwiLFwizrNcIjpcImdcIixcIs60XCI6XCJkXCIsXCLOtVwiOlwiZVwiLFwizrZcIjpcInpcIixcIs63XCI6XCJoXCIsXCLOuFwiOlwiOFwiLFwizrlcIjpcImlcIixcIs66XCI6XCJrXCIsXCLOu1wiOlwibFwiLFwizrxcIjpcIm1cIixcIs69XCI6XCJuXCIsXCLOvlwiOlwiM1wiLFwizr9cIjpcIm9cIixcIs+AXCI6XCJwXCIsXCLPgVwiOlwiclwiLFwiz4JcIjpcInNcIixcIs+DXCI6XCJzXCIsXCLPhFwiOlwidFwiLFwiz4VcIjpcInlcIixcIs+GXCI6XCJmXCIsXCLPh1wiOlwieFwiLFwiz4hcIjpcInBzXCIsXCLPiVwiOlwid1wiLFwiz4pcIjpcImlcIixcIs+LXCI6XCJ5XCIsXCLPjFwiOlwib1wiLFwiz41cIjpcInlcIixcIs+OXCI6XCJ3XCIsXCLQgVwiOlwiWW9cIixcItCCXCI6XCJESlwiLFwi0IRcIjpcIlllXCIsXCLQhlwiOlwiSVwiLFwi0IdcIjpcIllpXCIsXCLQiFwiOlwiSlwiLFwi0IlcIjpcIkxKXCIsXCLQilwiOlwiTkpcIixcItCLXCI6XCJDXCIsXCLQj1wiOlwiRFpcIixcItCQXCI6XCJBXCIsXCLQkVwiOlwiQlwiLFwi0JJcIjpcIlZcIixcItCTXCI6XCJHXCIsXCLQlFwiOlwiRFwiLFwi0JVcIjpcIkVcIixcItCWXCI6XCJaaFwiLFwi0JdcIjpcIlpcIixcItCYXCI6XCJJXCIsXCLQmVwiOlwiSlwiLFwi0JpcIjpcIktcIixcItCbXCI6XCJMXCIsXCLQnFwiOlwiTVwiLFwi0J1cIjpcIk5cIixcItCeXCI6XCJPXCIsXCLQn1wiOlwiUFwiLFwi0KBcIjpcIlJcIixcItChXCI6XCJTXCIsXCLQolwiOlwiVFwiLFwi0KNcIjpcIlVcIixcItCkXCI6XCJGXCIsXCLQpVwiOlwiSFwiLFwi0KZcIjpcIkNcIixcItCnXCI6XCJDaFwiLFwi0KhcIjpcIlNoXCIsXCLQqVwiOlwiU2hcIixcItCqXCI6XCJVXCIsXCLQq1wiOlwiWVwiLFwi0KxcIjpcIlwiLFwi0K1cIjpcIkVcIixcItCuXCI6XCJZdVwiLFwi0K9cIjpcIllhXCIsXCLQsFwiOlwiYVwiLFwi0LFcIjpcImJcIixcItCyXCI6XCJ2XCIsXCLQs1wiOlwiZ1wiLFwi0LRcIjpcImRcIixcItC1XCI6XCJlXCIsXCLQtlwiOlwiemhcIixcItC3XCI6XCJ6XCIsXCLQuFwiOlwiaVwiLFwi0LlcIjpcImpcIixcItC6XCI6XCJrXCIsXCLQu1wiOlwibFwiLFwi0LxcIjpcIm1cIixcItC9XCI6XCJuXCIsXCLQvlwiOlwib1wiLFwi0L9cIjpcInBcIixcItGAXCI6XCJyXCIsXCLRgVwiOlwic1wiLFwi0YJcIjpcInRcIixcItGDXCI6XCJ1XCIsXCLRhFwiOlwiZlwiLFwi0YVcIjpcImhcIixcItGGXCI6XCJjXCIsXCLRh1wiOlwiY2hcIixcItGIXCI6XCJzaFwiLFwi0YlcIjpcInNoXCIsXCLRilwiOlwidVwiLFwi0YtcIjpcInlcIixcItGMXCI6XCJcIixcItGNXCI6XCJlXCIsXCLRjlwiOlwieXVcIixcItGPXCI6XCJ5YVwiLFwi0ZFcIjpcInlvXCIsXCLRklwiOlwiZGpcIixcItGUXCI6XCJ5ZVwiLFwi0ZZcIjpcImlcIixcItGXXCI6XCJ5aVwiLFwi0ZhcIjpcImpcIixcItGZXCI6XCJsalwiLFwi0ZpcIjpcIm5qXCIsXCLRm1wiOlwiY1wiLFwi0Z9cIjpcImR6XCIsXCLSkFwiOlwiR1wiLFwi0pFcIjpcImdcIixcIuC4v1wiOlwiYmFodFwiLFwi4YOQXCI6XCJhXCIsXCLhg5FcIjpcImJcIixcIuGDklwiOlwiZ1wiLFwi4YOTXCI6XCJkXCIsXCLhg5RcIjpcImVcIixcIuGDlVwiOlwidlwiLFwi4YOWXCI6XCJ6XCIsXCLhg5dcIjpcInRcIixcIuGDmFwiOlwiaVwiLFwi4YOZXCI6XCJrXCIsXCLhg5pcIjpcImxcIixcIuGDm1wiOlwibVwiLFwi4YOcXCI6XCJuXCIsXCLhg51cIjpcIm9cIixcIuGDnlwiOlwicFwiLFwi4YOfXCI6XCJ6aFwiLFwi4YOgXCI6XCJyXCIsXCLhg6FcIjpcInNcIixcIuGDolwiOlwidFwiLFwi4YOjXCI6XCJ1XCIsXCLhg6RcIjpcImZcIixcIuGDpVwiOlwia1wiLFwi4YOmXCI6XCJnaFwiLFwi4YOnXCI6XCJxXCIsXCLhg6hcIjpcInNoXCIsXCLhg6lcIjpcImNoXCIsXCLhg6pcIjpcInRzXCIsXCLhg6tcIjpcImR6XCIsXCLhg6xcIjpcInRzXCIsXCLhg61cIjpcImNoXCIsXCLhg65cIjpcImtoXCIsXCLhg69cIjpcImpcIixcIuGDsFwiOlwiaFwiLFwi4bqeXCI6XCJTU1wiLFwi4bqgXCI6XCJBXCIsXCLhuqFcIjpcImFcIixcIuG6olwiOlwiQVwiLFwi4bqjXCI6XCJhXCIsXCLhuqRcIjpcIkFcIixcIuG6pVwiOlwiYVwiLFwi4bqmXCI6XCJBXCIsXCLhuqdcIjpcImFcIixcIuG6qFwiOlwiQVwiLFwi4bqpXCI6XCJhXCIsXCLhuqpcIjpcIkFcIixcIuG6q1wiOlwiYVwiLFwi4bqsXCI6XCJBXCIsXCLhuq1cIjpcImFcIixcIuG6rlwiOlwiQVwiLFwi4bqvXCI6XCJhXCIsXCLhurBcIjpcIkFcIixcIuG6sVwiOlwiYVwiLFwi4bqyXCI6XCJBXCIsXCLhurNcIjpcImFcIixcIuG6tFwiOlwiQVwiLFwi4bq1XCI6XCJhXCIsXCLhurZcIjpcIkFcIixcIuG6t1wiOlwiYVwiLFwi4bq4XCI6XCJFXCIsXCLhurlcIjpcImVcIixcIuG6ulwiOlwiRVwiLFwi4bq7XCI6XCJlXCIsXCLhurxcIjpcIkVcIixcIuG6vVwiOlwiZVwiLFwi4bq+XCI6XCJFXCIsXCLhur9cIjpcImVcIixcIuG7gFwiOlwiRVwiLFwi4buBXCI6XCJlXCIsXCLhu4JcIjpcIkVcIixcIuG7g1wiOlwiZVwiLFwi4buEXCI6XCJFXCIsXCLhu4VcIjpcImVcIixcIuG7hlwiOlwiRVwiLFwi4buHXCI6XCJlXCIsXCLhu4hcIjpcIklcIixcIuG7iVwiOlwiaVwiLFwi4buKXCI6XCJJXCIsXCLhu4tcIjpcImlcIixcIuG7jFwiOlwiT1wiLFwi4buNXCI6XCJvXCIsXCLhu45cIjpcIk9cIixcIuG7j1wiOlwib1wiLFwi4buQXCI6XCJPXCIsXCLhu5FcIjpcIm9cIixcIuG7klwiOlwiT1wiLFwi4buTXCI6XCJvXCIsXCLhu5RcIjpcIk9cIixcIuG7lVwiOlwib1wiLFwi4buWXCI6XCJPXCIsXCLhu5dcIjpcIm9cIixcIuG7mFwiOlwiT1wiLFwi4buZXCI6XCJvXCIsXCLhu5pcIjpcIk9cIixcIuG7m1wiOlwib1wiLFwi4bucXCI6XCJPXCIsXCLhu51cIjpcIm9cIixcIuG7nlwiOlwiT1wiLFwi4bufXCI6XCJvXCIsXCLhu6BcIjpcIk9cIixcIuG7oVwiOlwib1wiLFwi4buiXCI6XCJPXCIsXCLhu6NcIjpcIm9cIixcIuG7pFwiOlwiVVwiLFwi4bulXCI6XCJ1XCIsXCLhu6ZcIjpcIlVcIixcIuG7p1wiOlwidVwiLFwi4buoXCI6XCJVXCIsXCLhu6lcIjpcInVcIixcIuG7qlwiOlwiVVwiLFwi4burXCI6XCJ1XCIsXCLhu6xcIjpcIlVcIixcIuG7rVwiOlwidVwiLFwi4buuXCI6XCJVXCIsXCLhu69cIjpcInVcIixcIuG7sFwiOlwiVVwiLFwi4buxXCI6XCJ1XCIsXCLhu7JcIjpcIllcIixcIuG7s1wiOlwieVwiLFwi4bu0XCI6XCJZXCIsXCLhu7VcIjpcInlcIixcIuG7tlwiOlwiWVwiLFwi4bu3XCI6XCJ5XCIsXCLhu7hcIjpcIllcIixcIuG7uVwiOlwieVwiLFwi4oCYXCI6XCJcXCdcIixcIuKAmVwiOlwiXFwnXCIsXCLigJxcIjpcIlxcXFxcXFwiXCIsXCLigJ1cIjpcIlxcXFxcXFwiXCIsXCLigKBcIjpcIitcIixcIuKAolwiOlwiKlwiLFwi4oCmXCI6XCIuLi5cIixcIuKCoFwiOlwiZWN1XCIsXCLigqJcIjpcImNydXplaXJvXCIsXCLigqNcIjpcImZyZW5jaCBmcmFuY1wiLFwi4oKkXCI6XCJsaXJhXCIsXCLigqVcIjpcIm1pbGxcIixcIuKCplwiOlwibmFpcmFcIixcIuKCp1wiOlwicGVzZXRhXCIsXCLigqhcIjpcInJ1cGVlXCIsXCLigqlcIjpcIndvblwiLFwi4oKqXCI6XCJuZXcgc2hlcXVlbFwiLFwi4oKrXCI6XCJkb25nXCIsXCLigqxcIjpcImV1cm9cIixcIuKCrVwiOlwia2lwXCIsXCLigq5cIjpcInR1Z3Jpa1wiLFwi4oKvXCI6XCJkcmFjaG1hXCIsXCLigrBcIjpcInBlbm55XCIsXCLigrFcIjpcInBlc29cIixcIuKCslwiOlwiZ3VhcmFuaVwiLFwi4oKzXCI6XCJhdXN0cmFsXCIsXCLigrRcIjpcImhyeXZuaWFcIixcIuKCtVwiOlwiY2VkaVwiLFwi4oK5XCI6XCJpbmRpYW4gcnVwZWVcIixcIuKCvVwiOlwicnVzc2lhbiBydWJsZVwiLFwi4oSgXCI6XCJzbVwiLFwi4oSiXCI6XCJ0bVwiLFwi4oiCXCI6XCJkXCIsXCLiiIZcIjpcImRlbHRhXCIsXCLiiJFcIjpcInN1bVwiLFwi4oieXCI6XCJpbmZpbml0eVwiLFwi4pmlXCI6XCJsb3ZlXCIsXCLlhYNcIjpcInl1YW5cIixcIuWGhlwiOlwieWVuXCIsXCLvt7xcIjpcInJpYWxcIn0nKVxuICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgZnVuY3Rpb24gcmVwbGFjZSAoc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NsdWdpZnk6IHN0cmluZyBhcmd1bWVudCBleHBlY3RlZCcpXG4gICAgfVxuXG4gICAgb3B0aW9ucyA9ICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpXG4gICAgICA/IHtyZXBsYWNlbWVudDogb3B0aW9uc31cbiAgICAgIDogb3B0aW9ucyB8fCB7fVxuXG4gICAgdmFyIHNsdWcgPSBzdHJpbmcuc3BsaXQoJycpXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGNoKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAoY2hhck1hcFtjaF0gfHwgY2gpXG4gICAgICAgICAgLy8gYWxsb3dlZFxuICAgICAgICAgIC5yZXBsYWNlKG9wdGlvbnMucmVtb3ZlIHx8IC9bXlxcd1xccyQqXyt+LigpJ1wiIVxcLTpAXS9nLCAnJylcbiAgICAgIH0sICcnKVxuICAgICAgLy8gdHJpbSBsZWFkaW5nL3RyYWlsaW5nIHNwYWNlc1xuICAgICAgLnRyaW0oKVxuICAgICAgLy8gY29udmVydCBzcGFjZXNcbiAgICAgIC5yZXBsYWNlKC9bLVxcc10rL2csIG9wdGlvbnMucmVwbGFjZW1lbnQgfHwgJy0nKVxuICAgICAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNlcGFyYXRvclxuICAgICAgLnJlcGxhY2UoJyN7cmVwbGFjZW1lbnR9JCcsICcnKVxuXG4gICAgcmV0dXJuIG9wdGlvbnMubG93ZXIgPyBzbHVnLnRvTG93ZXJDYXNlKCkgOiBzbHVnXG4gIH1cblxuICByZXBsYWNlLmV4dGVuZCA9IGZ1bmN0aW9uIChjdXN0b21NYXApIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gY3VzdG9tTWFwKSB7XG4gICAgICBjaGFyTWFwW2tleV0gPSBjdXN0b21NYXBba2V5XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXBsYWNlXG59KSlcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHsgXG5cbiAgZXhwb3J0cy5jb3JzRW5hYmxlZEZ1bmN0aW9uID0gKHJlcSwgcmVzKSA9PiB7XG4gICAgLy8gU2V0IENPUlMgaGVhZGVyc1xuICAgIC8vIGUuZy4gYWxsb3cgR0VUcyBmcm9tIGFueSBvcmlnaW4gd2l0aCB0aGUgQ29udGVudC1UeXBlIGhlYWRlclxuICAgIC8vIGFuZCBjYWNoZSBwcmVmbGlnaHQgcmVzcG9uc2UgZm9yIGFuIDM2MDBzXG4gICAgcmVzLnNldChcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcIipcIik7XG4gICAgcmVzLnNldChcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIiwgXCJHRVRcIik7XG4gICAgcmVzLnNldChcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIiwgXCJDb250ZW50LVR5cGVcIik7XG4gICAgcmVzLnNldChcIkFjY2Vzcy1Db250cm9sLU1heC1BZ2VcIiwgXCIzNjAwXCIpO1xuICAgIC8vIFNlbmQgcmVzcG9uc2UgdG8gT1BUSU9OUyByZXF1ZXN0cyBhbmQgdGVybWluYXRlIHRoZSBmdW5jdGlvbiBleGVjdXRpb25cbiAgICBpZiAocmVxLm1ldGhvZCA9PSAnT1BUSU9OUycpIHtcbiAgICAgIHJlcy5zdGF0dXMoMjA0KS5zZW5kKCcnKTtcbiAgICB9XG4gICAgLy8gQ29udGludWUgd2l0aCBmdW5jdGlvbiBjb2RlXG4gICAgXG4gIH1cblxufSkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIHNsdWdpZnkgPSByZXF1aXJlKCdzbHVnaWZ5JylcblxuICAkLmdldEpTT04oIFwiLi4vZGF0YS90b3BfYXJ0aWNsZXMuanNvblwiLCBmdW5jdGlvbiggZGF0YSApIHtcblxuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICRsaXN0ID0gJCggXCIjbGlzdC1vZi1hcnRpY2xlc1wiKVxuXG4gICAgLy8gY29uc29sZS5sb2coZGF0YS50b3BfYXJ0aWNsZXMpXG4gICAgZGF0YS50b3BfYXJ0aWNsZXMuZm9yRWFjaChlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUudXJsKVxuICAgICAgJGxpID0gJCgnPGxpPjxhIGhyZWY9XCIvYXJ0aWNsZS8nICsgc2x1Z2lmeShlLm5hbWUpICsgJ1wiPicgKyBlLm5hbWUgKyAnPC9hPjwvbGk+JylcbiAgICAgICRsaXN0LmFwcGVuZCgkbGkpXG4gICAgfSk7XG4gICBcbiAgfSk7XG5cbiAgZnVuY3Rpb24gc2VhcmNoX3VybCgpIHtcbiAgICB1cmwgPSAkKFwiI3lvdXItdXJsXCIpLnRleHQoKVxuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vdXMtY2VudHJhbDEtY2Rzcy0yMDE4LmNsb3VkZnVuY3Rpb25zLm5ldC9mdW5jdGlvbi1hcnRpY2xlLWluZm9cIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogXCJ1cmxcIlxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIC8vZG8gc29tZXRoaW5nIHdoZW4gcmVxdWVzdCBpcyBzdWNjZXNzZnVsbFxuICAgICAgfSxcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIlxuICAgIH0pO1xuICB9XG5cbn0pIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkgeyBcbiAgXG59KSIsImZ1bmN0aW9uIHNldHVwSW5kZXgoKSB7XG4gIHJlcXVpcmUoJy4vaW5kZXgnKVxufVxuXG5mdW5jdGlvbiBzZXR1cEFydGljbGUoKSB7XG4gIHJlcXVpcmUoJy4vYXJ0aWNsZScpXG59XG5cbmZ1bmN0aW9uIHNldHVwUHVibGlzaGVyKCkge1xuICByZXF1aXJlKCcuL3B1Ymxpc2hlcicpXG59XG5cblxud2luZG93LmV4cG9ydGVkRnVuY3Rpb25zID0ge1xuICBcInNldHVwSW5kZXhcIjogc2V0dXBJbmRleCxcbiAgXCJzZXR1cEFydGljbGVcIjogc2V0dXBBcnRpY2xlLFxuICBcInNldHVwUHVibGlzaGVyXCI6IHNldHVwUHVibGlzaGVyLFxufTsiXX0=
