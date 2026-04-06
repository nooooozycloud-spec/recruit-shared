$(function(){
  $('.tab-item').on('click', function(){
    let index = $('.tab-item').index(this);

    $('.tab-item').removeClass('active');
    $(this).addClass('active');
    $('.tbl-inner').removeClass('active');
    $('.tbl-inner').eq(index).addClass('active');
  });
}); 


$(function(){
  $('.tab-item2').on('click', function(){
    let index = $('.tab-item2').index(this);

    $('.tab-item2').removeClass('active');
    $(this).addClass('active');
    $('.tbl-inner2').removeClass('active');
    $('.tbl-inner2').eq(index).addClass('active');
  });
}); 


$(function(){
  $('.tab-item3').on('click', function(){
    let index = $('.tab-item3').index(this);

    $('.tab-item3').removeClass('active');
    $(this).addClass('active');
    $('.tbl-inner3').removeClass('active');
    $('.tbl-inner3').eq(index).addClass('active');
  });
}); 