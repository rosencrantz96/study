const inputid = document.querySelector("#inputid");
const pwd1 = document.querySelector("#pwd1");
const pwd2 = document.querySelector("#pwd2");
const level = document.querySelector("#level");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const submitButton = document.querySelector("#submit_button");
let chkFlag = true;


submitButton.addEventListener("click", function (e) {
    // 아이디: 공백여부, 중복여부
    // 비밀번호: 공백여부 / 특수문자, 문자, 숫자 포함 형태의 8~15자리를 입력하세요.
    // 비밀번호 확인: 공백여부 / 비밀번호와 같은지 안같은지
    // 이름: 공백여부 / 
    // 메일주소: 공백여부 / 메일 형식에 맞는지(test@test.com)
    // 연락처(필수x): 연락처 형식에 맞는지(010-2222-3333) 

    let chkArray = [idConfirm(), pwd1Confirm(), pwd2Confirm(), fullnameConfirm(), emailConfirm(), telConfirm()];
    
    let chkFlag = true;
    for (const chk of chkArray) {
        if (!chk) { // 함수의 리턴값이 false 일 때 
        // if (chk === false)
            chkFlag = false;
        }
    }

    if (chkFlag) {
        document.signup.submit(); 
    }

    /*
    const idConf = idConfirm();
    const pwd1Conf = pwd1Confirm();
    const pwd2Conf = pwd2Confirm();
    const fullnameConf = fullnameConfirm();
    const emailConf = emailConfirm();
    const telConf = telConfirm();

    if (idConf && pwd1Conf && pwd2Conf && fullnameConf && emailConf && telConf) {
        document.signup.submit(); 
    }
    */
});

function idConfirm() {
    const mustId = document.querySelector(".must_id");
    const overlap = document.querySelector(".overlap");

    // 텍스트가 남아있는 것을 방지하기 위해 (초기화)
    mustId.style.display = "none";
    overlap.style.display = "none";

    //null, undefined, "", 0은 false 나머지는 true
    //userid가 빈문자열이 됐을 때 코드 실행
    // if (userid.value === "") {} 같은 의미! 

    // replace(/ |0/g,""): 넓은 공백 또는 0 제거
    if (!userid.value.replace(/ /g, "")) { // 지금 이건 빈문자열임. 빈문자열인데 !로 뒤집어주니까 true가 됨...?
        mustId.style.display = "block";
        return false;
    } else {
        if(!idCheck(userid.value.replace(/ /g,""))) { // 아이디가 중복이라면 코드 실행 (idCheck(userid.value) === false 와 똑같은 의미)
            overlap.style.display = "block";
            return false;
        }
    }
    return true; // 전부 통과했으니까 결과값을 주는 것임 
}
function pwd1Confirm() {
    const mustPwd1 = document.querySelector(".must_pwd1");
    const regPwd = document.querySelector(".reg_pwd");

    mustPwd1.style.display = "none";
    regPwd.style.display = "none";

    //pwd1 빈문자열이라면
    if(!pwd1.value.replace(/ /g,"")) {
        mustPwd1.style.display = "block";
        return false;
    } else {   
        if (!pwdCheck(pwd1.value.replace(/ /g,""))) { // = 정규 표현식에 맞지 않는다면!
            regPwd.style.display = "block";
            return false;
        }
    }
    return true;
}
function pwd2Confirm() {
    const mustPwd2 = document.querySelector(".must_pwd2");
    const same = document.querySelector(".same");

    mustPwd2.style.display = "none";
    same.style.display = "none";

    //pwd1 빈문자열이라면
    if(!pwd2.value.replace(/ /g,"")) {
        mustPwd2.style.display = "block";
        return false;
    } else {
       if(pwd1.value.replace(/ /g,"") && pwd2.value.replace(/ /g,"")) { // 두 패스워드 값이 있는지 확인 
            if(pwd1.value.replace(/ /g,"") !== pwd2.value.replace(/ /g,"")) { // 두 패스워드가 같지 않다면
                same.style.display = "block";
                return false;
            }
       }
    }
    return true;
}
function fullnameConfirm() {
    const mustFullname = document.querySelector(".must_fullname");
    mustFullname.style.display = "none";

    if(!fullname.value.replace(/ /g,"")) {
        mustFullname.style.display = "block";
        return false;
    }
    return true;
}
function emailConfirm() {
    const mustEmail = document.querySelector(".must_email");
    const regEmail = document.querySelector(".reg_email");

    mustEmail.style.display = "none";
    regEmail.style.display = "none";

    if (!email.value.replace(/ /g,"")) {
        mustEmail.style.display = "block";
        return false;
    } else {
        if (!emailCheck(email.value.replace(/ /g,""))) {
            regEmail.style.display = "block";
            return false;
        } 
    }
    return true;
}
function telConfirm() {
    const regTel = document.querySelector(".reg_tel");
    regTel.style.display = "none";

    // 전화번호가 있고 정규식 체크(유효성)에 통과하지 못했을 때
    if (!telCheck(tel.value.replace(/ /g,"")) && tel.value) {
        regTel.style.display = "block";
        return false;
    }
    return true;
}

// 중복된 아이디 체크 (얘는 서버를 배워야 할 수 있다...ㅠㅠ)
function idCheck(id) {
    return true;
}

// 비밀번호 정규식 체크
function pwdCheck(pwd) {
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return reg.test(pwd);
}

function telCheck(tel) {
    const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return reg.test(tel);
}

function emailCheck(email) {
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
}