$(function () {
  if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    $("header footer").inertiaScroll({
      parent: $("#wrap"),
      childDelta1: 1,
    });
  }

  var cursor = $(".cursor"),
    cWidth = 20,
    mouseX = 0,
    mouseY = 0;

  $(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    cursor.css({
      left: mouseX - cWidth / 2,
      top: mouseY - cWidth / 2,
    });
  });

  var cursor = $(".cursor"),
    follower = $(".follower"),
    cWidth = 8,
    fWidth = 40,
    delay = 10,
    mouseX = 0,
    mouseY = 0,
    posX = 0,
    posY = 0;

  TweenMax.to({}, 0.001, {
    repeat: -1,
    onRepeat: function () {
      posX += (mouseX - posX) / delay;
      posY += (mouseY - posY) / delay;

      TweenMax.set(follower, {
        css: {
          left: posX - fWidth / 2,
          top: posY - fWidth / 2,
        },
      });

      TweenMax.set(cursor, {
        css: {
          left: mouseX - cWidth / 2,
          top: mouseY - cWidth / 2,
        },
      });
    },
  });

  $(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  //img_hover

  $(".profile_img").on({
    mouseenter: function () {
      cursor.addClass("cursor_none");
      follower.addClass("follower_active");
      $(".profile_img").addClass("img_hover");
    },
    mouseleave: function () {
      cursor.removeClass("cursor_none");
      follower.removeClass("follower_active");
      $(".profile_img").removeClass("img_hover");
    },
  });

  $(window).scroll(function () {
    $(".scrollFadeIn").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 50) {
        $(this).addClass("fade_in");
      }
    });

    $(".profile_img").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 50) {
        $(".profile_img").addClass("icon_fade_in");
      }
    });

    var target = $("#main");
    var elemPos = $("#main").offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight) {
      target.css("background-position-y", (scroll - elemPos) * 0.5 + "px");
    } else {
      target.css("background-position-y", "center");
    }
    if (scroll == 0) {
      target.css("background-position-y", "center");
    }
  });
});
