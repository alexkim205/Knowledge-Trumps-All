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