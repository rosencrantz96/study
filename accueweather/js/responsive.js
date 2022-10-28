//모바일 햄버거 버튼 클릭 시
$(".hamburger").click(function(){
    $(".mobile.hamburger").hide() // display: none
    $(".mobile.close").show() // display: block 
    
    $("#mobile_menu").empty() // #mobile_menu 하위 태그 초기화

    var nav = $(".nav").clone()

    $("#mobile_menu").append(nav) //append: #mobile_menu의 하위 태그로 들어온다 (내가 선택한 요소 하위에 집어 넣음) 
    $("#mobile_menu").show()
})


//모바일 햄버거 닫기
$(".close").click(function(){
    $(".mobile.hamburger").show() 
    $(".mobile.close").hide() 
    $("#mobile_menu").hide()
})

//브라우저 리사이징 될 때 모바일 메뉴 보이는 버그 방지
$(window).resize(function(){
    var width = $(window).width()

    if(width >= 767) {
        if($("#mobile_menu").is(":visible")) {
            $(".mobile.hamburger").show() 
            $(".mobile.close").hide() 
            $("#mobile_menu").hide()    
        } 
    }
})