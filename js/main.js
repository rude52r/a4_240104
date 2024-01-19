$(function(){
    //메뉴
    //mouseover_out으로
    // $(".main > li, .sub_bg").mouseover(function(){
    //     $(".sub, .sub_bg").stop().slideDown();
    // })//mouseover
    // $(".main > li, .sub_bg").mouseout(function(){
    //     $(".sub, .sub_bg").stop().slideUp();
    // })//mouseout

    //hover로
    $(".main > li, .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown();
    }, function(){
        $(".sub, .sub_bg").stop().slideUp();
    }) //hover

    //슬라이드 fade
    // 제일 먼저 첫번째 그림이 나오게
    // $(".move li").eq(0).show();
    // $(".move li").eq(1).hide();
    // $(".move li").eq(2).hide();
    
    // $(".move li").hide();
    // $(".move li").eq(0).show();
    
    // $(".move li").eq(0).sibling().hide();

    $(".move li:gt(0)").hide();

    // var n = 0; // 0  1  2 현재보이는 그림 인덱스 번호 
    
    // setInterval(move,2000);

    // function move(){
    //     console.log("n1:",n)

    //     $(".move li").eq(n).fadeOut();
        
    //     if(n < 2){
    //         n++;
    //     }else{
    //         n=0;
    //     }

    //     console.log("n:",n)

    //     $(".move li").eq(n).fadeIn();
    // } //move

    var j = 0; //0 1 2
    setInterval(function(){
        if(j == 2){
            j = 0;
        }else{
            j++;
        }

        $(".move li").eq(j).siblings().fadeOut();
        $(".move li").eq(j).fadeIn();
    },2000)//

    //팝업
    $(".p_click").click(function(){
        $(".popup").fadeIn()
    })
    
    $(".close").click(function(){
        $(".popup").fadeOut()

    })
})

