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