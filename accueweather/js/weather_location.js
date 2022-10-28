var currentURL = location.href // url 가져옴
var urlObj = new URL(currentURL) // 주소를 객체로 만들었다! 

var params = urlObj.searchParams
var q = params.get("q")

console.log(q)

var result = getCurrentWeather(q)
console.log(result)

$("#temp").text(result.main.temp + "℃")
$("#wind").text(result.wind.speed + "m/s")
$("#humidity").text(result.main.humidity + "%")