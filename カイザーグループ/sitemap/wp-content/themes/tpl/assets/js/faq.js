$('.faq_toggle').on('click', function () {
  $(this).toggleClass('active');
  $(this).next('dd').slideToggle(300);
});
