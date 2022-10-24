const inputid = document.querySelector("#inputid");
const psw1 = document.querySelector("#psw1");
const psw2 = document.querySelector("#psw2");
const level = document.querySelector("#level");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener('click', function() {
    // 아이디: 공백여부, 중복여부
    // 비밀번호: 공백여부 / 특수문자, 문자, 숫자 포함 형태의 8~15자리를 입력하세요.
    // 비밀번호 확인: 공백여부 / 비밀번호와 같은지 안같은지
    // 이름: 공백여부 / 
    // 메일주소: 공백여부 / 메일 형식에 맞는지(test@test.com)
    // 연락처(필수x): 연락처 형식에 맞는지(010-2222-3333) 
})

function idConfirm() {
    if (!userid.value) {}
}
function pwd1Confirm() {}
function pwd2Confirm() {}
function fullnameConfirm() {}
function emailConfirm() {}
function telConfirm() {}