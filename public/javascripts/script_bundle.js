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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvc2x1Z2lmeS9pbmRleC5qcyIsInB1YmxpYy9qYXZhc2NyaXB0cy9hcnRpY2xlLmpzIiwicHVibGljL2phdmFzY3JpcHRzL2luZGV4LmpzIiwicHVibGljL2phdmFzY3JpcHRzL3B1Ymxpc2hlci5qcyIsInB1YmxpYy9qYXZhc2NyaXB0cy9zY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcbjsoZnVuY3Rpb24gKG5hbWUsIHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpXG4gICAgbW9kdWxlLmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZhY3RvcnkoKVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmYWN0b3J5KVxuICB9XG4gIGVsc2Uge1xuICAgIHJvb3RbbmFtZV0gPSBmYWN0b3J5KClcbiAgfVxufSgnc2x1Z2lmeScsIHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgdmFyIGNoYXJNYXAgPSBKU09OLnBhcnNlKCd7XCIkXCI6XCJkb2xsYXJcIixcIiZcIjpcImFuZFwiLFwiPFwiOlwibGVzc1wiLFwiPlwiOlwiZ3JlYXRlclwiLFwifFwiOlwib3JcIixcIsKiXCI6XCJjZW50XCIsXCLCo1wiOlwicG91bmRcIixcIsKkXCI6XCJjdXJyZW5jeVwiLFwiwqVcIjpcInllblwiLFwiwqlcIjpcIihjKVwiLFwiwqpcIjpcImFcIixcIsKuXCI6XCIocilcIixcIsK6XCI6XCJvXCIsXCLDgFwiOlwiQVwiLFwiw4FcIjpcIkFcIixcIsOCXCI6XCJBXCIsXCLDg1wiOlwiQVwiLFwiw4RcIjpcIkFcIixcIsOFXCI6XCJBXCIsXCLDhlwiOlwiQUVcIixcIsOHXCI6XCJDXCIsXCLDiFwiOlwiRVwiLFwiw4lcIjpcIkVcIixcIsOKXCI6XCJFXCIsXCLDi1wiOlwiRVwiLFwiw4xcIjpcIklcIixcIsONXCI6XCJJXCIsXCLDjlwiOlwiSVwiLFwiw49cIjpcIklcIixcIsOQXCI6XCJEXCIsXCLDkVwiOlwiTlwiLFwiw5JcIjpcIk9cIixcIsOTXCI6XCJPXCIsXCLDlFwiOlwiT1wiLFwiw5VcIjpcIk9cIixcIsOWXCI6XCJPXCIsXCLDmFwiOlwiT1wiLFwiw5lcIjpcIlVcIixcIsOaXCI6XCJVXCIsXCLDm1wiOlwiVVwiLFwiw5xcIjpcIlVcIixcIsOdXCI6XCJZXCIsXCLDnlwiOlwiVEhcIixcIsOfXCI6XCJzc1wiLFwiw6BcIjpcImFcIixcIsOhXCI6XCJhXCIsXCLDolwiOlwiYVwiLFwiw6NcIjpcImFcIixcIsOkXCI6XCJhXCIsXCLDpVwiOlwiYVwiLFwiw6ZcIjpcImFlXCIsXCLDp1wiOlwiY1wiLFwiw6hcIjpcImVcIixcIsOpXCI6XCJlXCIsXCLDqlwiOlwiZVwiLFwiw6tcIjpcImVcIixcIsOsXCI6XCJpXCIsXCLDrVwiOlwiaVwiLFwiw65cIjpcImlcIixcIsOvXCI6XCJpXCIsXCLDsFwiOlwiZFwiLFwiw7FcIjpcIm5cIixcIsOyXCI6XCJvXCIsXCLDs1wiOlwib1wiLFwiw7RcIjpcIm9cIixcIsO1XCI6XCJvXCIsXCLDtlwiOlwib1wiLFwiw7hcIjpcIm9cIixcIsO5XCI6XCJ1XCIsXCLDulwiOlwidVwiLFwiw7tcIjpcInVcIixcIsO8XCI6XCJ1XCIsXCLDvVwiOlwieVwiLFwiw75cIjpcInRoXCIsXCLDv1wiOlwieVwiLFwixIBcIjpcIkFcIixcIsSBXCI6XCJhXCIsXCLEglwiOlwiQVwiLFwixINcIjpcImFcIixcIsSEXCI6XCJBXCIsXCLEhVwiOlwiYVwiLFwixIZcIjpcIkNcIixcIsSHXCI6XCJjXCIsXCLEjFwiOlwiQ1wiLFwixI1cIjpcImNcIixcIsSOXCI6XCJEXCIsXCLEj1wiOlwiZFwiLFwixJBcIjpcIkRKXCIsXCLEkVwiOlwiZGpcIixcIsSSXCI6XCJFXCIsXCLEk1wiOlwiZVwiLFwixJZcIjpcIkVcIixcIsSXXCI6XCJlXCIsXCLEmFwiOlwiZVwiLFwixJlcIjpcImVcIixcIsSaXCI6XCJFXCIsXCLEm1wiOlwiZVwiLFwixJ5cIjpcIkdcIixcIsSfXCI6XCJnXCIsXCLEolwiOlwiR1wiLFwixKNcIjpcImdcIixcIsSoXCI6XCJJXCIsXCLEqVwiOlwiaVwiLFwixKpcIjpcImlcIixcIsSrXCI6XCJpXCIsXCLErlwiOlwiSVwiLFwixK9cIjpcImlcIixcIsSwXCI6XCJJXCIsXCLEsVwiOlwiaVwiLFwixLZcIjpcImtcIixcIsS3XCI6XCJrXCIsXCLEu1wiOlwiTFwiLFwixLxcIjpcImxcIixcIsWBXCI6XCJMXCIsXCLFglwiOlwibFwiLFwixYNcIjpcIk5cIixcIsWEXCI6XCJuXCIsXCLFhVwiOlwiTlwiLFwixYZcIjpcIm5cIixcIsWHXCI6XCJOXCIsXCLFiFwiOlwiblwiLFwixZBcIjpcIk9cIixcIsWRXCI6XCJvXCIsXCLFklwiOlwiT0VcIixcIsWTXCI6XCJvZVwiLFwixZhcIjpcIlJcIixcIsWZXCI6XCJyXCIsXCLFmlwiOlwiU1wiLFwixZtcIjpcInNcIixcIsWeXCI6XCJTXCIsXCLFn1wiOlwic1wiLFwixaBcIjpcIlNcIixcIsWhXCI6XCJzXCIsXCLFolwiOlwiVFwiLFwixaNcIjpcInRcIixcIsWkXCI6XCJUXCIsXCLFpVwiOlwidFwiLFwixahcIjpcIlVcIixcIsWpXCI6XCJ1XCIsXCLFqlwiOlwidVwiLFwixatcIjpcInVcIixcIsWuXCI6XCJVXCIsXCLFr1wiOlwidVwiLFwixbBcIjpcIlVcIixcIsWxXCI6XCJ1XCIsXCLFslwiOlwiVVwiLFwixbNcIjpcInVcIixcIsW5XCI6XCJaXCIsXCLFulwiOlwielwiLFwixbtcIjpcIlpcIixcIsW8XCI6XCJ6XCIsXCLFvVwiOlwiWlwiLFwixb5cIjpcInpcIixcIsaSXCI6XCJmXCIsXCLGoFwiOlwiT1wiLFwixqFcIjpcIm9cIixcIsavXCI6XCJVXCIsXCLGsFwiOlwidVwiLFwix4hcIjpcIkxKXCIsXCLHiVwiOlwibGpcIixcIseLXCI6XCJOSlwiLFwix4xcIjpcIm5qXCIsXCLImFwiOlwiU1wiLFwiyJlcIjpcInNcIixcIsiaXCI6XCJUXCIsXCLIm1wiOlwidFwiLFwiy5pcIjpcIm9cIixcIs6GXCI6XCJBXCIsXCLOiFwiOlwiRVwiLFwizolcIjpcIkhcIixcIs6KXCI6XCJJXCIsXCLOjFwiOlwiT1wiLFwizo5cIjpcIllcIixcIs6PXCI6XCJXXCIsXCLOkFwiOlwiaVwiLFwizpFcIjpcIkFcIixcIs6SXCI6XCJCXCIsXCLOk1wiOlwiR1wiLFwizpRcIjpcIkRcIixcIs6VXCI6XCJFXCIsXCLOllwiOlwiWlwiLFwizpdcIjpcIkhcIixcIs6YXCI6XCI4XCIsXCLOmVwiOlwiSVwiLFwizppcIjpcIktcIixcIs6bXCI6XCJMXCIsXCLOnFwiOlwiTVwiLFwizp1cIjpcIk5cIixcIs6eXCI6XCIzXCIsXCLOn1wiOlwiT1wiLFwizqBcIjpcIlBcIixcIs6hXCI6XCJSXCIsXCLOo1wiOlwiU1wiLFwizqRcIjpcIlRcIixcIs6lXCI6XCJZXCIsXCLOplwiOlwiRlwiLFwizqdcIjpcIlhcIixcIs6oXCI6XCJQU1wiLFwizqlcIjpcIldcIixcIs6qXCI6XCJJXCIsXCLOq1wiOlwiWVwiLFwizqxcIjpcImFcIixcIs6tXCI6XCJlXCIsXCLOrlwiOlwiaFwiLFwizq9cIjpcImlcIixcIs6wXCI6XCJ5XCIsXCLOsVwiOlwiYVwiLFwizrJcIjpcImJcIixcIs6zXCI6XCJnXCIsXCLOtFwiOlwiZFwiLFwizrVcIjpcImVcIixcIs62XCI6XCJ6XCIsXCLOt1wiOlwiaFwiLFwizrhcIjpcIjhcIixcIs65XCI6XCJpXCIsXCLOulwiOlwia1wiLFwizrtcIjpcImxcIixcIs68XCI6XCJtXCIsXCLOvVwiOlwiblwiLFwizr5cIjpcIjNcIixcIs6/XCI6XCJvXCIsXCLPgFwiOlwicFwiLFwiz4FcIjpcInJcIixcIs+CXCI6XCJzXCIsXCLPg1wiOlwic1wiLFwiz4RcIjpcInRcIixcIs+FXCI6XCJ5XCIsXCLPhlwiOlwiZlwiLFwiz4dcIjpcInhcIixcIs+IXCI6XCJwc1wiLFwiz4lcIjpcIndcIixcIs+KXCI6XCJpXCIsXCLPi1wiOlwieVwiLFwiz4xcIjpcIm9cIixcIs+NXCI6XCJ5XCIsXCLPjlwiOlwid1wiLFwi0IFcIjpcIllvXCIsXCLQglwiOlwiREpcIixcItCEXCI6XCJZZVwiLFwi0IZcIjpcIklcIixcItCHXCI6XCJZaVwiLFwi0IhcIjpcIkpcIixcItCJXCI6XCJMSlwiLFwi0IpcIjpcIk5KXCIsXCLQi1wiOlwiQ1wiLFwi0I9cIjpcIkRaXCIsXCLQkFwiOlwiQVwiLFwi0JFcIjpcIkJcIixcItCSXCI6XCJWXCIsXCLQk1wiOlwiR1wiLFwi0JRcIjpcIkRcIixcItCVXCI6XCJFXCIsXCLQllwiOlwiWmhcIixcItCXXCI6XCJaXCIsXCLQmFwiOlwiSVwiLFwi0JlcIjpcIkpcIixcItCaXCI6XCJLXCIsXCLQm1wiOlwiTFwiLFwi0JxcIjpcIk1cIixcItCdXCI6XCJOXCIsXCLQnlwiOlwiT1wiLFwi0J9cIjpcIlBcIixcItCgXCI6XCJSXCIsXCLQoVwiOlwiU1wiLFwi0KJcIjpcIlRcIixcItCjXCI6XCJVXCIsXCLQpFwiOlwiRlwiLFwi0KVcIjpcIkhcIixcItCmXCI6XCJDXCIsXCLQp1wiOlwiQ2hcIixcItCoXCI6XCJTaFwiLFwi0KlcIjpcIlNoXCIsXCLQqlwiOlwiVVwiLFwi0KtcIjpcIllcIixcItCsXCI6XCJcIixcItCtXCI6XCJFXCIsXCLQrlwiOlwiWXVcIixcItCvXCI6XCJZYVwiLFwi0LBcIjpcImFcIixcItCxXCI6XCJiXCIsXCLQslwiOlwidlwiLFwi0LNcIjpcImdcIixcItC0XCI6XCJkXCIsXCLQtVwiOlwiZVwiLFwi0LZcIjpcInpoXCIsXCLQt1wiOlwielwiLFwi0LhcIjpcImlcIixcItC5XCI6XCJqXCIsXCLQulwiOlwia1wiLFwi0LtcIjpcImxcIixcItC8XCI6XCJtXCIsXCLQvVwiOlwiblwiLFwi0L5cIjpcIm9cIixcItC/XCI6XCJwXCIsXCLRgFwiOlwiclwiLFwi0YFcIjpcInNcIixcItGCXCI6XCJ0XCIsXCLRg1wiOlwidVwiLFwi0YRcIjpcImZcIixcItGFXCI6XCJoXCIsXCLRhlwiOlwiY1wiLFwi0YdcIjpcImNoXCIsXCLRiFwiOlwic2hcIixcItGJXCI6XCJzaFwiLFwi0YpcIjpcInVcIixcItGLXCI6XCJ5XCIsXCLRjFwiOlwiXCIsXCLRjVwiOlwiZVwiLFwi0Y5cIjpcInl1XCIsXCLRj1wiOlwieWFcIixcItGRXCI6XCJ5b1wiLFwi0ZJcIjpcImRqXCIsXCLRlFwiOlwieWVcIixcItGWXCI6XCJpXCIsXCLRl1wiOlwieWlcIixcItGYXCI6XCJqXCIsXCLRmVwiOlwibGpcIixcItGaXCI6XCJualwiLFwi0ZtcIjpcImNcIixcItGfXCI6XCJkelwiLFwi0pBcIjpcIkdcIixcItKRXCI6XCJnXCIsXCLguL9cIjpcImJhaHRcIixcIuGDkFwiOlwiYVwiLFwi4YORXCI6XCJiXCIsXCLhg5JcIjpcImdcIixcIuGDk1wiOlwiZFwiLFwi4YOUXCI6XCJlXCIsXCLhg5VcIjpcInZcIixcIuGDllwiOlwielwiLFwi4YOXXCI6XCJ0XCIsXCLhg5hcIjpcImlcIixcIuGDmVwiOlwia1wiLFwi4YOaXCI6XCJsXCIsXCLhg5tcIjpcIm1cIixcIuGDnFwiOlwiblwiLFwi4YOdXCI6XCJvXCIsXCLhg55cIjpcInBcIixcIuGDn1wiOlwiemhcIixcIuGDoFwiOlwiclwiLFwi4YOhXCI6XCJzXCIsXCLhg6JcIjpcInRcIixcIuGDo1wiOlwidVwiLFwi4YOkXCI6XCJmXCIsXCLhg6VcIjpcImtcIixcIuGDplwiOlwiZ2hcIixcIuGDp1wiOlwicVwiLFwi4YOoXCI6XCJzaFwiLFwi4YOpXCI6XCJjaFwiLFwi4YOqXCI6XCJ0c1wiLFwi4YOrXCI6XCJkelwiLFwi4YOsXCI6XCJ0c1wiLFwi4YOtXCI6XCJjaFwiLFwi4YOuXCI6XCJraFwiLFwi4YOvXCI6XCJqXCIsXCLhg7BcIjpcImhcIixcIuG6nlwiOlwiU1NcIixcIuG6oFwiOlwiQVwiLFwi4bqhXCI6XCJhXCIsXCLhuqJcIjpcIkFcIixcIuG6o1wiOlwiYVwiLFwi4bqkXCI6XCJBXCIsXCLhuqVcIjpcImFcIixcIuG6plwiOlwiQVwiLFwi4bqnXCI6XCJhXCIsXCLhuqhcIjpcIkFcIixcIuG6qVwiOlwiYVwiLFwi4bqqXCI6XCJBXCIsXCLhuqtcIjpcImFcIixcIuG6rFwiOlwiQVwiLFwi4bqtXCI6XCJhXCIsXCLhuq5cIjpcIkFcIixcIuG6r1wiOlwiYVwiLFwi4bqwXCI6XCJBXCIsXCLhurFcIjpcImFcIixcIuG6slwiOlwiQVwiLFwi4bqzXCI6XCJhXCIsXCLhurRcIjpcIkFcIixcIuG6tVwiOlwiYVwiLFwi4bq2XCI6XCJBXCIsXCLhurdcIjpcImFcIixcIuG6uFwiOlwiRVwiLFwi4bq5XCI6XCJlXCIsXCLhurpcIjpcIkVcIixcIuG6u1wiOlwiZVwiLFwi4bq8XCI6XCJFXCIsXCLhur1cIjpcImVcIixcIuG6vlwiOlwiRVwiLFwi4bq/XCI6XCJlXCIsXCLhu4BcIjpcIkVcIixcIuG7gVwiOlwiZVwiLFwi4buCXCI6XCJFXCIsXCLhu4NcIjpcImVcIixcIuG7hFwiOlwiRVwiLFwi4buFXCI6XCJlXCIsXCLhu4ZcIjpcIkVcIixcIuG7h1wiOlwiZVwiLFwi4buIXCI6XCJJXCIsXCLhu4lcIjpcImlcIixcIuG7ilwiOlwiSVwiLFwi4buLXCI6XCJpXCIsXCLhu4xcIjpcIk9cIixcIuG7jVwiOlwib1wiLFwi4buOXCI6XCJPXCIsXCLhu49cIjpcIm9cIixcIuG7kFwiOlwiT1wiLFwi4buRXCI6XCJvXCIsXCLhu5JcIjpcIk9cIixcIuG7k1wiOlwib1wiLFwi4buUXCI6XCJPXCIsXCLhu5VcIjpcIm9cIixcIuG7llwiOlwiT1wiLFwi4buXXCI6XCJvXCIsXCLhu5hcIjpcIk9cIixcIuG7mVwiOlwib1wiLFwi4buaXCI6XCJPXCIsXCLhu5tcIjpcIm9cIixcIuG7nFwiOlwiT1wiLFwi4budXCI6XCJvXCIsXCLhu55cIjpcIk9cIixcIuG7n1wiOlwib1wiLFwi4bugXCI6XCJPXCIsXCLhu6FcIjpcIm9cIixcIuG7olwiOlwiT1wiLFwi4bujXCI6XCJvXCIsXCLhu6RcIjpcIlVcIixcIuG7pVwiOlwidVwiLFwi4bumXCI6XCJVXCIsXCLhu6dcIjpcInVcIixcIuG7qFwiOlwiVVwiLFwi4bupXCI6XCJ1XCIsXCLhu6pcIjpcIlVcIixcIuG7q1wiOlwidVwiLFwi4busXCI6XCJVXCIsXCLhu61cIjpcInVcIixcIuG7rlwiOlwiVVwiLFwi4buvXCI6XCJ1XCIsXCLhu7BcIjpcIlVcIixcIuG7sVwiOlwidVwiLFwi4buyXCI6XCJZXCIsXCLhu7NcIjpcInlcIixcIuG7tFwiOlwiWVwiLFwi4bu1XCI6XCJ5XCIsXCLhu7ZcIjpcIllcIixcIuG7t1wiOlwieVwiLFwi4bu4XCI6XCJZXCIsXCLhu7lcIjpcInlcIixcIuKAmFwiOlwiXFwnXCIsXCLigJlcIjpcIlxcJ1wiLFwi4oCcXCI6XCJcXFxcXFxcIlwiLFwi4oCdXCI6XCJcXFxcXFxcIlwiLFwi4oCgXCI6XCIrXCIsXCLigKJcIjpcIipcIixcIuKAplwiOlwiLi4uXCIsXCLigqBcIjpcImVjdVwiLFwi4oKiXCI6XCJjcnV6ZWlyb1wiLFwi4oKjXCI6XCJmcmVuY2ggZnJhbmNcIixcIuKCpFwiOlwibGlyYVwiLFwi4oKlXCI6XCJtaWxsXCIsXCLigqZcIjpcIm5haXJhXCIsXCLigqdcIjpcInBlc2V0YVwiLFwi4oKoXCI6XCJydXBlZVwiLFwi4oKpXCI6XCJ3b25cIixcIuKCqlwiOlwibmV3IHNoZXF1ZWxcIixcIuKCq1wiOlwiZG9uZ1wiLFwi4oKsXCI6XCJldXJvXCIsXCLigq1cIjpcImtpcFwiLFwi4oKuXCI6XCJ0dWdyaWtcIixcIuKCr1wiOlwiZHJhY2htYVwiLFwi4oKwXCI6XCJwZW5ueVwiLFwi4oKxXCI6XCJwZXNvXCIsXCLigrJcIjpcImd1YXJhbmlcIixcIuKCs1wiOlwiYXVzdHJhbFwiLFwi4oK0XCI6XCJocnl2bmlhXCIsXCLigrVcIjpcImNlZGlcIixcIuKCuVwiOlwiaW5kaWFuIHJ1cGVlXCIsXCLigr1cIjpcInJ1c3NpYW4gcnVibGVcIixcIuKEoFwiOlwic21cIixcIuKEolwiOlwidG1cIixcIuKIglwiOlwiZFwiLFwi4oiGXCI6XCJkZWx0YVwiLFwi4oiRXCI6XCJzdW1cIixcIuKInlwiOlwiaW5maW5pdHlcIixcIuKZpVwiOlwibG92ZVwiLFwi5YWDXCI6XCJ5dWFuXCIsXCLlhoZcIjpcInllblwiLFwi77e8XCI6XCJyaWFsXCJ9JylcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gIGZ1bmN0aW9uIHJlcGxhY2UgKHN0cmluZywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzbHVnaWZ5OiBzdHJpbmcgYXJndW1lbnQgZXhwZWN0ZWQnKVxuICAgIH1cblxuICAgIG9wdGlvbnMgPSAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKVxuICAgICAgPyB7cmVwbGFjZW1lbnQ6IG9wdGlvbnN9XG4gICAgICA6IG9wdGlvbnMgfHwge31cblxuICAgIHZhciBzbHVnID0gc3RyaW5nLnNwbGl0KCcnKVxuICAgICAgLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBjaCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKGNoYXJNYXBbY2hdIHx8IGNoKVxuICAgICAgICAgIC8vIGFsbG93ZWRcbiAgICAgICAgICAucmVwbGFjZShvcHRpb25zLnJlbW92ZSB8fCAvW15cXHdcXHMkKl8rfi4oKSdcIiFcXC06QF0vZywgJycpXG4gICAgICB9LCAnJylcbiAgICAgIC8vIHRyaW0gbGVhZGluZy90cmFpbGluZyBzcGFjZXNcbiAgICAgIC50cmltKClcbiAgICAgIC8vIGNvbnZlcnQgc3BhY2VzXG4gICAgICAucmVwbGFjZSgvWy1cXHNdKy9nLCBvcHRpb25zLnJlcGxhY2VtZW50IHx8ICctJylcbiAgICAgIC8vIHJlbW92ZSB0cmFpbGluZyBzZXBhcmF0b3JcbiAgICAgIC5yZXBsYWNlKCcje3JlcGxhY2VtZW50fSQnLCAnJylcblxuICAgIHJldHVybiBvcHRpb25zLmxvd2VyID8gc2x1Zy50b0xvd2VyQ2FzZSgpIDogc2x1Z1xuICB9XG5cbiAgcmVwbGFjZS5leHRlbmQgPSBmdW5jdGlvbiAoY3VzdG9tTWFwKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGN1c3RvbU1hcCkge1xuICAgICAgY2hhck1hcFtrZXldID0gY3VzdG9tTWFwW2tleV1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVwbGFjZVxufSkpXG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIG1hcmdpbiA9IHtcbiAgICAgIHRvcDogMjAsXG4gICAgICByaWdodDogMjAsXG4gICAgICBib3R0b206IDMwLFxuICAgICAgbGVmdDogNDBcbiAgICB9LFxuICAgIHdpZHRoID0gOTYwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXG4gICAgaGVpZ2h0ID0gNTAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgLyogXG4gICAqIHZhbHVlIGFjY2Vzc29yIC0gcmV0dXJucyB0aGUgdmFsdWUgdG8gZW5jb2RlIGZvciBhIGdpdmVuIGRhdGEgb2JqZWN0LlxuICAgKiBzY2FsZSAtIG1hcHMgdmFsdWUgdG8gYSB2aXN1YWwgZGlzcGxheSBlbmNvZGluZywgc3VjaCBhcyBhIHBpeGVsIHBvc2l0aW9uLlxuICAgKiBtYXAgZnVuY3Rpb24gLSBtYXBzIGZyb20gZGF0YSB2YWx1ZSB0byBkaXNwbGF5IHZhbHVlXG4gICAqIGF4aXMgLSBzZXRzIHVwIGF4aXNcbiAgICovXG5cbiAgLy8gc2V0dXAgeCBcbiAgdmFyIHhWYWx1ZSA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gZFtcIlNlbnRpbWVudFwiXTtcbiAgICB9LCAvLyBkYXRhIC0+IHZhbHVlXG4gICAgeFNjYWxlID0gZDMuc2NhbGUubGluZWFyKCkucmFuZ2UoWzAsIHdpZHRoXSksIC8vIHZhbHVlIC0+IGRpc3BsYXlcbiAgICB4TWFwID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiB4U2NhbGUoeFZhbHVlKGQpKTtcbiAgICB9LCAvLyBkYXRhIC0+IGRpc3BsYXlcbiAgICB4QXhpcyA9IGQzLnN2Zy5heGlzKCkuc2NhbGUoeFNjYWxlKS5vcmllbnQoXCJib3R0b21cIik7XG5cbiAgLy8gc2V0dXAgeVxuICB2YXIgeVZhbHVlID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkW1wiTWFnbml0dWRlXCJdO1xuICAgIH0sIC8vIGRhdGEgLT4gdmFsdWVcbiAgICB5U2NhbGUgPSBkMy5zY2FsZS5saW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSksIC8vIHZhbHVlIC0+IGRpc3BsYXlcbiAgICB5TWFwID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiB5U2NhbGUoeVZhbHVlKGQpKTtcbiAgICB9LCAvLyBkYXRhIC0+IGRpc3BsYXlcbiAgICB5QXhpcyA9IGQzLnN2Zy5heGlzKCkuc2NhbGUoeVNjYWxlKS5vcmllbnQoXCJsZWZ0XCIpO1xuXG4gIC8vIHNldHVwIGZpbGwgY29sb3JcbiAgdmFyIGNWYWx1ZSA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gZC5NYW51ZmFjdHVyZXI7XG4gICAgfSxcbiAgICBjb2xvciA9IGQzLnNjYWxlLmNhdGVnb3J5MTAoKTtcblxuICAvLyBhZGQgdGhlIGdyYXBoIGNhbnZhcyB0byB0aGUgYm9keSBvZiB0aGUgd2VicGFnZVxuICB2YXIgc3ZnID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gIC8vIGFkZCB0aGUgdG9vbHRpcCBhcmVhIHRvIHRoZSB3ZWJwYWdlXG4gIHZhciB0b29sdGlwID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJkaXZcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxuICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG5cbiAgLy8gbG9hZCBkYXRhXG4gIGQzLmNzdihcImNlcmVhbC5jc3ZcIiwgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG5cbiAgICAvLyBjaGFuZ2Ugc3RyaW5nIChmcm9tIENTVikgaW50byBudW1iZXIgZm9ybWF0XG4gICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICBkLkNhbG9yaWVzID0gK2QuQ2Fsb3JpZXM7XG4gICAgICBkW1wiUHJvdGVpbiAoZylcIl0gPSArZFtcIlByb3RlaW4gKGcpXCJdO1xuICAgICAgLy8gICAgY29uc29sZS5sb2coZCk7XG4gICAgfSk7XG5cbiAgICAvLyBkb24ndCB3YW50IGRvdHMgb3ZlcmxhcHBpbmcgYXhpcywgc28gYWRkIGluIGJ1ZmZlciB0byBkYXRhIGRvbWFpblxuICAgIHhTY2FsZS5kb21haW4oW2QzLm1pbihkYXRhLCB4VmFsdWUpIC0gMSwgZDMubWF4KGRhdGEsIHhWYWx1ZSkgKyAxXSk7XG4gICAgeVNjYWxlLmRvbWFpbihbZDMubWluKGRhdGEsIHlWYWx1ZSkgLSAxLCBkMy5tYXgoZGF0YSwgeVZhbHVlKSArIDFdKTtcblxuICAgIC8vIHgtYXhpc1xuICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieCBheGlzXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAuY2FsbCh4QXhpcylcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGFiZWxcIilcbiAgICAgIC5hdHRyKFwieFwiLCB3aWR0aClcbiAgICAgIC5hdHRyKFwieVwiLCAtNilcbiAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAudGV4dChcIkNhbG9yaWVzXCIpO1xuXG4gICAgLy8geS1heGlzXG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5IGF4aXNcIilcbiAgICAgIC5jYWxsKHlBeGlzKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbFwiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIDYpXG4gICAgICAuYXR0cihcImR5XCIsIFwiLjcxZW1cIilcbiAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAudGV4dChcIlByb3RlaW4gKGcpXCIpO1xuXG4gICAgLy8gZHJhdyBkb3RzXG4gICAgc3ZnLnNlbGVjdEFsbChcIi5kb3RcIilcbiAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJkb3RcIilcbiAgICAgIC5hdHRyKFwiclwiLCAzLjUpXG4gICAgICAuYXR0cihcImN4XCIsIHhNYXApXG4gICAgICAuYXR0cihcImN5XCIsIHlNYXApXG4gICAgICAuc3R5bGUoXCJmaWxsXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBjb2xvcihjVmFsdWUoZCkpO1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigyMDApXG4gICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAuOSk7XG4gICAgICAgIHRvb2x0aXAuaHRtbChkW1wiQ2VyZWFsIE5hbWVcIl0gKyBcIjxici8+IChcIiArIHhWYWx1ZShkKSArXG4gICAgICAgICAgICBcIiwgXCIgKyB5VmFsdWUoZCkgKyBcIilcIilcbiAgICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIChkMy5ldmVudC5wYWdlWCArIDUpICsgXCJweFwiKVxuICAgICAgICAgIC5zdHlsZShcInRvcFwiLCAoZDMuZXZlbnQucGFnZVkgLSAyOCkgKyBcInB4XCIpO1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDUwMClcbiAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICAgICAgfSk7XG5cbiAgICAvLyBkcmF3IGxlZ2VuZFxuICAgIHZhciBsZWdlbmQgPSBzdmcuc2VsZWN0QWxsKFwiLmxlZ2VuZFwiKVxuICAgICAgLmRhdGEoY29sb3IuZG9tYWluKCkpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGVnZW5kXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArIGkgKiAyMCArIFwiKVwiO1xuICAgICAgfSk7XG5cbiAgICAvLyBkcmF3IGxlZ2VuZCBjb2xvcmVkIHJlY3RhbmdsZXNcbiAgICBsZWdlbmQuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIHdpZHRoIC0gMTgpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIDE4KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMTgpXG4gICAgICAuc3R5bGUoXCJmaWxsXCIsIGNvbG9yKTtcblxuICAgIC8vIGRyYXcgbGVnZW5kIHRleHRcbiAgICBsZWdlbmQuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIHdpZHRoIC0gMjQpXG4gICAgICAuYXR0cihcInlcIiwgOSlcbiAgICAgIC5hdHRyKFwiZHlcIiwgXCIuMzVlbVwiKVxuICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkO1xuICAgICAgfSlcbiAgfSk7XG5cbn0pIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gIHZhciBzbHVnaWZ5ID0gcmVxdWlyZSgnc2x1Z2lmeScpXG5cbiAgJC5nZXRKU09OKFwiLi4vZGF0YS90b3BfYXJ0aWNsZXMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgJGxpc3QgPSAkKFwiI2xpc3Qtb2YtYXJ0aWNsZXNcIilcblxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEudG9wX2FydGljbGVzKVxuICAgIGRhdGEudG9wX2FydGljbGVzLmZvckVhY2goZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlLnVybClcbiAgICAgICRsaSA9ICQoJzxsaT48YSBocmVmPVwiL2FydGljbGUvJyArIHNsdWdpZnkoZS5uYW1lKSArICdcIj4nICsgZS5uYW1lICsgJzwvYT48L2xpPicpXG4gICAgICAkbGlzdC5hcHBlbmQoJGxpKVxuICAgIH0pO1xuXG4gIH0pO1xuXG4gICQoXCIjYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkdXJsID0gJChcIiN5b3VyLXVybFwiKS52YWwoKVxuICAgIGNvbnNvbGUubG9nKFwiQlVUVE9OIENMSUNLRURcIilcbiAgICBjb25zb2xlLmxvZygkdXJsKVxuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vdXMtY2VudHJhbDEtY2Rzcy0yMDE4LmNsb3VkZnVuY3Rpb25zLm5ldC9mdW5jdGlvbi1hcnRpY2xlLWluZm9cIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogJHVybFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAvL2RvIHNvbWV0aGluZyB3aGVuIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bGxcbiAgICAgIH0sXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCJcbiAgICB9KVxuICB9KVxuXG59KSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHsgXG4gIFxufSkiLCJmdW5jdGlvbiBzZXR1cEluZGV4KCkge1xuICByZXF1aXJlKCcuL2luZGV4Jylcbn1cblxuZnVuY3Rpb24gc2V0dXBBcnRpY2xlKCkge1xuICByZXF1aXJlKCcuL2FydGljbGUnKVxufVxuXG5mdW5jdGlvbiBzZXR1cFB1Ymxpc2hlcigpIHtcbiAgcmVxdWlyZSgnLi9wdWJsaXNoZXInKVxufVxuXG5cbndpbmRvdy5leHBvcnRlZEZ1bmN0aW9ucyA9IHtcbiAgXCJzZXR1cEluZGV4XCI6IHNldHVwSW5kZXgsXG4gIFwic2V0dXBBcnRpY2xlXCI6IHNldHVwQXJ0aWNsZSxcbiAgXCJzZXR1cFB1Ymxpc2hlclwiOiBzZXR1cFB1Ymxpc2hlcixcbn07Il19
