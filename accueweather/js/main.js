
var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"]

// foreach
$(".temp").each(function(i){
    var temp = getCurrentTemp(cityList[i])
    var iconURL = "https://openweathermap.org/img/wn/"
    $(this).text(temp.celsius + "℃")  // 제이쿼리에서 this: 현재 이벤트가 발생하는 요소
    $(this).prev().children().attr("src",iconURL + temp.icon + ".png")
})

$(".location").on({
    "click" : function() {
        var q = $(this).children(".q").attr("id")
        var redirectURL = "pages/weather_location.html?q=" + q 
        location.href = redirectURL
    }
})