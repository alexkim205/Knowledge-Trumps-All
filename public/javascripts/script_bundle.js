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

  

})
},{}],3:[function(require,module,exports){
$(document).ready(function () {

  var slugify = require('slugify')

  // $.getJSON("../data/top_articles.json", function (data) {

  //   var items = [];
  //   $list = $("#list-of-articles")

  //   // console.log(data.top_articles)
  //   data.top_articles.forEach(e => {
  //     console.log(e.url)
  //     $li = $('<li><a href="/article/' + slugify(e.name) + '">' + e.name + '</a></li>')
  //     $list.append($li)
  //   });

  // });

  $("#button").click(function () {
    $url = $("#your-url").val()
    console.log("BUTTON CLICKED")
    console.log($url)

    $.ajax({
      type: "POST",
      url: "https://us-central1-cdss-2018.cloudfunctions.net/function-article-info",
      data: {
        name: $url
      },
      success: function (data) {
        console.log(data);

      },
      dataType: "json"
    })

    data = `
    title: California HS students spell racial slur on lettered T-shirts  
    keywords: ['week', 'tshirts', 'senior', 'racial', 'school', 'escondido', 'california', 'spell', 'cnn', 'district', 'students', 'high', 'hs', 'slur', 'union', 'lettered'] |
    summary: (CNN) A group of Southern California high school students face disciplinary action after spelling out the n-word with lettered T-shirts at a senior picnic. The Escondido Union High School District this week confirmed that about 10 students at a senior event "made a poor decision" by participating in the stunt involving the racial slur, CNN affiliate KGTV reported. "We are a campus that prides itself on inclusion and embraces diversity," Principal Adriana Lepe-Ramirez said in a statement. "We will not tolerate actions that send messages of racism and promote divisiveness." The statement said Escondido High School, district officials and local police were investigating the incident, the station reported..
    `
    // // json = JSON.parse(data)
    // title = "California HS students spell racial slur on lettered T-shirts" //json.title
    // keywords = "['week', 'tshirts', 'senior', 'racial', 'school', 'escondido', 'california', 'spell', 'cnn', 'district', 'students', 'high', 'hs', 'slur', 'union', 'lettered']"
    // summary = "(CNN) A group of Southern California high school students face disciplinary action after spelling out the n-word with lettered T-shirts at a senior picnic. The Escondido Union High School District this week confirmed that about 10 students at a senior event "made a poor decision" by participating in the stunt involving the racial slur, CNN affiliate KGTV reported. "We are a campus that prides itself on inclusion and embraces diversity," Principal Adriana Lepe-Ramirez said in a statement. "We will not tolerate actions that send messages of racism and promote divisiveness." The statement said Escondido High School, district officials and local police were investigating the incident, the station reported.."
    function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        }
      }
    }
    sleep(2000)
    window.location.replace("/article/id");

  })

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvc2x1Z2lmeS9pbmRleC5qcyIsInB1YmxpYy9qYXZhc2NyaXB0cy9hcnRpY2xlLmpzIiwicHVibGljL2phdmFzY3JpcHRzL2luZGV4LmpzIiwicHVibGljL2phdmFzY3JpcHRzL3B1Ymxpc2hlci5qcyIsInB1YmxpYy9qYXZhc2NyaXB0cy9zY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXG47KGZ1bmN0aW9uIChuYW1lLCByb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKVxuICAgIG1vZHVsZS5leHBvcnRzWydkZWZhdWx0J10gPSBmYWN0b3J5KClcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZmFjdG9yeSlcbiAgfVxuICBlbHNlIHtcbiAgICByb290W25hbWVdID0gZmFjdG9yeSgpXG4gIH1cbn0oJ3NsdWdpZnknLCB0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gIHZhciBjaGFyTWFwID0gSlNPTi5wYXJzZSgne1wiJFwiOlwiZG9sbGFyXCIsXCImXCI6XCJhbmRcIixcIjxcIjpcImxlc3NcIixcIj5cIjpcImdyZWF0ZXJcIixcInxcIjpcIm9yXCIsXCLColwiOlwiY2VudFwiLFwiwqNcIjpcInBvdW5kXCIsXCLCpFwiOlwiY3VycmVuY3lcIixcIsKlXCI6XCJ5ZW5cIixcIsKpXCI6XCIoYylcIixcIsKqXCI6XCJhXCIsXCLCrlwiOlwiKHIpXCIsXCLCulwiOlwib1wiLFwiw4BcIjpcIkFcIixcIsOBXCI6XCJBXCIsXCLDglwiOlwiQVwiLFwiw4NcIjpcIkFcIixcIsOEXCI6XCJBXCIsXCLDhVwiOlwiQVwiLFwiw4ZcIjpcIkFFXCIsXCLDh1wiOlwiQ1wiLFwiw4hcIjpcIkVcIixcIsOJXCI6XCJFXCIsXCLDilwiOlwiRVwiLFwiw4tcIjpcIkVcIixcIsOMXCI6XCJJXCIsXCLDjVwiOlwiSVwiLFwiw45cIjpcIklcIixcIsOPXCI6XCJJXCIsXCLDkFwiOlwiRFwiLFwiw5FcIjpcIk5cIixcIsOSXCI6XCJPXCIsXCLDk1wiOlwiT1wiLFwiw5RcIjpcIk9cIixcIsOVXCI6XCJPXCIsXCLDllwiOlwiT1wiLFwiw5hcIjpcIk9cIixcIsOZXCI6XCJVXCIsXCLDmlwiOlwiVVwiLFwiw5tcIjpcIlVcIixcIsOcXCI6XCJVXCIsXCLDnVwiOlwiWVwiLFwiw55cIjpcIlRIXCIsXCLDn1wiOlwic3NcIixcIsOgXCI6XCJhXCIsXCLDoVwiOlwiYVwiLFwiw6JcIjpcImFcIixcIsOjXCI6XCJhXCIsXCLDpFwiOlwiYVwiLFwiw6VcIjpcImFcIixcIsOmXCI6XCJhZVwiLFwiw6dcIjpcImNcIixcIsOoXCI6XCJlXCIsXCLDqVwiOlwiZVwiLFwiw6pcIjpcImVcIixcIsOrXCI6XCJlXCIsXCLDrFwiOlwiaVwiLFwiw61cIjpcImlcIixcIsOuXCI6XCJpXCIsXCLDr1wiOlwiaVwiLFwiw7BcIjpcImRcIixcIsOxXCI6XCJuXCIsXCLDslwiOlwib1wiLFwiw7NcIjpcIm9cIixcIsO0XCI6XCJvXCIsXCLDtVwiOlwib1wiLFwiw7ZcIjpcIm9cIixcIsO4XCI6XCJvXCIsXCLDuVwiOlwidVwiLFwiw7pcIjpcInVcIixcIsO7XCI6XCJ1XCIsXCLDvFwiOlwidVwiLFwiw71cIjpcInlcIixcIsO+XCI6XCJ0aFwiLFwiw79cIjpcInlcIixcIsSAXCI6XCJBXCIsXCLEgVwiOlwiYVwiLFwixIJcIjpcIkFcIixcIsSDXCI6XCJhXCIsXCLEhFwiOlwiQVwiLFwixIVcIjpcImFcIixcIsSGXCI6XCJDXCIsXCLEh1wiOlwiY1wiLFwixIxcIjpcIkNcIixcIsSNXCI6XCJjXCIsXCLEjlwiOlwiRFwiLFwixI9cIjpcImRcIixcIsSQXCI6XCJESlwiLFwixJFcIjpcImRqXCIsXCLEklwiOlwiRVwiLFwixJNcIjpcImVcIixcIsSWXCI6XCJFXCIsXCLEl1wiOlwiZVwiLFwixJhcIjpcImVcIixcIsSZXCI6XCJlXCIsXCLEmlwiOlwiRVwiLFwixJtcIjpcImVcIixcIsSeXCI6XCJHXCIsXCLEn1wiOlwiZ1wiLFwixKJcIjpcIkdcIixcIsSjXCI6XCJnXCIsXCLEqFwiOlwiSVwiLFwixKlcIjpcImlcIixcIsSqXCI6XCJpXCIsXCLEq1wiOlwiaVwiLFwixK5cIjpcIklcIixcIsSvXCI6XCJpXCIsXCLEsFwiOlwiSVwiLFwixLFcIjpcImlcIixcIsS2XCI6XCJrXCIsXCLEt1wiOlwia1wiLFwixLtcIjpcIkxcIixcIsS8XCI6XCJsXCIsXCLFgVwiOlwiTFwiLFwixYJcIjpcImxcIixcIsWDXCI6XCJOXCIsXCLFhFwiOlwiblwiLFwixYVcIjpcIk5cIixcIsWGXCI6XCJuXCIsXCLFh1wiOlwiTlwiLFwixYhcIjpcIm5cIixcIsWQXCI6XCJPXCIsXCLFkVwiOlwib1wiLFwixZJcIjpcIk9FXCIsXCLFk1wiOlwib2VcIixcIsWYXCI6XCJSXCIsXCLFmVwiOlwiclwiLFwixZpcIjpcIlNcIixcIsWbXCI6XCJzXCIsXCLFnlwiOlwiU1wiLFwixZ9cIjpcInNcIixcIsWgXCI6XCJTXCIsXCLFoVwiOlwic1wiLFwixaJcIjpcIlRcIixcIsWjXCI6XCJ0XCIsXCLFpFwiOlwiVFwiLFwixaVcIjpcInRcIixcIsWoXCI6XCJVXCIsXCLFqVwiOlwidVwiLFwixapcIjpcInVcIixcIsWrXCI6XCJ1XCIsXCLFrlwiOlwiVVwiLFwixa9cIjpcInVcIixcIsWwXCI6XCJVXCIsXCLFsVwiOlwidVwiLFwixbJcIjpcIlVcIixcIsWzXCI6XCJ1XCIsXCLFuVwiOlwiWlwiLFwixbpcIjpcInpcIixcIsW7XCI6XCJaXCIsXCLFvFwiOlwielwiLFwixb1cIjpcIlpcIixcIsW+XCI6XCJ6XCIsXCLGklwiOlwiZlwiLFwixqBcIjpcIk9cIixcIsahXCI6XCJvXCIsXCLGr1wiOlwiVVwiLFwixrBcIjpcInVcIixcIseIXCI6XCJMSlwiLFwix4lcIjpcImxqXCIsXCLHi1wiOlwiTkpcIixcIseMXCI6XCJualwiLFwiyJhcIjpcIlNcIixcIsiZXCI6XCJzXCIsXCLImlwiOlwiVFwiLFwiyJtcIjpcInRcIixcIsuaXCI6XCJvXCIsXCLOhlwiOlwiQVwiLFwizohcIjpcIkVcIixcIs6JXCI6XCJIXCIsXCLOilwiOlwiSVwiLFwizoxcIjpcIk9cIixcIs6OXCI6XCJZXCIsXCLOj1wiOlwiV1wiLFwizpBcIjpcImlcIixcIs6RXCI6XCJBXCIsXCLOklwiOlwiQlwiLFwizpNcIjpcIkdcIixcIs6UXCI6XCJEXCIsXCLOlVwiOlwiRVwiLFwizpZcIjpcIlpcIixcIs6XXCI6XCJIXCIsXCLOmFwiOlwiOFwiLFwizplcIjpcIklcIixcIs6aXCI6XCJLXCIsXCLOm1wiOlwiTFwiLFwizpxcIjpcIk1cIixcIs6dXCI6XCJOXCIsXCLOnlwiOlwiM1wiLFwizp9cIjpcIk9cIixcIs6gXCI6XCJQXCIsXCLOoVwiOlwiUlwiLFwizqNcIjpcIlNcIixcIs6kXCI6XCJUXCIsXCLOpVwiOlwiWVwiLFwizqZcIjpcIkZcIixcIs6nXCI6XCJYXCIsXCLOqFwiOlwiUFNcIixcIs6pXCI6XCJXXCIsXCLOqlwiOlwiSVwiLFwizqtcIjpcIllcIixcIs6sXCI6XCJhXCIsXCLOrVwiOlwiZVwiLFwizq5cIjpcImhcIixcIs6vXCI6XCJpXCIsXCLOsFwiOlwieVwiLFwizrFcIjpcImFcIixcIs6yXCI6XCJiXCIsXCLOs1wiOlwiZ1wiLFwizrRcIjpcImRcIixcIs61XCI6XCJlXCIsXCLOtlwiOlwielwiLFwizrdcIjpcImhcIixcIs64XCI6XCI4XCIsXCLOuVwiOlwiaVwiLFwizrpcIjpcImtcIixcIs67XCI6XCJsXCIsXCLOvFwiOlwibVwiLFwizr1cIjpcIm5cIixcIs6+XCI6XCIzXCIsXCLOv1wiOlwib1wiLFwiz4BcIjpcInBcIixcIs+BXCI6XCJyXCIsXCLPglwiOlwic1wiLFwiz4NcIjpcInNcIixcIs+EXCI6XCJ0XCIsXCLPhVwiOlwieVwiLFwiz4ZcIjpcImZcIixcIs+HXCI6XCJ4XCIsXCLPiFwiOlwicHNcIixcIs+JXCI6XCJ3XCIsXCLPilwiOlwiaVwiLFwiz4tcIjpcInlcIixcIs+MXCI6XCJvXCIsXCLPjVwiOlwieVwiLFwiz45cIjpcIndcIixcItCBXCI6XCJZb1wiLFwi0IJcIjpcIkRKXCIsXCLQhFwiOlwiWWVcIixcItCGXCI6XCJJXCIsXCLQh1wiOlwiWWlcIixcItCIXCI6XCJKXCIsXCLQiVwiOlwiTEpcIixcItCKXCI6XCJOSlwiLFwi0ItcIjpcIkNcIixcItCPXCI6XCJEWlwiLFwi0JBcIjpcIkFcIixcItCRXCI6XCJCXCIsXCLQklwiOlwiVlwiLFwi0JNcIjpcIkdcIixcItCUXCI6XCJEXCIsXCLQlVwiOlwiRVwiLFwi0JZcIjpcIlpoXCIsXCLQl1wiOlwiWlwiLFwi0JhcIjpcIklcIixcItCZXCI6XCJKXCIsXCLQmlwiOlwiS1wiLFwi0JtcIjpcIkxcIixcItCcXCI6XCJNXCIsXCLQnVwiOlwiTlwiLFwi0J5cIjpcIk9cIixcItCfXCI6XCJQXCIsXCLQoFwiOlwiUlwiLFwi0KFcIjpcIlNcIixcItCiXCI6XCJUXCIsXCLQo1wiOlwiVVwiLFwi0KRcIjpcIkZcIixcItClXCI6XCJIXCIsXCLQplwiOlwiQ1wiLFwi0KdcIjpcIkNoXCIsXCLQqFwiOlwiU2hcIixcItCpXCI6XCJTaFwiLFwi0KpcIjpcIlVcIixcItCrXCI6XCJZXCIsXCLQrFwiOlwiXCIsXCLQrVwiOlwiRVwiLFwi0K5cIjpcIll1XCIsXCLQr1wiOlwiWWFcIixcItCwXCI6XCJhXCIsXCLQsVwiOlwiYlwiLFwi0LJcIjpcInZcIixcItCzXCI6XCJnXCIsXCLQtFwiOlwiZFwiLFwi0LVcIjpcImVcIixcItC2XCI6XCJ6aFwiLFwi0LdcIjpcInpcIixcItC4XCI6XCJpXCIsXCLQuVwiOlwialwiLFwi0LpcIjpcImtcIixcItC7XCI6XCJsXCIsXCLQvFwiOlwibVwiLFwi0L1cIjpcIm5cIixcItC+XCI6XCJvXCIsXCLQv1wiOlwicFwiLFwi0YBcIjpcInJcIixcItGBXCI6XCJzXCIsXCLRglwiOlwidFwiLFwi0YNcIjpcInVcIixcItGEXCI6XCJmXCIsXCLRhVwiOlwiaFwiLFwi0YZcIjpcImNcIixcItGHXCI6XCJjaFwiLFwi0YhcIjpcInNoXCIsXCLRiVwiOlwic2hcIixcItGKXCI6XCJ1XCIsXCLRi1wiOlwieVwiLFwi0YxcIjpcIlwiLFwi0Y1cIjpcImVcIixcItGOXCI6XCJ5dVwiLFwi0Y9cIjpcInlhXCIsXCLRkVwiOlwieW9cIixcItGSXCI6XCJkalwiLFwi0ZRcIjpcInllXCIsXCLRllwiOlwiaVwiLFwi0ZdcIjpcInlpXCIsXCLRmFwiOlwialwiLFwi0ZlcIjpcImxqXCIsXCLRmlwiOlwibmpcIixcItGbXCI6XCJjXCIsXCLRn1wiOlwiZHpcIixcItKQXCI6XCJHXCIsXCLSkVwiOlwiZ1wiLFwi4Li/XCI6XCJiYWh0XCIsXCLhg5BcIjpcImFcIixcIuGDkVwiOlwiYlwiLFwi4YOSXCI6XCJnXCIsXCLhg5NcIjpcImRcIixcIuGDlFwiOlwiZVwiLFwi4YOVXCI6XCJ2XCIsXCLhg5ZcIjpcInpcIixcIuGDl1wiOlwidFwiLFwi4YOYXCI6XCJpXCIsXCLhg5lcIjpcImtcIixcIuGDmlwiOlwibFwiLFwi4YObXCI6XCJtXCIsXCLhg5xcIjpcIm5cIixcIuGDnVwiOlwib1wiLFwi4YOeXCI6XCJwXCIsXCLhg59cIjpcInpoXCIsXCLhg6BcIjpcInJcIixcIuGDoVwiOlwic1wiLFwi4YOiXCI6XCJ0XCIsXCLhg6NcIjpcInVcIixcIuGDpFwiOlwiZlwiLFwi4YOlXCI6XCJrXCIsXCLhg6ZcIjpcImdoXCIsXCLhg6dcIjpcInFcIixcIuGDqFwiOlwic2hcIixcIuGDqVwiOlwiY2hcIixcIuGDqlwiOlwidHNcIixcIuGDq1wiOlwiZHpcIixcIuGDrFwiOlwidHNcIixcIuGDrVwiOlwiY2hcIixcIuGDrlwiOlwia2hcIixcIuGDr1wiOlwialwiLFwi4YOwXCI6XCJoXCIsXCLhup5cIjpcIlNTXCIsXCLhuqBcIjpcIkFcIixcIuG6oVwiOlwiYVwiLFwi4bqiXCI6XCJBXCIsXCLhuqNcIjpcImFcIixcIuG6pFwiOlwiQVwiLFwi4bqlXCI6XCJhXCIsXCLhuqZcIjpcIkFcIixcIuG6p1wiOlwiYVwiLFwi4bqoXCI6XCJBXCIsXCLhuqlcIjpcImFcIixcIuG6qlwiOlwiQVwiLFwi4bqrXCI6XCJhXCIsXCLhuqxcIjpcIkFcIixcIuG6rVwiOlwiYVwiLFwi4bquXCI6XCJBXCIsXCLhuq9cIjpcImFcIixcIuG6sFwiOlwiQVwiLFwi4bqxXCI6XCJhXCIsXCLhurJcIjpcIkFcIixcIuG6s1wiOlwiYVwiLFwi4bq0XCI6XCJBXCIsXCLhurVcIjpcImFcIixcIuG6tlwiOlwiQVwiLFwi4bq3XCI6XCJhXCIsXCLhurhcIjpcIkVcIixcIuG6uVwiOlwiZVwiLFwi4bq6XCI6XCJFXCIsXCLhurtcIjpcImVcIixcIuG6vFwiOlwiRVwiLFwi4bq9XCI6XCJlXCIsXCLhur5cIjpcIkVcIixcIuG6v1wiOlwiZVwiLFwi4buAXCI6XCJFXCIsXCLhu4FcIjpcImVcIixcIuG7glwiOlwiRVwiLFwi4buDXCI6XCJlXCIsXCLhu4RcIjpcIkVcIixcIuG7hVwiOlwiZVwiLFwi4buGXCI6XCJFXCIsXCLhu4dcIjpcImVcIixcIuG7iFwiOlwiSVwiLFwi4buJXCI6XCJpXCIsXCLhu4pcIjpcIklcIixcIuG7i1wiOlwiaVwiLFwi4buMXCI6XCJPXCIsXCLhu41cIjpcIm9cIixcIuG7jlwiOlwiT1wiLFwi4buPXCI6XCJvXCIsXCLhu5BcIjpcIk9cIixcIuG7kVwiOlwib1wiLFwi4buSXCI6XCJPXCIsXCLhu5NcIjpcIm9cIixcIuG7lFwiOlwiT1wiLFwi4buVXCI6XCJvXCIsXCLhu5ZcIjpcIk9cIixcIuG7l1wiOlwib1wiLFwi4buYXCI6XCJPXCIsXCLhu5lcIjpcIm9cIixcIuG7mlwiOlwiT1wiLFwi4bubXCI6XCJvXCIsXCLhu5xcIjpcIk9cIixcIuG7nVwiOlwib1wiLFwi4bueXCI6XCJPXCIsXCLhu59cIjpcIm9cIixcIuG7oFwiOlwiT1wiLFwi4buhXCI6XCJvXCIsXCLhu6JcIjpcIk9cIixcIuG7o1wiOlwib1wiLFwi4bukXCI6XCJVXCIsXCLhu6VcIjpcInVcIixcIuG7plwiOlwiVVwiLFwi4bunXCI6XCJ1XCIsXCLhu6hcIjpcIlVcIixcIuG7qVwiOlwidVwiLFwi4buqXCI6XCJVXCIsXCLhu6tcIjpcInVcIixcIuG7rFwiOlwiVVwiLFwi4butXCI6XCJ1XCIsXCLhu65cIjpcIlVcIixcIuG7r1wiOlwidVwiLFwi4buwXCI6XCJVXCIsXCLhu7FcIjpcInVcIixcIuG7slwiOlwiWVwiLFwi4buzXCI6XCJ5XCIsXCLhu7RcIjpcIllcIixcIuG7tVwiOlwieVwiLFwi4bu2XCI6XCJZXCIsXCLhu7dcIjpcInlcIixcIuG7uFwiOlwiWVwiLFwi4bu5XCI6XCJ5XCIsXCLigJhcIjpcIlxcJ1wiLFwi4oCZXCI6XCJcXCdcIixcIuKAnFwiOlwiXFxcXFxcXCJcIixcIuKAnVwiOlwiXFxcXFxcXCJcIixcIuKAoFwiOlwiK1wiLFwi4oCiXCI6XCIqXCIsXCLigKZcIjpcIi4uLlwiLFwi4oKgXCI6XCJlY3VcIixcIuKColwiOlwiY3J1emVpcm9cIixcIuKCo1wiOlwiZnJlbmNoIGZyYW5jXCIsXCLigqRcIjpcImxpcmFcIixcIuKCpVwiOlwibWlsbFwiLFwi4oKmXCI6XCJuYWlyYVwiLFwi4oKnXCI6XCJwZXNldGFcIixcIuKCqFwiOlwicnVwZWVcIixcIuKCqVwiOlwid29uXCIsXCLigqpcIjpcIm5ldyBzaGVxdWVsXCIsXCLigqtcIjpcImRvbmdcIixcIuKCrFwiOlwiZXVyb1wiLFwi4oKtXCI6XCJraXBcIixcIuKCrlwiOlwidHVncmlrXCIsXCLigq9cIjpcImRyYWNobWFcIixcIuKCsFwiOlwicGVubnlcIixcIuKCsVwiOlwicGVzb1wiLFwi4oKyXCI6XCJndWFyYW5pXCIsXCLigrNcIjpcImF1c3RyYWxcIixcIuKCtFwiOlwiaHJ5dm5pYVwiLFwi4oK1XCI6XCJjZWRpXCIsXCLigrlcIjpcImluZGlhbiBydXBlZVwiLFwi4oK9XCI6XCJydXNzaWFuIHJ1YmxlXCIsXCLihKBcIjpcInNtXCIsXCLihKJcIjpcInRtXCIsXCLiiIJcIjpcImRcIixcIuKIhlwiOlwiZGVsdGFcIixcIuKIkVwiOlwic3VtXCIsXCLiiJ5cIjpcImluZmluaXR5XCIsXCLimaVcIjpcImxvdmVcIixcIuWFg1wiOlwieXVhblwiLFwi5YaGXCI6XCJ5ZW5cIixcIu+3vFwiOlwicmlhbFwifScpXG4gIC8qIGVzbGludC1lbmFibGUgKi9cblxuICBmdW5jdGlvbiByZXBsYWNlIChzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc2x1Z2lmeTogc3RyaW5nIGFyZ3VtZW50IGV4cGVjdGVkJylcbiAgICB9XG5cbiAgICBvcHRpb25zID0gKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJylcbiAgICAgID8ge3JlcGxhY2VtZW50OiBvcHRpb25zfVxuICAgICAgOiBvcHRpb25zIHx8IHt9XG5cbiAgICB2YXIgc2x1ZyA9IHN0cmluZy5zcGxpdCgnJylcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgY2gpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChjaGFyTWFwW2NoXSB8fCBjaClcbiAgICAgICAgICAvLyBhbGxvd2VkXG4gICAgICAgICAgLnJlcGxhY2Uob3B0aW9ucy5yZW1vdmUgfHwgL1teXFx3XFxzJCpfK34uKCknXCIhXFwtOkBdL2csICcnKVxuICAgICAgfSwgJycpXG4gICAgICAvLyB0cmltIGxlYWRpbmcvdHJhaWxpbmcgc3BhY2VzXG4gICAgICAudHJpbSgpXG4gICAgICAvLyBjb252ZXJ0IHNwYWNlc1xuICAgICAgLnJlcGxhY2UoL1stXFxzXSsvZywgb3B0aW9ucy5yZXBsYWNlbWVudCB8fCAnLScpXG4gICAgICAvLyByZW1vdmUgdHJhaWxpbmcgc2VwYXJhdG9yXG4gICAgICAucmVwbGFjZSgnI3tyZXBsYWNlbWVudH0kJywgJycpXG5cbiAgICByZXR1cm4gb3B0aW9ucy5sb3dlciA/IHNsdWcudG9Mb3dlckNhc2UoKSA6IHNsdWdcbiAgfVxuXG4gIHJlcGxhY2UuZXh0ZW5kID0gZnVuY3Rpb24gKGN1c3RvbU1hcCkge1xuICAgIGZvciAodmFyIGtleSBpbiBjdXN0b21NYXApIHtcbiAgICAgIGNoYXJNYXBba2V5XSA9IGN1c3RvbU1hcFtrZXldXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcGxhY2Vcbn0pKVxuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gIFxuXG59KSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICB2YXIgc2x1Z2lmeSA9IHJlcXVpcmUoJ3NsdWdpZnknKVxuXG4gIC8vICQuZ2V0SlNPTihcIi4uL2RhdGEvdG9wX2FydGljbGVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcblxuICAvLyAgIHZhciBpdGVtcyA9IFtdO1xuICAvLyAgICRsaXN0ID0gJChcIiNsaXN0LW9mLWFydGljbGVzXCIpXG5cbiAgLy8gICAvLyBjb25zb2xlLmxvZyhkYXRhLnRvcF9hcnRpY2xlcylcbiAgLy8gICBkYXRhLnRvcF9hcnRpY2xlcy5mb3JFYWNoKGUgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coZS51cmwpXG4gIC8vICAgICAkbGkgPSAkKCc8bGk+PGEgaHJlZj1cIi9hcnRpY2xlLycgKyBzbHVnaWZ5KGUubmFtZSkgKyAnXCI+JyArIGUubmFtZSArICc8L2E+PC9saT4nKVxuICAvLyAgICAgJGxpc3QuYXBwZW5kKCRsaSlcbiAgLy8gICB9KTtcblxuICAvLyB9KTtcblxuICAkKFwiI2J1dHRvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJHVybCA9ICQoXCIjeW91ci11cmxcIikudmFsKClcbiAgICBjb25zb2xlLmxvZyhcIkJVVFRPTiBDTElDS0VEXCIpXG4gICAgY29uc29sZS5sb2coJHVybClcblxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCJodHRwczovL3VzLWNlbnRyYWwxLWNkc3MtMjAxOC5jbG91ZGZ1bmN0aW9ucy5uZXQvZnVuY3Rpb24tYXJ0aWNsZS1pbmZvXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6ICR1cmxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgfSxcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIlxuICAgIH0pXG5cbiAgICBkYXRhID0gYFxuICAgIHRpdGxlOiBDYWxpZm9ybmlhIEhTIHN0dWRlbnRzIHNwZWxsIHJhY2lhbCBzbHVyIG9uIGxldHRlcmVkIFQtc2hpcnRzICBcbiAgICBrZXl3b3JkczogWyd3ZWVrJywgJ3RzaGlydHMnLCAnc2VuaW9yJywgJ3JhY2lhbCcsICdzY2hvb2wnLCAnZXNjb25kaWRvJywgJ2NhbGlmb3JuaWEnLCAnc3BlbGwnLCAnY25uJywgJ2Rpc3RyaWN0JywgJ3N0dWRlbnRzJywgJ2hpZ2gnLCAnaHMnLCAnc2x1cicsICd1bmlvbicsICdsZXR0ZXJlZCddIHxcbiAgICBzdW1tYXJ5OiAoQ05OKSBBIGdyb3VwIG9mIFNvdXRoZXJuIENhbGlmb3JuaWEgaGlnaCBzY2hvb2wgc3R1ZGVudHMgZmFjZSBkaXNjaXBsaW5hcnkgYWN0aW9uIGFmdGVyIHNwZWxsaW5nIG91dCB0aGUgbi13b3JkIHdpdGggbGV0dGVyZWQgVC1zaGlydHMgYXQgYSBzZW5pb3IgcGljbmljLiBUaGUgRXNjb25kaWRvIFVuaW9uIEhpZ2ggU2Nob29sIERpc3RyaWN0IHRoaXMgd2VlayBjb25maXJtZWQgdGhhdCBhYm91dCAxMCBzdHVkZW50cyBhdCBhIHNlbmlvciBldmVudCBcIm1hZGUgYSBwb29yIGRlY2lzaW9uXCIgYnkgcGFydGljaXBhdGluZyBpbiB0aGUgc3R1bnQgaW52b2x2aW5nIHRoZSByYWNpYWwgc2x1ciwgQ05OIGFmZmlsaWF0ZSBLR1RWIHJlcG9ydGVkLiBcIldlIGFyZSBhIGNhbXB1cyB0aGF0IHByaWRlcyBpdHNlbGYgb24gaW5jbHVzaW9uIGFuZCBlbWJyYWNlcyBkaXZlcnNpdHksXCIgUHJpbmNpcGFsIEFkcmlhbmEgTGVwZS1SYW1pcmV6IHNhaWQgaW4gYSBzdGF0ZW1lbnQuIFwiV2Ugd2lsbCBub3QgdG9sZXJhdGUgYWN0aW9ucyB0aGF0IHNlbmQgbWVzc2FnZXMgb2YgcmFjaXNtIGFuZCBwcm9tb3RlIGRpdmlzaXZlbmVzcy5cIiBUaGUgc3RhdGVtZW50IHNhaWQgRXNjb25kaWRvIEhpZ2ggU2Nob29sLCBkaXN0cmljdCBvZmZpY2lhbHMgYW5kIGxvY2FsIHBvbGljZSB3ZXJlIGludmVzdGlnYXRpbmcgdGhlIGluY2lkZW50LCB0aGUgc3RhdGlvbiByZXBvcnRlZC4uXG4gICAgYFxuICAgIC8vIC8vIGpzb24gPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgLy8gdGl0bGUgPSBcIkNhbGlmb3JuaWEgSFMgc3R1ZGVudHMgc3BlbGwgcmFjaWFsIHNsdXIgb24gbGV0dGVyZWQgVC1zaGlydHNcIiAvL2pzb24udGl0bGVcbiAgICAvLyBrZXl3b3JkcyA9IFwiWyd3ZWVrJywgJ3RzaGlydHMnLCAnc2VuaW9yJywgJ3JhY2lhbCcsICdzY2hvb2wnLCAnZXNjb25kaWRvJywgJ2NhbGlmb3JuaWEnLCAnc3BlbGwnLCAnY25uJywgJ2Rpc3RyaWN0JywgJ3N0dWRlbnRzJywgJ2hpZ2gnLCAnaHMnLCAnc2x1cicsICd1bmlvbicsICdsZXR0ZXJlZCddXCJcbiAgICAvLyBzdW1tYXJ5ID0gXCIoQ05OKSBBIGdyb3VwIG9mIFNvdXRoZXJuIENhbGlmb3JuaWEgaGlnaCBzY2hvb2wgc3R1ZGVudHMgZmFjZSBkaXNjaXBsaW5hcnkgYWN0aW9uIGFmdGVyIHNwZWxsaW5nIG91dCB0aGUgbi13b3JkIHdpdGggbGV0dGVyZWQgVC1zaGlydHMgYXQgYSBzZW5pb3IgcGljbmljLiBUaGUgRXNjb25kaWRvIFVuaW9uIEhpZ2ggU2Nob29sIERpc3RyaWN0IHRoaXMgd2VlayBjb25maXJtZWQgdGhhdCBhYm91dCAxMCBzdHVkZW50cyBhdCBhIHNlbmlvciBldmVudCBcIm1hZGUgYSBwb29yIGRlY2lzaW9uXCIgYnkgcGFydGljaXBhdGluZyBpbiB0aGUgc3R1bnQgaW52b2x2aW5nIHRoZSByYWNpYWwgc2x1ciwgQ05OIGFmZmlsaWF0ZSBLR1RWIHJlcG9ydGVkLiBcIldlIGFyZSBhIGNhbXB1cyB0aGF0IHByaWRlcyBpdHNlbGYgb24gaW5jbHVzaW9uIGFuZCBlbWJyYWNlcyBkaXZlcnNpdHksXCIgUHJpbmNpcGFsIEFkcmlhbmEgTGVwZS1SYW1pcmV6IHNhaWQgaW4gYSBzdGF0ZW1lbnQuIFwiV2Ugd2lsbCBub3QgdG9sZXJhdGUgYWN0aW9ucyB0aGF0IHNlbmQgbWVzc2FnZXMgb2YgcmFjaXNtIGFuZCBwcm9tb3RlIGRpdmlzaXZlbmVzcy5cIiBUaGUgc3RhdGVtZW50IHNhaWQgRXNjb25kaWRvIEhpZ2ggU2Nob29sLCBkaXN0cmljdCBvZmZpY2lhbHMgYW5kIGxvY2FsIHBvbGljZSB3ZXJlIGludmVzdGlnYXRpbmcgdGhlIGluY2lkZW50LCB0aGUgc3RhdGlvbiByZXBvcnRlZC4uXCJcbiAgICBmdW5jdGlvbiBzbGVlcChtaWxsaXNlY29uZHMpIHtcbiAgICAgIHZhciBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxZTc7IGkrKykge1xuICAgICAgICBpZiAoKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnQpID4gbWlsbGlzZWNvbmRzKXtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzbGVlcCgyMDAwKVxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL2FydGljbGUvaWRcIik7XG5cbiAgfSlcblxufSkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7IFxuICBcbn0pIiwiZnVuY3Rpb24gc2V0dXBJbmRleCgpIHtcbiAgcmVxdWlyZSgnLi9pbmRleCcpXG59XG5cbmZ1bmN0aW9uIHNldHVwQXJ0aWNsZSgpIHtcbiAgcmVxdWlyZSgnLi9hcnRpY2xlJylcbn1cblxuZnVuY3Rpb24gc2V0dXBQdWJsaXNoZXIoKSB7XG4gIHJlcXVpcmUoJy4vcHVibGlzaGVyJylcbn1cblxuXG53aW5kb3cuZXhwb3J0ZWRGdW5jdGlvbnMgPSB7XG4gIFwic2V0dXBJbmRleFwiOiBzZXR1cEluZGV4LFxuICBcInNldHVwQXJ0aWNsZVwiOiBzZXR1cEFydGljbGUsXG4gIFwic2V0dXBQdWJsaXNoZXJcIjogc2V0dXBQdWJsaXNoZXIsXG59OyJdfQ==
