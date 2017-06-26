$(function() {
  
  function toggleChangeBtn() {
    var slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    $('.next').hide();
    if (slideIndex == 0) {
      $('.prev-btn').hide();
    // 「3」の部分を、lengthメソッドを用いて書き換えてください
    } else if (slideIndex == $('.slide').length-1) {
      $('.next-btn').hide();
      $('.next').show();
    }
  }
  
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var indexNumber = $('.index-btn').index($(this));
    $('.slide').eq(indexNumber).addClass('active');
    toggleChangeBtn();
  });
  
  $('.change-btn').click(function() {
    $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    toggleChangeBtn();
  });
});


function next(){
    window.location.href = "http://www.u.tsukuba.ac.jp/~s1620622/stress_test/test.html"
}