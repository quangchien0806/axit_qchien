$(document).ready(function () {
  $(".scroll-link").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("href");
    var offsetTop = $(id).offset().top;
    jQuery("html, body").animate(
      {
        scrollTop: offsetTop - 160,
      },
      500
    );
  });
});
$(document).ready(function () {
  //menu
  $(".menu li").click(function () {
    $(".menu li").removeClass("active");
    $(this).addClass("active");
  });

  $(".menu-toggler").click(function () {
    $(".menu-toggler").toggleClass("active");
    $(".header__menu").toggleClass("active");
    $(".overlay-menu").addClass("overlay-scroll");
  });
  $(".overlay-menu").click(function () {
    $(".menu-toggler").removeClass("active");
    $(".header__menu").removeClass("active");
    $(".overlay-menu").removeClass("overlay-scroll");
  });

  //TAB
  $("#tabs-nav li:first-child").addClass("active");
  $(".features__mid").hide();
  $(".features__mid:first").show();

  $("#tabs-nav li").click(function () {
    $("#tabs-nav li").removeClass("active");
    $(this).addClass("active");
    $(".features__mid").hide();

    const activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });
});
