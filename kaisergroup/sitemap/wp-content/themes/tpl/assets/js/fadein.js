// スクロールして表示領域に入ったらclass付与
$(function () {
  $('.fadein,.slidein,.cover__action_x').on('inview', function () {
    $(this).addClass('active');
  });
});

$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  var scrollBottom = scrollTop + $(this).height();

  $(".cover__action .order").each(function (i) {
    if (scrollBottom > $(this).offset().top) {

      var target = this;
      setTimeout(function () {
        $(target).addClass("active");
      }, 200 * i);

    }
  });
});
