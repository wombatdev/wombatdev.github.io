function setElementHeights() {
  var height = $(window).height();
  $(".omega").css("height", height);

  var about = $(".about");
  $(about[0].children[0]).css("padding-top", height/7);

  $(".box").each(function(index, el) {
    if (index !== 0) {
      $(el.children[0]).css("padding-top", height/5);
    }
  });
}

$(setElementHeights);
$(window).resize(setElementHeights);
