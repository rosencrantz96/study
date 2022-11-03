/*버튼 0(Products)을 누르면  
0. 버튼0, 1 붙은 주황색 제거
0. 내용0,1,2 안보이게 하기
1. 버튼 0이 주황색으로 하이라이트가 되어야함
2. 내용 0이 보여야함*/

//함수 호출 반복문
for(let i = 0; i < $('.tab-button').length; i++){
  tabOpen(i); 
}

//함수에 보관
function tabOpen(e){
  $('.tab-button').eq(e).click(function(){
      $('.tab-button').removeClass('active');
      $('.tab-content').removeClass('show');
      $('.tab-button').eq(e).addClass('active');
      $('.tab-content').eq(e).addClass('show');
  });
}
