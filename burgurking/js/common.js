/* 1. pc버전 서브메뉴 관련 */
const menu = document.querySelector('.menu__main') // 전체 메뉴
const subMenus = document.querySelectorAll('.list__drop') // 하위 메뉴
const panel = document.querySelector('.header__panel') // 하위 메뉴 나올 때 나오는 판넬
const header = document.querySelector('.header') // 전체 헤더

// 하위 메뉴 보여줌
menu.addEventListener('mouseover', function(){
    panel.style.display = 'block'; 
    subMenus.forEach(function(subMenu){
        subMenu.style.display = 'block';
    })
})

// 마우스 떼면 하위 메뉴 숨김
header.addEventListener('mouseout', function(){
    panel.style.display = 'none'; 
    subMenus.forEach(function(subMenu){
        subMenu.style.display = 'none';
    })
})
panel.addEventListener('mouseout', function(){
    panel.style.display = 'none'; 
    subMenus.forEach(function(subMenu){
        subMenu.style.display = 'none';
    })
})

/* 2. 모바일 버전 메뉴 보이기, 숨기기 */
const Mhamburger = document.querySelector('.mobile.hamburger') // 햄버거
const Mclose = document.querySelector('.mobile.close') // 닫기
const Mnav = document.querySelector('.header__Mnav') // 모바일 메뉴 전체

Mhamburger.addEventListener('click', function() {
    Mnav.style.display = 'block';
})

Mclose.addEventListener('click', function() {
    Mnav.style.display = 'none';
})

/* 3. 모바일 하위 메뉴 보이기 숨기기 */

function showHide(e) {
    // console.log(e.children)
    const MlistDrop = e.children[2]; // 내가 선택한 메뉴의 하위메뉴 
    // const displayAttr = MlistDrop.style.display // 이렇게 하면 콘솔에 안 찍힘... 왜? 하지만 이런 방법도 있습니다. 
    const displayAttr = window.getComputedStyle(MlistDrop).display; // display 속성 가져옴 
    

    if (displayAttr === 'none') {
        MlistDrop.style.display = 'block'
    } else {
        MlistDrop.style.display = 'none'
    }
}

/* 4. width가 767px 이상일 때 모바일 메뉴 보임 방지 */

(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();


window.addEventListener('optimizedResize', function() {
    let winWidth = window.innerWidth

    if (winWidth >= 767) {
        Mnav.style.display = 'none'
    }
})
