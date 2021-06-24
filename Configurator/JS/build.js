// Click event to scroll to top
$(".js-configure").click(function(e) {
    e.preventDefault();
    $(".parallax").animate({ scrollTop: 0 }, 1500);
    $(".parallax__layer--car").removeAttr("style");
    var getCar = function() {
      var car = "";
      var wheelcolour = document.querySelector('input[name="wheelcolour"]:checked').value;
      var bodycolour = document.querySelector('input[name="bodycolour"]:checked').value;
      if (bodycolour == "Blue") {
        if (wheelcolour == "Black") {
          car = "https://dl.dropboxusercontent.com/s/d8qv1ozbsk53wsl/blueblack.png";
        } else if (wheelcolour == "Silver") {
          car = "https://dl.dropboxusercontent.com/s/fmrgl8ocyg0t165/bluesilver.png";
        } else if (wheelcolour == "Gunmetal Grey") {
          car = "https://dl.dropboxusercontent.com/s/09p5w0pywpuxree/bluegunmetal-grey.png";
        }
      } else if (bodycolour == "Purple") {
        if (wheelcolour == "Black") {
          car = "https://dl.dropboxusercontent.com/s/wxpfdun8jsnzysu/purpleblack.png";
        } else if (wheelcolour == "Silver") {
          car = "https://dl.dropboxusercontent.com/s/l3km5sr7dpc96y0/purplesilver.png";
        } else if (wheelcolour == "Gunmetal Grey") {
          car = "https://dl.dropboxusercontent.com/s/mabr3a0hmmbepe3/purplegunmetal-grey.png";
        }
      } else if (bodycolour == "Orange") {
        if (wheelcolour == "Black") {
          car = "https://dl.dropboxusercontent.com/s/q6l3yicu96bqdau/orangeblack.png";
        } else if (wheelcolour == "Silver") {
          car = "https://dl.dropboxusercontent.com/s/ob02t0liqv929cf/orangesilver.png";
        } else if (wheelcolour == "Gunmetal Grey") {
          car = "https://dl.dropboxusercontent.com/s/0iupf6ikln1qowk/orangegunmetal-grey.png";
        }
      }
      return "background-image: url(" + car + ");";
    };
    $(".parallax__layer--car").attr("style", getCar());
  });