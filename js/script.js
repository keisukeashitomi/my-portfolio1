$(function() {
  // const $header = $('header');
  // let header = $header.offset.top();
  let windowheight = $(window).height();
  let scroll = $(window).scrollTop();
  $(window).on('load resize',function() {
    windowheight = $(window).height();
    // scroll = $(window).scrollTop();
    console.log(windowheight);
  });

  const $header = $('header');
  const $nav = $('header').find('nav');
  const headerheight = $header.height();
  console.log(headerheight);
  let header = $header.offset().top;
  console.log(header);
  let fixed = false;
  $(window).scroll(function() {
    // header = $header.offset.top();
    windowheight = $(window).height();
    scroll = $(window).scrollTop();
    if(scroll > headerheight && fixed == false) {
      console.log(true);
      $nav.css('display','none');
      $header.css({'position':'fixed','top':'-235px'});
      $header.css({'height':'150px','overfllow':'hidden'});
      $header.animate({'top':0},1000);
      fixed = true;
    } else if(scroll < headerheight && fixed == true){
      fixed = false;
      $nav.css('display','block');
      // $header.css('position','static');
      $header.css('height','235px');
    }
  });
  
  const $a = $('.header-top ul li a');
  
  const headertopcolor = $('.header-top ul li a').css('color');
  $('.header-top ul li a').hover(function() {
    $(this).css('color','#20296f');
  },
  function() {
    $(this).css('color',headertopcolor);
  });

  $('.header-bottom ul li a').hover(function() {
    const aIndex = $('.header-bottom ul li a').index(this);
    if(aIndex == 0) {
      // $('.dropdown').eq(0).addClass('active');
      $('.dropdown').eq(0).slideDown();
    } else if(aIndex == 1) {
      // $('.dropdown').eq(1).addClass('active');
      $('.dropdown').eq(1).slideDown();
    } else if(aIndex == 2) {
      // $('.dropdown').eq(2).addClass('active');
      $('.dropdown').eq(2).slideDown();
    } else if(aIndex == 3) {
      // $('.dropdown').eq(3).addClass('active');
      $('.dropdown').eq(3).slideDown();
    } else {
      // $('.dropdown').eq(4).addClass('active');
      $('.dropdown').eq(4).slideDown();
    }
  },function() {
    const aIndex = $('.header-bottom ul li a').index(this);
    if(aIndex == 0) {
      // $('.dropdown').eq(0).removeClass('active');
      $('.dropdown').eq(0).slideUp();
    } else if(aIndex == 1) {
      // $('.dropdown').eq(1).removeClass('active');
      $('.dropdown').eq(1).slideUp();
    } else if(aIndex == 2) {
      // $('.dropdown').eq(2).removeClass('active');
      $('.dropdown').eq(2).slideUp();
    } else if(aIndex == 3) {
      // $('.dropdown').eq(3).removeClass('active');
      $('.dropdown').eq(3).slideUp();
    } else {
      // $('.dropdown').eq(4).removeClass('active');
      $('.dropdown').eq(4).slideUp();
    }
  });

// $('.topics').css('visibility','hidden').css('opacity','0');
// $(window).on('load scroll resize',function() {
//   $('.topics').each(function() {
//     const topics = $(this).offset().top;
//     const scroll = $(window).scrollTop();
//     const windowheight = $(window).height();

//     if (scroll > topics - windowheight + windowheight / 2) {
//       $(this).css('visibility','visible');
//       $(this).animate({opacity: 1}, 500);
//     }

//   });
// });
  

if ($('#home').length) {






$('.topics h2').css('visibility','hidden').css('opacity','0');
$('.topics .topics-list').css('visibility','hidden').css('opacity','0');

const $h2 = $('.topics').find('h2');
const $topicsList = $('.topics').find('.topics-list');
let h2 = $h2.offset().top;
let topicsList = $topicsList.offset().top;
let scroll = $(window).scrollTop();
let windowheight = $(window).height();

$(window).on('load resize', function() {
     h2 = $h2.offset().top;
     topicsList = $topicsList.offset().top;
     
     windowheight = $(window).height();
     console.log(h2,topicsList,scroll,windowheight); 
});
 
$(window).scroll(function() {
  scroll = $(window).scrollTop();
  if(scroll > h2 - windowheight + windowheight /6) {
    $h2.css('visibility','visible');
    $h2.animate({opacity: 1});
    console.log(true);
  } 
  if(scroll > topicsList - windowheight + windowheight /6) {
    $topicsList.css('visibility','visible');
    $topicsList.eq(0).animate({opacity: 1}, 300);
    $topicsList.eq(1).delay(100).animate({opacity: 1}, 300);
    $topicsList.eq(2).delay(200).animate({opacity: 1}, 300);
    $topicsList.eq(3).delay(300).animate({opacity: 1}, 300);
    $topicsList.eq(4).delay(400).animate({opacity: 1}, 300);
    $topicsList.eq(5).delay(500).animate({opacity: 1}, 300);
  }
});
};




// gkoulife
if($('#gkoulife').length) {
  let scroll = $(window).scrollTop();
  
  let windowheight = $(window).height();
  console.log(`ウィンドウの高さ${windowheight}`);

  const $springh2 = $('.spring').find('h2');
  let springh2 = $springh2.offset().top;
  console.log(`スプリング見出しまでの距離${springh2}`);

  const $springimg = $('.spring').find('img');
  let springimg = $springimg.offset().top;
  console.log(`スプリング画像までの距離${springimg}`);

  const $springtext = $('.spring').find('.ceremony-text')
  let springtext = $springtext.offset().top;
  console.log(`スプリングテキストまでの距離${springtext}`);

  const $springlist = $('.spring').find('.event-list');
  let springlist = $springlist.offset().top;
  console.log(`スプリングリストまでの距離${springlist}`);

  $(window).on('load resize',function () {

    // $springh2.css('visibility','visible');
       $springh2.animate({'opacity':1},1000);
       $springimg.animate({'opacity':1},1000);
       $springtext.animate({'opacity':1},1000);
  });

  $(window).scroll(function() {
    scroll = $(window).scrollTop();
    windowheight = $(window).height();
    springlist = $springlist.offset().top;
    if(scroll > springlist - windowheight + windowheight / 6) {
      $springlist.animate({'opacity':1},1000);
    };
  });




  
  const $summerh2 = $('.summer').find('h2');
  let summerh2 = $summerh2.offset().top;
  console.log(`サマー見出しまでの距離${summerh2}`);
  
  const $summerimg = $('.summer').find('img');
  let summerimg = $summerimg.offset().top;
  console.log(`サマー画像までの距離${summerimg}`);

  const $summertext = $('.summer').find('.ceremony-text')
  let summertext = $summertext.offset().top;
  console.log(`サマーテキストまでの距離${summertext}`);

  const $summerlist = $('.summer').find('.event-list');
  let summerlist = $summerlist.offset().top;
  console.log(`サマーリストまでの距離${summerlist}`);

  $(window).scroll(function() {
    scroll = $(window).scrollTop();
    windowheight = $(window).height();
    summerh2 = $summerh2.offset().top;
    summerimg = $summerimg.offset().top;
    let summertext = $summertext.offset().top;
    let summerlist = $summerlist.offset().top;
    if(scroll > summerh2 -  windowheight +  windowheight / 3) {
      $summerh2.animate({'opacity':1},1000);
    }
    if(scroll > summerimg - windowheight + windowheight / 3.5) {
      $summerimg.animate({'opacity':1},1000);
    }
    if(scroll > summertext - windowheight + windowheight / 4) {
      $summertext.animate({'opacity':1},1000);
    }
    if(scroll > summerlist - windowheight + windowheight / 6) {
      $summerlist.animate({'opacity':1},1000);
    };
  });



  const $autumnh2 = $('.autumn').find('h2');
  let autumnh2 = $autumnh2.offset().top;
  console.log(`オータム見出しまでの距離${autumnh2}`);
  
  const $autumnimg = $('.autumn').find('img');
  let autumnimg = $autumnimg.offset().top;
  console.log(`オータム画像までの距離${autumnimg}`);

  const $autumntext = $('.autumn').find('.ceremony-text')
  let autumntext = $autumntext.offset().top;
  console.log(`オータムテキストまでの距離${autumntext}`);

  const $autumnlist = $('.autumn').find('.event-list');
  let autumnlist = $autumnlist.offset().top;
  console.log(`オータムリストまでの距離${autumnlist}`);

  $(window).scroll(function() {
    scroll = $(window).scrollTop();
    windowheight = $(window).height();
     autumnh2 = $autumnh2.offset().top;
     autumnimg = $autumnimg.offset().top;
     autumntext = $autumntext.offset().top;
     autumnlist = $autumnlist.offset().top;
    if(scroll > autumnh2 - windowheight + windowheight / 7) {
      $autumnh2.animate({'opacity':1},1000);
    }
    if(scroll > autumnimg - windowheight + windowheight / 8) {
      $autumnimg.animate({'opacity':1},1000);
    }
    if(scroll > autumntext -  windowheight +  windowheight / 8.5) {
      $autumntext.animate({'opacity':1},1000);
    }
    if(scroll > autumnlist - windowheight + windowheight / 9.5) {
      $autumnlist.animate({'opacity':1},1000);
    }
  })




  const $winterh2 = $('.winter').find('h2');
  let winterh2 = $winterh2.offset().top;
  console.log(`ウィンター見出しまでの距離${winterh2}`);
  
  const $winterimg = $('.winter').find('img');
  let winterimg = $winterimg.offset().top;
  console.log(`ウィンター画像までの距離${winterimg}`);

  const $wintertext = $('.winter').find('.ceremony-text')
  let wintertext = $wintertext.offset().top;
  console.log(`ウィンターテキストまでの距離${wintertext}`);

  const $winterlist = $('.winter').find('.event-list');
  let winterlist = $winterlist.offset().top;
  console.log(`ウィンターリストまでの距離${winterlist}`);

  $(window).scroll(function() {
    scroll = $(window).scrollTop();
    windowheight = $(window).height();
    winterh2 = $winterh2.offset().top;
    winterimg = $winterimg.offset().top;
    winterlist = $winterlist.offset().top;

    if(scroll >  winterh2 - windowheight + windowheight / 12) {
      $winterh2.animate({'opacity':1},1000);
    }
    if(scroll > winterimg - windowheight + windowheight /14) {
      $winterimg.animate({'opacity':1},1000);
    } 
    if(scroll > wintertext - windowheight + windowheight / 14.5) {
      $wintertext.animate({'opacity':1},1000);
    }
    if(scroll > winterlist - windowheight + windowheight /14.5) {
      $winterlist.animate({'opacity':1},1000);
    }
  });

};


});



 


