// AM: Very cool code. Glad you got to try out some jQuery on your portfolio page.
// AM: From a design standpoint, however, just changing element heights on resize may not necessarily make the page more readable.
// AM: If I was looking at this site on a phone, it might be more helpful if each "square" was stacked on top of each other.
// AM: Just something to think about as we haven't tackled responsive web design yet.

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

// AM: Haven't seen this syntax for calling a function before. Does it do something beyond that?
// AM: Is there any reason you didn't use `setElementHeights();`?
$(setElementHeights);

// AM: This makes sense though, since resize is expecting a function definition as an argument.
// AM: You can do this without calling the function prior.
$(window).resize(setElementHeights);
