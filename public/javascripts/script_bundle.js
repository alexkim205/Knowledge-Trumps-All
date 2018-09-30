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

  var margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40
    },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  /* 
   * value accessor - returns the value to encode for a given data object.
   * scale - maps value to a visual display encoding, such as a pixel position.
   * map function - maps from data value to display value
   * axis - sets up axis
   */

  // setup x 
  var xValue = function (d) {
      return d["Sentiment"];
    }, // data -> value
    xScale = d3.scale.linear().range([0, width]), // value -> display
    xMap = function (d) {
      return xScale(xValue(d));
    }, // data -> display
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");

  // setup y
  var yValue = function (d) {
      return d["Magnitude"];
    }, // data -> value
    yScale = d3.scale.linear().range([height, 0]), // value -> display
    yMap = function (d) {
      return yScale(yValue(d));
    }, // data -> display
    yAxis = d3.svg.axis().scale(yScale).orient("left");

  // setup fill color
  var cValue = function (d) {
      return d.Manufacturer;
    },
    color = d3.scale.category10();

  // add the graph canvas to the body of the webpage
  var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // add the tooltip area to the webpage
  var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  // load data
  d3.csv("cereal.csv", function (error, data) {

    // change string (from CSV) into number format
    data.forEach(function (d) {
      d.Calories = +d.Calories;
      d["Protein (g)"] = +d["Protein (g)"];
      //    console.log(d);
    });

    // don't want dots overlapping axis, so add in buffer to data domain
    xScale.domain([d3.min(data, xValue) - 1, d3.max(data, xValue) + 1]);
    yScale.domain([d3.min(data, yValue) - 1, d3.max(data, yValue) + 1]);

    // x-axis
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Calories");

    // y-axis
    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Protein (g)");

    // draw dots
    svg.selectAll(".dot")
      .data(data)
      .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", xMap)
      .attr("cy", yMap)
      .style("fill", function (d) {
        return color(cValue(d));
      })
      .on("mouseover", function (d) {
        tooltip.transition()
          .duration(200)
          .style("opacity", .9);
        tooltip.html(d["Cereal Name"] + "<br/> (" + xValue(d) +
            ", " + yValue(d) + ")")
          .style("left", (d3.event.pageX + 5) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
      })
      .on("mouseout", function (d) {
        tooltip.transition()
          .duration(500)
          .style("opacity", 0);
      });

    // draw legend
    var legend = svg.selectAll(".legend")
      .data(color.domain())
      .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function (d, i) {
        return "translate(0," + i * 20 + ")";
      });

    // draw legend colored rectangles
    legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

    // draw legend text
    legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function (d) {
        return d;
      })
  });

})
},{}],3:[function(require,module,exports){
$(document).ready(function () {

  var slugify = require('slugify')

  $.getJSON("../data/top_articles.json", function (data) {

    var items = [];
    $list = $("#list-of-articles")

    // console.log(data.top_articles)
    data.top_articles.forEach(e => {
      console.log(e.url)
      $li = $('<li><a href="/article/' + slugify(e.name) + '">' + e.name + '</a></li>')
      $list.append($li)
    });

  });

  $("#button").click(function () {
    url = $("#your-url").text()
    console.log("BUTTON CLICKED")

    $.ajax({
      type: "POST",
      url: "https://us-central1-cdss-2018.cloudfunctions.net/function-article-info",
      data: {
        name: "url"
      },
      success: function (data) {
        console.log(data);
        //do something when request is successfull
      },
      dataType: "json"
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvc2x1Z2lmeS9pbmRleC5qcyIsInB1YmxpYy9qYXZhc2NyaXB0cy9hcnRpY2xlLmpzIiwicHVibGljL2phdmFzY3JpcHRzL2luZGV4LmpzIiwicHVibGljL2phdmFzY3JpcHRzL3B1Ymxpc2hlci5qcyIsInB1YmxpYy9qYXZhc2NyaXB0cy9zY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXG47KGZ1bmN0aW9uIChuYW1lLCByb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKVxuICAgIG1vZHVsZS5leHBvcnRzWydkZWZhdWx0J10gPSBmYWN0b3J5KClcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZmFjdG9yeSlcbiAgfVxuICBlbHNlIHtcbiAgICByb290W25hbWVdID0gZmFjdG9yeSgpXG4gIH1cbn0oJ3NsdWdpZnknLCB0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gIHZhciBjaGFyTWFwID0gSlNPTi5wYXJzZSgne1wiJFwiOlwiZG9sbGFyXCIsXCImXCI6XCJhbmRcIixcIjxcIjpcImxlc3NcIixcIj5cIjpcImdyZWF0ZXJcIixcInxcIjpcIm9yXCIsXCLColwiOlwiY2VudFwiLFwiwqNcIjpcInBvdW5kXCIsXCLCpFwiOlwiY3VycmVuY3lcIixcIsKlXCI6XCJ5ZW5cIixcIsKpXCI6XCIoYylcIixcIsKqXCI6XCJhXCIsXCLCrlwiOlwiKHIpXCIsXCLCulwiOlwib1wiLFwiw4BcIjpcIkFcIixcIsOBXCI6XCJBXCIsXCLDglwiOlwiQVwiLFwiw4NcIjpcIkFcIixcIsOEXCI6XCJBXCIsXCLDhVwiOlwiQVwiLFwiw4ZcIjpcIkFFXCIsXCLDh1wiOlwiQ1wiLFwiw4hcIjpcIkVcIixcIsOJXCI6XCJFXCIsXCLDilwiOlwiRVwiLFwiw4tcIjpcIkVcIixcIsOMXCI6XCJJXCIsXCLDjVwiOlwiSVwiLFwiw45cIjpcIklcIixcIsOPXCI6XCJJXCIsXCLDkFwiOlwiRFwiLFwiw5FcIjpcIk5cIixcIsOSXCI6XCJPXCIsXCLDk1wiOlwiT1wiLFwiw5RcIjpcIk9cIixcIsOVXCI6XCJPXCIsXCLDllwiOlwiT1wiLFwiw5hcIjpcIk9cIixcIsOZXCI6XCJVXCIsXCLDmlwiOlwiVVwiLFwiw5tcIjpcIlVcIixcIsOcXCI6XCJVXCIsXCLDnVwiOlwiWVwiLFwiw55cIjpcIlRIXCIsXCLDn1wiOlwic3NcIixcIsOgXCI6XCJhXCIsXCLDoVwiOlwiYVwiLFwiw6JcIjpcImFcIixcIsOjXCI6XCJhXCIsXCLDpFwiOlwiYVwiLFwiw6VcIjpcImFcIixcIsOmXCI6XCJhZVwiLFwiw6dcIjpcImNcIixcIsOoXCI6XCJlXCIsXCLDqVwiOlwiZVwiLFwiw6pcIjpcImVcIixcIsOrXCI6XCJlXCIsXCLDrFwiOlwiaVwiLFwiw61cIjpcImlcIixcIsOuXCI6XCJpXCIsXCLDr1wiOlwiaVwiLFwiw7BcIjpcImRcIixcIsOxXCI6XCJuXCIsXCLDslwiOlwib1wiLFwiw7NcIjpcIm9cIixcIsO0XCI6XCJvXCIsXCLDtVwiOlwib1wiLFwiw7ZcIjpcIm9cIixcIsO4XCI6XCJvXCIsXCLDuVwiOlwidVwiLFwiw7pcIjpcInVcIixcIsO7XCI6XCJ1XCIsXCLDvFwiOlwidVwiLFwiw71cIjpcInlcIixcIsO+XCI6XCJ0aFwiLFwiw79cIjpcInlcIixcIsSAXCI6XCJBXCIsXCLEgVwiOlwiYVwiLFwixIJcIjpcIkFcIixcIsSDXCI6XCJhXCIsXCLEhFwiOlwiQVwiLFwixIVcIjpcImFcIixcIsSGXCI6XCJDXCIsXCLEh1wiOlwiY1wiLFwixIxcIjpcIkNcIixcIsSNXCI6XCJjXCIsXCLEjlwiOlwiRFwiLFwixI9cIjpcImRcIixcIsSQXCI6XCJESlwiLFwixJFcIjpcImRqXCIsXCLEklwiOlwiRVwiLFwixJNcIjpcImVcIixcIsSWXCI6XCJFXCIsXCLEl1wiOlwiZVwiLFwixJhcIjpcImVcIixcIsSZXCI6XCJlXCIsXCLEmlwiOlwiRVwiLFwixJtcIjpcImVcIixcIsSeXCI6XCJHXCIsXCLEn1wiOlwiZ1wiLFwixKJcIjpcIkdcIixcIsSjXCI6XCJnXCIsXCLEqFwiOlwiSVwiLFwixKlcIjpcImlcIixcIsSqXCI6XCJpXCIsXCLEq1wiOlwiaVwiLFwixK5cIjpcIklcIixcIsSvXCI6XCJpXCIsXCLEsFwiOlwiSVwiLFwixLFcIjpcImlcIixcIsS2XCI6XCJrXCIsXCLEt1wiOlwia1wiLFwixLtcIjpcIkxcIixcIsS8XCI6XCJsXCIsXCLFgVwiOlwiTFwiLFwixYJcIjpcImxcIixcIsWDXCI6XCJOXCIsXCLFhFwiOlwiblwiLFwixYVcIjpcIk5cIixcIsWGXCI6XCJuXCIsXCLFh1wiOlwiTlwiLFwixYhcIjpcIm5cIixcIsWQXCI6XCJPXCIsXCLFkVwiOlwib1wiLFwixZJcIjpcIk9FXCIsXCLFk1wiOlwib2VcIixcIsWYXCI6XCJSXCIsXCLFmVwiOlwiclwiLFwixZpcIjpcIlNcIixcIsWbXCI6XCJzXCIsXCLFnlwiOlwiU1wiLFwixZ9cIjpcInNcIixcIsWgXCI6XCJTXCIsXCLFoVwiOlwic1wiLFwixaJcIjpcIlRcIixcIsWjXCI6XCJ0XCIsXCLFpFwiOlwiVFwiLFwixaVcIjpcInRcIixcIsWoXCI6XCJVXCIsXCLFqVwiOlwidVwiLFwixapcIjpcInVcIixcIsWrXCI6XCJ1XCIsXCLFrlwiOlwiVVwiLFwixa9cIjpcInVcIixcIsWwXCI6XCJVXCIsXCLFsVwiOlwidVwiLFwixbJcIjpcIlVcIixcIsWzXCI6XCJ1XCIsXCLFuVwiOlwiWlwiLFwixbpcIjpcInpcIixcIsW7XCI6XCJaXCIsXCLFvFwiOlwielwiLFwixb1cIjpcIlpcIixcIsW+XCI6XCJ6XCIsXCLGklwiOlwiZlwiLFwixqBcIjpcIk9cIixcIsahXCI6XCJvXCIsXCLGr1wiOlwiVVwiLFwixrBcIjpcInVcIixcIseIXCI6XCJMSlwiLFwix4lcIjpcImxqXCIsXCLHi1wiOlwiTkpcIixcIseMXCI6XCJualwiLFwiyJhcIjpcIlNcIixcIsiZXCI6XCJzXCIsXCLImlwiOlwiVFwiLFwiyJtcIjpcInRcIixcIsuaXCI6XCJvXCIsXCLOhlwiOlwiQVwiLFwizohcIjpcIkVcIixcIs6JXCI6XCJIXCIsXCLOilwiOlwiSVwiLFwizoxcIjpcIk9cIixcIs6OXCI6XCJZXCIsXCLOj1wiOlwiV1wiLFwizpBcIjpcImlcIixcIs6RXCI6XCJBXCIsXCLOklwiOlwiQlwiLFwizpNcIjpcIkdcIixcIs6UXCI6XCJEXCIsXCLOlVwiOlwiRVwiLFwizpZcIjpcIlpcIixcIs6XXCI6XCJIXCIsXCLOmFwiOlwiOFwiLFwizplcIjpcIklcIixcIs6aXCI6XCJLXCIsXCLOm1wiOlwiTFwiLFwizpxcIjpcIk1cIixcIs6dXCI6XCJOXCIsXCLOnlwiOlwiM1wiLFwizp9cIjpcIk9cIixcIs6gXCI6XCJQXCIsXCLOoVwiOlwiUlwiLFwizqNcIjpcIlNcIixcIs6kXCI6XCJUXCIsXCLOpVwiOlwiWVwiLFwizqZcIjpcIkZcIixcIs6nXCI6XCJYXCIsXCLOqFwiOlwiUFNcIixcIs6pXCI6XCJXXCIsXCLOqlwiOlwiSVwiLFwizqtcIjpcIllcIixcIs6sXCI6XCJhXCIsXCLOrVwiOlwiZVwiLFwizq5cIjpcImhcIixcIs6vXCI6XCJpXCIsXCLOsFwiOlwieVwiLFwizrFcIjpcImFcIixcIs6yXCI6XCJiXCIsXCLOs1wiOlwiZ1wiLFwizrRcIjpcImRcIixcIs61XCI6XCJlXCIsXCLOtlwiOlwielwiLFwizrdcIjpcImhcIixcIs64XCI6XCI4XCIsXCLOuVwiOlwiaVwiLFwizrpcIjpcImtcIixcIs67XCI6XCJsXCIsXCLOvFwiOlwibVwiLFwizr1cIjpcIm5cIixcIs6+XCI6XCIzXCIsXCLOv1wiOlwib1wiLFwiz4BcIjpcInBcIixcIs+BXCI6XCJyXCIsXCLPglwiOlwic1wiLFwiz4NcIjpcInNcIixcIs+EXCI6XCJ0XCIsXCLPhVwiOlwieVwiLFwiz4ZcIjpcImZcIixcIs+HXCI6XCJ4XCIsXCLPiFwiOlwicHNcIixcIs+JXCI6XCJ3XCIsXCLPilwiOlwiaVwiLFwiz4tcIjpcInlcIixcIs+MXCI6XCJvXCIsXCLPjVwiOlwieVwiLFwiz45cIjpcIndcIixcItCBXCI6XCJZb1wiLFwi0IJcIjpcIkRKXCIsXCLQhFwiOlwiWWVcIixcItCGXCI6XCJJXCIsXCLQh1wiOlwiWWlcIixcItCIXCI6XCJKXCIsXCLQiVwiOlwiTEpcIixcItCKXCI6XCJOSlwiLFwi0ItcIjpcIkNcIixcItCPXCI6XCJEWlwiLFwi0JBcIjpcIkFcIixcItCRXCI6XCJCXCIsXCLQklwiOlwiVlwiLFwi0JNcIjpcIkdcIixcItCUXCI6XCJEXCIsXCLQlVwiOlwiRVwiLFwi0JZcIjpcIlpoXCIsXCLQl1wiOlwiWlwiLFwi0JhcIjpcIklcIixcItCZXCI6XCJKXCIsXCLQmlwiOlwiS1wiLFwi0JtcIjpcIkxcIixcItCcXCI6XCJNXCIsXCLQnVwiOlwiTlwiLFwi0J5cIjpcIk9cIixcItCfXCI6XCJQXCIsXCLQoFwiOlwiUlwiLFwi0KFcIjpcIlNcIixcItCiXCI6XCJUXCIsXCLQo1wiOlwiVVwiLFwi0KRcIjpcIkZcIixcItClXCI6XCJIXCIsXCLQplwiOlwiQ1wiLFwi0KdcIjpcIkNoXCIsXCLQqFwiOlwiU2hcIixcItCpXCI6XCJTaFwiLFwi0KpcIjpcIlVcIixcItCrXCI6XCJZXCIsXCLQrFwiOlwiXCIsXCLQrVwiOlwiRVwiLFwi0K5cIjpcIll1XCIsXCLQr1wiOlwiWWFcIixcItCwXCI6XCJhXCIsXCLQsVwiOlwiYlwiLFwi0LJcIjpcInZcIixcItCzXCI6XCJnXCIsXCLQtFwiOlwiZFwiLFwi0LVcIjpcImVcIixcItC2XCI6XCJ6aFwiLFwi0LdcIjpcInpcIixcItC4XCI6XCJpXCIsXCLQuVwiOlwialwiLFwi0LpcIjpcImtcIixcItC7XCI6XCJsXCIsXCLQvFwiOlwibVwiLFwi0L1cIjpcIm5cIixcItC+XCI6XCJvXCIsXCLQv1wiOlwicFwiLFwi0YBcIjpcInJcIixcItGBXCI6XCJzXCIsXCLRglwiOlwidFwiLFwi0YNcIjpcInVcIixcItGEXCI6XCJmXCIsXCLRhVwiOlwiaFwiLFwi0YZcIjpcImNcIixcItGHXCI6XCJjaFwiLFwi0YhcIjpcInNoXCIsXCLRiVwiOlwic2hcIixcItGKXCI6XCJ1XCIsXCLRi1wiOlwieVwiLFwi0YxcIjpcIlwiLFwi0Y1cIjpcImVcIixcItGOXCI6XCJ5dVwiLFwi0Y9cIjpcInlhXCIsXCLRkVwiOlwieW9cIixcItGSXCI6XCJkalwiLFwi0ZRcIjpcInllXCIsXCLRllwiOlwiaVwiLFwi0ZdcIjpcInlpXCIsXCLRmFwiOlwialwiLFwi0ZlcIjpcImxqXCIsXCLRmlwiOlwibmpcIixcItGbXCI6XCJjXCIsXCLRn1wiOlwiZHpcIixcItKQXCI6XCJHXCIsXCLSkVwiOlwiZ1wiLFwi4Li/XCI6XCJiYWh0XCIsXCLhg5BcIjpcImFcIixcIuGDkVwiOlwiYlwiLFwi4YOSXCI6XCJnXCIsXCLhg5NcIjpcImRcIixcIuGDlFwiOlwiZVwiLFwi4YOVXCI6XCJ2XCIsXCLhg5ZcIjpcInpcIixcIuGDl1wiOlwidFwiLFwi4YOYXCI6XCJpXCIsXCLhg5lcIjpcImtcIixcIuGDmlwiOlwibFwiLFwi4YObXCI6XCJtXCIsXCLhg5xcIjpcIm5cIixcIuGDnVwiOlwib1wiLFwi4YOeXCI6XCJwXCIsXCLhg59cIjpcInpoXCIsXCLhg6BcIjpcInJcIixcIuGDoVwiOlwic1wiLFwi4YOiXCI6XCJ0XCIsXCLhg6NcIjpcInVcIixcIuGDpFwiOlwiZlwiLFwi4YOlXCI6XCJrXCIsXCLhg6ZcIjpcImdoXCIsXCLhg6dcIjpcInFcIixcIuGDqFwiOlwic2hcIixcIuGDqVwiOlwiY2hcIixcIuGDqlwiOlwidHNcIixcIuGDq1wiOlwiZHpcIixcIuGDrFwiOlwidHNcIixcIuGDrVwiOlwiY2hcIixcIuGDrlwiOlwia2hcIixcIuGDr1wiOlwialwiLFwi4YOwXCI6XCJoXCIsXCLhup5cIjpcIlNTXCIsXCLhuqBcIjpcIkFcIixcIuG6oVwiOlwiYVwiLFwi4bqiXCI6XCJBXCIsXCLhuqNcIjpcImFcIixcIuG6pFwiOlwiQVwiLFwi4bqlXCI6XCJhXCIsXCLhuqZcIjpcIkFcIixcIuG6p1wiOlwiYVwiLFwi4bqoXCI6XCJBXCIsXCLhuqlcIjpcImFcIixcIuG6qlwiOlwiQVwiLFwi4bqrXCI6XCJhXCIsXCLhuqxcIjpcIkFcIixcIuG6rVwiOlwiYVwiLFwi4bquXCI6XCJBXCIsXCLhuq9cIjpcImFcIixcIuG6sFwiOlwiQVwiLFwi4bqxXCI6XCJhXCIsXCLhurJcIjpcIkFcIixcIuG6s1wiOlwiYVwiLFwi4bq0XCI6XCJBXCIsXCLhurVcIjpcImFcIixcIuG6tlwiOlwiQVwiLFwi4bq3XCI6XCJhXCIsXCLhurhcIjpcIkVcIixcIuG6uVwiOlwiZVwiLFwi4bq6XCI6XCJFXCIsXCLhurtcIjpcImVcIixcIuG6vFwiOlwiRVwiLFwi4bq9XCI6XCJlXCIsXCLhur5cIjpcIkVcIixcIuG6v1wiOlwiZVwiLFwi4buAXCI6XCJFXCIsXCLhu4FcIjpcImVcIixcIuG7glwiOlwiRVwiLFwi4buDXCI6XCJlXCIsXCLhu4RcIjpcIkVcIixcIuG7hVwiOlwiZVwiLFwi4buGXCI6XCJFXCIsXCLhu4dcIjpcImVcIixcIuG7iFwiOlwiSVwiLFwi4buJXCI6XCJpXCIsXCLhu4pcIjpcIklcIixcIuG7i1wiOlwiaVwiLFwi4buMXCI6XCJPXCIsXCLhu41cIjpcIm9cIixcIuG7jlwiOlwiT1wiLFwi4buPXCI6XCJvXCIsXCLhu5BcIjpcIk9cIixcIuG7kVwiOlwib1wiLFwi4buSXCI6XCJPXCIsXCLhu5NcIjpcIm9cIixcIuG7lFwiOlwiT1wiLFwi4buVXCI6XCJvXCIsXCLhu5ZcIjpcIk9cIixcIuG7l1wiOlwib1wiLFwi4buYXCI6XCJPXCIsXCLhu5lcIjpcIm9cIixcIuG7mlwiOlwiT1wiLFwi4bubXCI6XCJvXCIsXCLhu5xcIjpcIk9cIixcIuG7nVwiOlwib1wiLFwi4bueXCI6XCJPXCIsXCLhu59cIjpcIm9cIixcIuG7oFwiOlwiT1wiLFwi4buhXCI6XCJvXCIsXCLhu6JcIjpcIk9cIixcIuG7o1wiOlwib1wiLFwi4bukXCI6XCJVXCIsXCLhu6VcIjpcInVcIixcIuG7plwiOlwiVVwiLFwi4bunXCI6XCJ1XCIsXCLhu6hcIjpcIlVcIixcIuG7qVwiOlwidVwiLFwi4buqXCI6XCJVXCIsXCLhu6tcIjpcInVcIixcIuG7rFwiOlwiVVwiLFwi4butXCI6XCJ1XCIsXCLhu65cIjpcIlVcIixcIuG7r1wiOlwidVwiLFwi4buwXCI6XCJVXCIsXCLhu7FcIjpcInVcIixcIuG7slwiOlwiWVwiLFwi4buzXCI6XCJ5XCIsXCLhu7RcIjpcIllcIixcIuG7tVwiOlwieVwiLFwi4bu2XCI6XCJZXCIsXCLhu7dcIjpcInlcIixcIuG7uFwiOlwiWVwiLFwi4bu5XCI6XCJ5XCIsXCLigJhcIjpcIlxcJ1wiLFwi4oCZXCI6XCJcXCdcIixcIuKAnFwiOlwiXFxcXFxcXCJcIixcIuKAnVwiOlwiXFxcXFxcXCJcIixcIuKAoFwiOlwiK1wiLFwi4oCiXCI6XCIqXCIsXCLigKZcIjpcIi4uLlwiLFwi4oKgXCI6XCJlY3VcIixcIuKColwiOlwiY3J1emVpcm9cIixcIuKCo1wiOlwiZnJlbmNoIGZyYW5jXCIsXCLigqRcIjpcImxpcmFcIixcIuKCpVwiOlwibWlsbFwiLFwi4oKmXCI6XCJuYWlyYVwiLFwi4oKnXCI6XCJwZXNldGFcIixcIuKCqFwiOlwicnVwZWVcIixcIuKCqVwiOlwid29uXCIsXCLigqpcIjpcIm5ldyBzaGVxdWVsXCIsXCLigqtcIjpcImRvbmdcIixcIuKCrFwiOlwiZXVyb1wiLFwi4oKtXCI6XCJraXBcIixcIuKCrlwiOlwidHVncmlrXCIsXCLigq9cIjpcImRyYWNobWFcIixcIuKCsFwiOlwicGVubnlcIixcIuKCsVwiOlwicGVzb1wiLFwi4oKyXCI6XCJndWFyYW5pXCIsXCLigrNcIjpcImF1c3RyYWxcIixcIuKCtFwiOlwiaHJ5dm5pYVwiLFwi4oK1XCI6XCJjZWRpXCIsXCLigrlcIjpcImluZGlhbiBydXBlZVwiLFwi4oK9XCI6XCJydXNzaWFuIHJ1YmxlXCIsXCLihKBcIjpcInNtXCIsXCLihKJcIjpcInRtXCIsXCLiiIJcIjpcImRcIixcIuKIhlwiOlwiZGVsdGFcIixcIuKIkVwiOlwic3VtXCIsXCLiiJ5cIjpcImluZmluaXR5XCIsXCLimaVcIjpcImxvdmVcIixcIuWFg1wiOlwieXVhblwiLFwi5YaGXCI6XCJ5ZW5cIixcIu+3vFwiOlwicmlhbFwifScpXG4gIC8qIGVzbGludC1lbmFibGUgKi9cblxuICBmdW5jdGlvbiByZXBsYWNlIChzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc2x1Z2lmeTogc3RyaW5nIGFyZ3VtZW50IGV4cGVjdGVkJylcbiAgICB9XG5cbiAgICBvcHRpb25zID0gKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJylcbiAgICAgID8ge3JlcGxhY2VtZW50OiBvcHRpb25zfVxuICAgICAgOiBvcHRpb25zIHx8IHt9XG5cbiAgICB2YXIgc2x1ZyA9IHN0cmluZy5zcGxpdCgnJylcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgY2gpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChjaGFyTWFwW2NoXSB8fCBjaClcbiAgICAgICAgICAvLyBhbGxvd2VkXG4gICAgICAgICAgLnJlcGxhY2Uob3B0aW9ucy5yZW1vdmUgfHwgL1teXFx3XFxzJCpfK34uKCknXCIhXFwtOkBdL2csICcnKVxuICAgICAgfSwgJycpXG4gICAgICAvLyB0cmltIGxlYWRpbmcvdHJhaWxpbmcgc3BhY2VzXG4gICAgICAudHJpbSgpXG4gICAgICAvLyBjb252ZXJ0IHNwYWNlc1xuICAgICAgLnJlcGxhY2UoL1stXFxzXSsvZywgb3B0aW9ucy5yZXBsYWNlbWVudCB8fCAnLScpXG4gICAgICAvLyByZW1vdmUgdHJhaWxpbmcgc2VwYXJhdG9yXG4gICAgICAucmVwbGFjZSgnI3tyZXBsYWNlbWVudH0kJywgJycpXG5cbiAgICByZXR1cm4gb3B0aW9ucy5sb3dlciA/IHNsdWcudG9Mb3dlckNhc2UoKSA6IHNsdWdcbiAgfVxuXG4gIHJlcGxhY2UuZXh0ZW5kID0gZnVuY3Rpb24gKGN1c3RvbU1hcCkge1xuICAgIGZvciAodmFyIGtleSBpbiBjdXN0b21NYXApIHtcbiAgICAgIGNoYXJNYXBba2V5XSA9IGN1c3RvbU1hcFtrZXldXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcGxhY2Vcbn0pKVxuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gIHZhciBtYXJnaW4gPSB7XG4gICAgICB0b3A6IDIwLFxuICAgICAgcmlnaHQ6IDIwLFxuICAgICAgYm90dG9tOiAzMCxcbiAgICAgIGxlZnQ6IDQwXG4gICAgfSxcbiAgICB3aWR0aCA9IDk2MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxuICAgIGhlaWdodCA9IDUwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gIC8qIFxuICAgKiB2YWx1ZSBhY2Nlc3NvciAtIHJldHVybnMgdGhlIHZhbHVlIHRvIGVuY29kZSBmb3IgYSBnaXZlbiBkYXRhIG9iamVjdC5cbiAgICogc2NhbGUgLSBtYXBzIHZhbHVlIHRvIGEgdmlzdWFsIGRpc3BsYXkgZW5jb2RpbmcsIHN1Y2ggYXMgYSBwaXhlbCBwb3NpdGlvbi5cbiAgICogbWFwIGZ1bmN0aW9uIC0gbWFwcyBmcm9tIGRhdGEgdmFsdWUgdG8gZGlzcGxheSB2YWx1ZVxuICAgKiBheGlzIC0gc2V0cyB1cCBheGlzXG4gICAqL1xuXG4gIC8vIHNldHVwIHggXG4gIHZhciB4VmFsdWUgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGRbXCJTZW50aW1lbnRcIl07XG4gICAgfSwgLy8gZGF0YSAtPiB2YWx1ZVxuICAgIHhTY2FsZSA9IGQzLnNjYWxlLmxpbmVhcigpLnJhbmdlKFswLCB3aWR0aF0pLCAvLyB2YWx1ZSAtPiBkaXNwbGF5XG4gICAgeE1hcCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4geFNjYWxlKHhWYWx1ZShkKSk7XG4gICAgfSwgLy8gZGF0YSAtPiBkaXNwbGF5XG4gICAgeEF4aXMgPSBkMy5zdmcuYXhpcygpLnNjYWxlKHhTY2FsZSkub3JpZW50KFwiYm90dG9tXCIpO1xuXG4gIC8vIHNldHVwIHlcbiAgdmFyIHlWYWx1ZSA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gZFtcIk1hZ25pdHVkZVwiXTtcbiAgICB9LCAvLyBkYXRhIC0+IHZhbHVlXG4gICAgeVNjYWxlID0gZDMuc2NhbGUubGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pLCAvLyB2YWx1ZSAtPiBkaXNwbGF5XG4gICAgeU1hcCA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4geVNjYWxlKHlWYWx1ZShkKSk7XG4gICAgfSwgLy8gZGF0YSAtPiBkaXNwbGF5XG4gICAgeUF4aXMgPSBkMy5zdmcuYXhpcygpLnNjYWxlKHlTY2FsZSkub3JpZW50KFwibGVmdFwiKTtcblxuICAvLyBzZXR1cCBmaWxsIGNvbG9yXG4gIHZhciBjVmFsdWUgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQuTWFudWZhY3R1cmVyO1xuICAgIH0sXG4gICAgY29sb3IgPSBkMy5zY2FsZS5jYXRlZ29yeTEwKCk7XG5cbiAgLy8gYWRkIHRoZSBncmFwaCBjYW52YXMgdG8gdGhlIGJvZHkgb2YgdGhlIHdlYnBhZ2VcbiAgdmFyIHN2ZyA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAvLyBhZGQgdGhlIHRvb2x0aXAgYXJlYSB0byB0aGUgd2VicGFnZVxuICB2YXIgdG9vbHRpcCA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwiZGl2XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInRvb2x0aXBcIilcbiAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuXG4gIC8vIGxvYWQgZGF0YVxuICBkMy5jc3YoXCJjZXJlYWwuY3N2XCIsIGZ1bmN0aW9uIChlcnJvciwgZGF0YSkge1xuXG4gICAgLy8gY2hhbmdlIHN0cmluZyAoZnJvbSBDU1YpIGludG8gbnVtYmVyIGZvcm1hdFxuICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgZC5DYWxvcmllcyA9ICtkLkNhbG9yaWVzO1xuICAgICAgZFtcIlByb3RlaW4gKGcpXCJdID0gK2RbXCJQcm90ZWluIChnKVwiXTtcbiAgICAgIC8vICAgIGNvbnNvbGUubG9nKGQpO1xuICAgIH0pO1xuXG4gICAgLy8gZG9uJ3Qgd2FudCBkb3RzIG92ZXJsYXBwaW5nIGF4aXMsIHNvIGFkZCBpbiBidWZmZXIgdG8gZGF0YSBkb21haW5cbiAgICB4U2NhbGUuZG9tYWluKFtkMy5taW4oZGF0YSwgeFZhbHVlKSAtIDEsIGQzLm1heChkYXRhLCB4VmFsdWUpICsgMV0pO1xuICAgIHlTY2FsZS5kb21haW4oW2QzLm1pbihkYXRhLCB5VmFsdWUpIC0gMSwgZDMubWF4KGRhdGEsIHlWYWx1ZSkgKyAxXSk7XG5cbiAgICAvLyB4LWF4aXNcbiAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInggYXhpc1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgLmNhbGwoeEF4aXMpXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsXCIpXG4gICAgICAuYXR0cihcInhcIiwgd2lkdGgpXG4gICAgICAuYXR0cihcInlcIiwgLTYpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgLnRleHQoXCJDYWxvcmllc1wiKTtcblxuICAgIC8vIHktYXhpc1xuICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieSBheGlzXCIpXG4gICAgICAuY2FsbCh5QXhpcylcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGFiZWxcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgIC5hdHRyKFwieVwiLCA2KVxuICAgICAgLmF0dHIoXCJkeVwiLCBcIi43MWVtXCIpXG4gICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgLnRleHQoXCJQcm90ZWluIChnKVwiKTtcblxuICAgIC8vIGRyYXcgZG90c1xuICAgIHN2Zy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAuZGF0YShkYXRhKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiZG90XCIpXG4gICAgICAuYXR0cihcInJcIiwgMy41KVxuICAgICAgLmF0dHIoXCJjeFwiLCB4TWFwKVxuICAgICAgLmF0dHIoXCJjeVwiLCB5TWFwKVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gY29sb3IoY1ZhbHVlKGQpKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgdG9vbHRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMjAwKVxuICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgLjkpO1xuICAgICAgICB0b29sdGlwLmh0bWwoZFtcIkNlcmVhbCBOYW1lXCJdICsgXCI8YnIvPiAoXCIgKyB4VmFsdWUoZCkgK1xuICAgICAgICAgICAgXCIsIFwiICsgeVZhbHVlKGQpICsgXCIpXCIpXG4gICAgICAgICAgLnN0eWxlKFwibGVmdFwiLCAoZDMuZXZlbnQucGFnZVggKyA1KSArIFwicHhcIilcbiAgICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgKGQzLmV2ZW50LnBhZ2VZIC0gMjgpICsgXCJweFwiKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbig1MDApXG4gICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gZHJhdyBsZWdlbmRcbiAgICB2YXIgbGVnZW5kID0gc3ZnLnNlbGVjdEFsbChcIi5sZWdlbmRcIilcbiAgICAgIC5kYXRhKGNvbG9yLmRvbWFpbigpKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImxlZ2VuZFwiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKDAsXCIgKyBpICogMjAgKyBcIilcIjtcbiAgICAgIH0pO1xuXG4gICAgLy8gZHJhdyBsZWdlbmQgY29sb3JlZCByZWN0YW5nbGVzXG4gICAgbGVnZW5kLmFwcGVuZChcInJlY3RcIilcbiAgICAgIC5hdHRyKFwieFwiLCB3aWR0aCAtIDE4KVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAxOClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDE4KVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCBjb2xvcik7XG5cbiAgICAvLyBkcmF3IGxlZ2VuZCB0ZXh0XG4gICAgbGVnZW5kLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwieFwiLCB3aWR0aCAtIDI0KVxuICAgICAgLmF0dHIoXCJ5XCIsIDkpXG4gICAgICAuYXR0cihcImR5XCIsIFwiLjM1ZW1cIilcbiAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pXG4gIH0pO1xuXG59KSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICB2YXIgc2x1Z2lmeSA9IHJlcXVpcmUoJ3NsdWdpZnknKVxuXG4gICQuZ2V0SlNPTihcIi4uL2RhdGEvdG9wX2FydGljbGVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICRsaXN0ID0gJChcIiNsaXN0LW9mLWFydGljbGVzXCIpXG5cbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnRvcF9hcnRpY2xlcylcbiAgICBkYXRhLnRvcF9hcnRpY2xlcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgY29uc29sZS5sb2coZS51cmwpXG4gICAgICAkbGkgPSAkKCc8bGk+PGEgaHJlZj1cIi9hcnRpY2xlLycgKyBzbHVnaWZ5KGUubmFtZSkgKyAnXCI+JyArIGUubmFtZSArICc8L2E+PC9saT4nKVxuICAgICAgJGxpc3QuYXBwZW5kKCRsaSlcbiAgICB9KTtcblxuICB9KTtcblxuICAkKFwiI2J1dHRvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgdXJsID0gJChcIiN5b3VyLXVybFwiKS50ZXh0KClcbiAgICBjb25zb2xlLmxvZyhcIkJVVFRPTiBDTElDS0VEXCIpXG5cbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly91cy1jZW50cmFsMS1jZHNzLTIwMTguY2xvdWRmdW5jdGlvbnMubmV0L2Z1bmN0aW9uLWFydGljbGUtaW5mb1wiLFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBcInVybFwiXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIC8vZG8gc29tZXRoaW5nIHdoZW4gcmVxdWVzdCBpcyBzdWNjZXNzZnVsbFxuICAgICAgfSxcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIlxuICAgIH0pXG4gIH0pXG5cbn0pIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkgeyBcbiAgXG59KSIsImZ1bmN0aW9uIHNldHVwSW5kZXgoKSB7XG4gIHJlcXVpcmUoJy4vaW5kZXgnKVxufVxuXG5mdW5jdGlvbiBzZXR1cEFydGljbGUoKSB7XG4gIHJlcXVpcmUoJy4vYXJ0aWNsZScpXG59XG5cbmZ1bmN0aW9uIHNldHVwUHVibGlzaGVyKCkge1xuICByZXF1aXJlKCcuL3B1Ymxpc2hlcicpXG59XG5cblxud2luZG93LmV4cG9ydGVkRnVuY3Rpb25zID0ge1xuICBcInNldHVwSW5kZXhcIjogc2V0dXBJbmRleCxcbiAgXCJzZXR1cEFydGljbGVcIjogc2V0dXBBcnRpY2xlLFxuICBcInNldHVwUHVibGlzaGVyXCI6IHNldHVwUHVibGlzaGVyLFxufTsiXX0=
