const html = document.querySelector('html');
let bodyHeight; //ウィンドウの高さを入れる場所
let scrollpos; //スクロールの位置を入れる場所

$('.hum-toggle').on('click', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    html.classList.remove('is-menuOpen');
    document.querySelector('.head').classList.remove('fixed');
    document.querySelector('.head').style.display = 'sticky';
    document.body.style.top = 0;
    window.scrollTo(0, scrollpos);
    $('#humMenu').removeClass('active');
  } else {
    scrollpos = window.pageYOffset;
    html.classList.add('is-menuOpen');
    document.querySelector('.head').classList.add('fixed');
    bodyHeight = window.innerHeight;
    document.body.style.top = scrollpos * -1 + 'px';
    $(this).addClass('active');
    $('#humMenu').addClass('active');
  }
});

function topButton(elmId, duration) {
  //トップに戻るボタンの要素の取得
  var topButton = document.getElementById(elmId);

  topButton.addEventListener(
    'click',
    function (e) {
      //デフォルトの動作の制御
      e.preventDefault();

      var begin = new Date() - 0;
      var yOffset = window.pageYOffset;
      var timer = setInterval(function () {
        var current = new Date() - begin;
        if (current > duration) {
          clearInterval(timer);
          current = duration;
        }

        //スクロール位置を単位時間で変更する
        window.scrollTo(0, yOffset * (1 - current / duration));
      }, 10);
    },
    false
  );
}

// 使用例 トップに戻るボタンの id とアニメーションにかかる時間をミリ秒で指定
// if ($('a#pagetop').hasClass('pagetop')) {
//   topButton('pagetop', 300);
// }

// $(function () {
//   $("a[href*='#']:not('.pagetop')").on('click', function () {
//     var speed = 400; // ミリ秒
//     var targetId = '#' + $(this).attr('href').split('#')[1];
//     var target = $(targetId == '#' || targetId == '' ? 'html' : targetId);
//     var point = target.offset().top - 100;
//     $('body,html').animate(
//       {
//         scrollTop: point,
//       },
//       speed,
//       'swing'
//     );
//     return false;
//   });
// });

$('.nav_toggle').on('click', function () {
  $(this).toggleClass('active');
  $(this).next('.humburger__nav--sub').slideToggle(300);
});

$(function () {
  const Select = $('.form_select');
  $(Select).on('change', function () {
    if ($(Select).val() !== "") {
      $(this).removeClass('form_select');
    } else {
      $(this).addClass('form_select');
    }
  });
  const Select2 = $('.form_select2');
  $(Select2).on('change', function () {
    if ($(Select2).val() !== "") {
      $(this).removeClass('form_select2');
    } else {
      $(this).addClass('form_select2');
    }
  });
});


$('.js-close').on('click', function () {
  $(this).parent('.bannerPresent-wrap').css('display', 'none');
});
