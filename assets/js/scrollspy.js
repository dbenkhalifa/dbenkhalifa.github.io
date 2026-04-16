$(document).ready(function () {

  const $links = $("#site-nav a[href^='#']");

  const sections = $links.map(function () {
    const id = $(this).attr("href");
    return $(id)[0];
  }).get();

  $(window).on("scroll", function () {

    let scrollPos = $(window).scrollTop() + 120;
    let currentId = null;

    sections.forEach(function (section) {
      if (section && $(section).offset().top <= scrollPos) {
        currentId = section.id;
      }
    });

    $links.removeClass("active");

    if (currentId) {
      $("#site-nav a[href='#" + currentId + "']").addClass("active");
    }

  });

});
