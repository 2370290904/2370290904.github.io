
// 如果鼠标移入类名为kjh的所有兄弟元素内
$('.kjh').siblings().mouseenter(function () {
    // 执行代码划入soe
    $('.soe').stop(true, false).slideDown();
    $('.community').stop(true,false).hide();
})


$('.one').mouseleave(function () {
    // 如果移出大盒子的时候
    // 划出soe
    $('.soe').stop(true, false).slideUp();
})

$('.nav1 li').mouseenter(function () {
    // 如果悬停所有的li标签的时候，改变颜色。
    // 但所有的兄弟元素不改变
    $(this).stop(true, false).css('backgroundColor', '#ffb41e').siblings().stop(true, false).css('backgroundColor', '');
})

$('.nav1 li').mouseleave(function () {
    // 如果离开所有的li标签的时候  所有颜色恢复成原来的
    $('.nav1 li').stop(true, false).css('backgroundColor', '')
})

$('.kjh').mouseenter(function () {
    // 悬停kjh类名元素的时候  划入
    $('.community').stop(true, false).slideDown();
    $('.soe').stop(true,false).hide();
})

$('.one').mouseleave(function () {
    // 移出one的时候  划出
    $('.community').stop(true, false).slideUp();
})

var topVal = 5;
// 设置定时器的top值

bown();
// 调用函数

function bown() {
    kjhTop1 = setInterval(function () {
        // 设置定时器
        if (topVal != 155) {
            // 如果top值不等于155
            topVal++;
            // top值自身加1
            $('.qrCode').children('p').css('top', topVal)
            // 把top值添加给p
        } else {
            // 反之如果到达155的时候
            clearTimeout(kjhTop1)
            // 结束定时器的循环
            shang()
            // 调用函数开启新的定时器
        }
    }, 10)
}

function shang() {
    kjhTop2 = setInterval(function () {
        // 设置往上的定时器
        if (topVal != 5) {
            // 如果往上的top值不等于5
            topVal--;
            // top值自身减1
            $('.qrCode').children('p').css('top', topVal)
        } else {
            // 如果top值到达5
            clearTimeout(kjhTop2)
            // 结束本次循环
            bown();
            // 开启新的循环
        }
    }, 10)
}

// 当点击li标签时
$('.slideshow>ul>li').click(function () {
    $('.slideshow img').eq($(this).index()).fadeIn(1000).siblings('img').fadeOut(1000);
    $(this).attr('class','teXing1');
    $(this).siblings().removeAttr("class");
})

// 当悬停li标签时
$('.slideshow>ul>li').mouseenter(function () {
    $(this).attr('id','teXing2').siblings().removeAttr('id');
})


// 点击播放按钮弹出视频
$('.mp4').click(function () {
    $('.popup').show();
    $('.maksTwo').show();
})

// 点击×关闭视频窗口
$('.close').click(function () {
    $('.popup').hide();
    $('.maksTwo').hide();
})

$(function () {
    $('.newest').trigger('mouseenter');
})

// 新闻的四个悬停
$('.newest').mouseenter(function () {
    $(this).addClass('newest4');
    $('.newest1').removeClass('newest5');
    $('.newest2').removeClass('newest6');
    $('.newest3').removeClass('newest7');
    $('.zuixin').fadeIn().siblings('li').hide();
    
})

$('.newest1').mouseenter(function () {
    $(this).addClass('newest5');
    $('.newest').removeClass('newest4');
    $('.newest2').removeClass('newest6');
    $('.newest3').removeClass('newest7');
    $('.gonggao').fadeIn().siblings('li').hide();
})

$('.newest2').mouseenter(function () {
    $(this).addClass('newest6');
    $('.newest').removeClass('newest4');
    $('.newest1').removeClass('newest5');
    $('.newest3').removeClass('newest7');
    $('.xinwen').fadeIn().siblings('li').hide();
})

$('.newest3').mouseenter(function () {
    $(this).addClass('newest7');
    $('.newest').removeClass('newest4');
    $('.newest2').removeClass('newest6');
    $('.newest1').removeClass('newest5');
    $('.huodong').fadeIn().siblings('li').hide();
})

$('.apirit').mouseenter(function () {
    $(this).css('background-position','-187px -496px')
});

$('.apirit').mouseleave(function () {
    $(this).css('background-position','-187px -57px')
});

$('.apirit1').mouseenter(function () {
    $(this).css('background-position','-187px -594px')
})

$('.apirit1').mouseleave(function () {
    $(this).css('background-position','-187px -155px')
});

// 五个小头像和大头像
$('.touxing>a').mouseenter(function () {
    $(this).children('img').eq(0).hide().siblings().show();
    //$(this).siblings().children('img:odd').hide().siblings().show();
    $(this).siblings("a").each(function(index,ele){
        $(ele).children().eq(0).show().siblings().hide();
    })

})

// 小视频悬停
$('.video-one').mouseenter(function () {
    console.log($('.desc-name>img'));
    $('.desc-name>img').eq(1).hide();
    $('.arrow').eq(0).css('background-position','-178px -314px');
})
$('.video-one').mouseleave(function () {
    $('.desc-name>img').eq(1).show();
    $('.arrow').eq(0).css('background-position','-216px -314px');
})