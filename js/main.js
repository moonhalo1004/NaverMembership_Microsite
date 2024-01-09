$(document).ready(function () {
  //    wow scroll+JinvertSCROLL MODE
  new WOW().init();
  (function ($) {
    $.jInvertScroll([".scroll"]);
  })(jQuery);
  $(document).ready(function () {
    $("html, body").animate({ scrollTop: 0 }, 20);
  });

  /*
    3. scroll값 구해서 그거에 맞춰 navigation을 클릭하면 장면이 움직이도록 해보세요.

*/

  //    SCENE NAVIGATION START

  //	Scene이 바뀌는 인덱스 계산
  //	Scene 크기가 정해지면 수정

  // var scrollTop = 0;
  // var bgWidth = 17800;
  // var sceneNum = 7;
  // var baseIdx = bgWidth / sceneNum;
  var scrollIdx = [];
  var page = $(".pagenav");

  for (var i = 0; i < page.length; i++) {
    var pageLeft = page.eq(i).position().left;
    scrollIdx.push(pageLeft);
  }

  // 만약 세로형 사이트라면 이렇게 해서 작동을 했겠지만 .. 가로형이라서 Left가 컨텐츠 전체 width, padding값이나 margin값 영향을 받아 포지션이 이렇게 나옴
  // 수동으로 조금 조절해주기
  scrollIdx[1] = 2100;
  scrollIdx[2] = 4400;
  scrollIdx[3] = 6560;

  $(".nav .wrapper > li").each(function (idx) {
    // console.log(idx);
    $(this).click(function () {
      $("body, html").stop().animate({ scrollTop: scrollIdx[idx] }, 600);
      console.log(scrollIdx[idx]);
    });
  });

  /*
    4. 장면을 스크롤하거나 클릭하였을때 메뉴가 활성화 되게 만드세요.

*/

  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    // console.log(scrollTop);
    /*
  			scroll에 따른 메뉴 활성화
  		*/
    scrollBtnOn(scrollTop);
  });

  scrollBtnOn($(window).scrollTop()); //새로고침했을때 활성화해주기

  function scrollBtnOn(scrollTop) {
    console.log(scrollTop);
    var navScroll = $(".header .nav .wrapper li");

    for (var i = 0; i < scrollIdx.length; i++) {
      if (scrollTop >= scrollIdx[i]) {
        for (var j = 0; j < 4; j++) {
          navScroll.eq(j).removeClass("nav0" + (j + 1) + "-on");
        }
        navScroll.eq(i).addClass("nav0" + (i + 1) + "-on");
      }
    }
  }

  //    SCENE NAVIGATION END

  //    About Scroll
  var bullet = ["카드 혜택", "여행 혜택", "편의점 혜택"];
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + '">' + bullet[index] + "</div>";
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        if(this.activeIndex == 1){
          $(".about .wrap .about_slider .txt_ballon3").delay(200).fadeIn();
          $(".about .wrap .about_slider .txt_ballon4").delay(600).fadeIn();
        }
        else if(this.activeIndex == 2){
          $(".about .wrap .about_slider .txt_ballon5").delay(200).fadeIn();
          $(".about .wrap .about_slider .txt_ballon6").delay(600).fadeIn();
        }
      },
    },
  });

  //    About Animation

  /*
    6. about도착했을때 슬라이드 이미지들 나타나게 만들기

*/

  $(window).scroll(function () {
    if ($(document).scrollTop() > 2100 || $(document).scrollTop() == 2100) {
      $(".about .wrap .about_slider .txt_ballon1").delay(200).fadeIn();
      $(".about .wrap .about_slider .txt_ballon2").delay(600).fadeIn();
      
    }
  });


  /*
    9. 원 돌아가게 만들기

*/

  //    Contents Animation
  $(window).scroll(function () {
    if ($(document).scrollTop() > 4100 || $(document).scrollTop() == 4100) {
      $(".contents .wrap .img .circle > div").fadeIn();
      $(".contents .wrap .img .info").delay(1500).fadeIn();
    }
  });

  $(".contents .wrap .img .circle-hover .circle01").hover(
    function () {
      $(
        ".contents .wrap .img .circle .circle01 > img:nth-child(1), .contents .wrap .img .circle .circle01 > img:nth-child(2)"
      ).addClass("on");
    },
    function () {
      $(
        ".contents .wrap .img .circle .circle01 > img:nth-child(1), .contents .wrap .img .circle .circle01 > img:nth-child(2)"
      ).removeClass("on");
    }
  );

  $(".contents .wrap .img .circle-hover .circle02").hover(
    function () {
      $(
        ".contents .wrap .img .circle .circle02 > img:nth-child(1), .contents .wrap .img .circle .circle02 > img:nth-child(2)"
      ).addClass("on");
    },
    function () {
      $(
        ".contents .wrap .img .circle .circle02 > img:nth-child(1), .contents .wrap .img .circle .circle02 > img:nth-child(2)"
      ).removeClass("on");
    }
  );

  $(".contents .wrap .img .circle-hover .circle03").hover(
    function () {
      $(
        ".contents .wrap .img .circle .circle03 > img:nth-child(1), .contents .wrap .img .circle .circle03 > img:nth-child(2)"
      ).addClass("on");
    },
    function () {
      $(
        ".contents .wrap .img .circle .circle03 > img:nth-child(1), .contents .wrap .img .circle .circle03 > img:nth-child(2)"
      ).removeClass("on");
    }
  );

  $(".contents .wrap .img .circle-hover .circle04").hover(
    function () {
      $(
        ".contents .wrap .img .circle .circle04 > img:nth-child(1), .contents .wrap .img .circle .circle04 > img:nth-child(2)"
      ).addClass("on");
    },
    function () {
      $(
        ".contents .wrap .img .circle .circle04 > img:nth-child(1), .contents .wrap .img .circle .circle04 > img:nth-child(2)"
      ).removeClass("on");
    }
  );

  $(".contents .wrap .img .circle-hover .circle05").hover(
    function () {
      $(
        ".contents .wrap .img .circle .circle05 > img:nth-child(1), .contents .wrap .img .circle .circle05 > img:nth-child(2)"
      ).addClass("on");
    },
    function () {
      $(
        ".contents .wrap .img .circle .circle05 > img:nth-child(1), .contents .wrap .img .circle .circle05 > img:nth-child(2)"
      ).removeClass("on");
    }
  );

  $(".contents .wrap .img .circle-hover .circle06").hover(
    function () {
      $(
        ".contents .wrap .img .circle .circle06 > img:nth-child(1), .contents .wrap .img .circle .circle06 > img:nth-child(2)"
      ).addClass("on");
    },
    function () {
      $(
        ".contents .wrap .img .circle .circle06 > img:nth-child(1), .contents .wrap .img .circle .circle06 > img:nth-child(2)"
      ).removeClass("on");
    }
  );

  $(".contents .wrap .img .circle-hover .circle07").hover(
    function () {
      $(
        ".contents .wrap .img .circle .circle07 > img:nth-child(1), .contents .wrap .img .circle .circle07 > img:nth-child(2)"
      ).addClass("on");
    },
    function () {
      $(
        ".contents .wrap .img .circle .circle07 > img:nth-child(1), .contents .wrap .img .circle .circle07 > img:nth-child(2)"
      ).removeClass("on");
    }
  );

  $(".contents .wrap .img .circle-hover .circle08").hover(
    function () {
      $(
        ".contents .wrap .img .circle .circle08 > img:nth-child(1), .contents .wrap .img .circle .circle08 > img:nth-child(2)"
      ).addClass("on");
    },
    function () {
      $(
        ".contents .wrap .img .circle .circle08 > img:nth-child(1), .contents .wrap .img .circle .circle08 > img:nth-child(2)"
      ).removeClass("on");
    }
  );

  //    langocard animation
  $(window).scroll(function () {
    if ($(document).scrollTop() > 5720 || $(document).scrollTop() == 5720) {
      $(".card .wrap .img .langocard > span").delay(0).fadeIn();
    }
  });

  /*
    10. 페이지새로고침 시에 무조건 처음으로

*/

  var scrollValue = $(document).scrollTop();

  // 새로고침 후 페이지 상단
  window.onload = function () {
    setTimeout(function () {
      scrollTo(0, 0);
    }, 100);
  };
});
