var url = "https://api.openweathermap.org/data/2.5/weather?"
url += "appid=d18cab0e7fb50e828123a883ae572f78"
url += "&units=metric"
url += "&lang=kr"
url += "&q="

// 현재 날씨의 모든 정보 얻어오기 
function getCurrentWeather(city) {
    var dataObj;
    var openWeatherAPI = url;
    
    $.ajax({
        type: "GET", // 서버에 get 방식으로 요청을 함 
        url: openWeatherAPI += city,
        dataType: "json", // 받아올 데이터 타입 
        async: false, // (async: 비동기) 비동기x -> 동기(결과 데이터를 리턴시키기 위해)
        success: function(data) { // API call 성공할 때 
            console.log(data)
            console.log(data.wind.speed) //2.06
            console.log(data.dt) //1666932208
            console.log(data.weather[0].icon) //02d

            dataObj = data
        }, 
        error: function(request, status, error) { // API call 실패할 때
            console.log(request, status, error)
        }, 
    })

    return dataObj
}

// getCurrentWeather()

// 지역별 온도 얻어오기 
function getCurrentTemp(city) {
    var temp = {}
    var openWeatherAPI = url;

    $.ajax({
        type: "GET", // 서버에 get 방식으로 요청을 함 
        url: openWeatherAPI += city,
        dataType: "json", // 받아올 데이터 타입 
        async: false, // (async: 비동기) 비동기x -> 동기(결과 데이터를 리턴시키기 위해)
        success: function(data) { // API call 성공할 때 
            temp.celsius = data.main.temp.toFixed(0) // 온도 // toFixed: 소수점 자리 조절 (0으로 하면 사라짐. 숫자에 따라 소수점 n번째 자리까지 나온다.)
            temp.icon = data.weather[0].icon // 아이콘
        }, 
        error: function(request, status, error) { // API call 실패할 때
            console.log(request, status, error)
        }, 
    })

    return temp
}

// getCurrentTemp() // 함수 실행 꼭 하자 ㅋㅋㅋ 