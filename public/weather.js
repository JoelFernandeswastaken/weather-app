

// $("#search-button").click(function(){
//     alert("button ppressed");
// })
// $(document).ready(function(){
//     alert("success");
// });


var mykey = apiKey.key;

$('#cityname').keypress((event) => {
    console.log("event hit");
    if(event.key == "Enter"){
        event.preventDefault();
        $('#search-button').click();
        console.log("Search button clicked");
    }

})


$('.weather-details').css('display', "none");


$("#search-button").click(function(){
    var city = $("#cityname").val();
    console.log(city);
    var apiKey = mykey;
    var units = 'metric';

    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=' + units;


    // $.get(url)
    var settings = {
        "async" : true,
        "crossDomain" : true,
        "url" : url,
        "method" : "GET"
    }
    $.ajax(settings).done(function(response){
        console.log(response);
        $(".container").height("450px");
        $(".not-found").css("display", "none");
        $('.weather-box').css("display", "");
        $('.weather-details').css("display", "");

        //for weater icon
        weather = response.weather[0].main;
        switch(weather){
            case "Clouds": 
                var icon = response.weather[0].icon;
                var iconURL = " http://openweathermap.org/img/wn/" + icon + "@2x.png";
                $('.weather-box img').attr('src', iconURL);
                break;

            case "Clear": 
                var icon = response.weather[0].icon;
                var iconURL = " http://openweathermap.org/img/wn/" + icon + "@2x.png";
                $('.weather-box img').attr('src', iconURL);
                break;
            
            case "Rain": 
                var icon = response.weather[0].icon;
                var iconURL = " http://openweathermap.org/img/wn/" + icon + "@2x.png";
                $('.weather-box img').attr('src', iconURL);
                break;

            case "Haze": 
                var icon = response.weather[0].icon;
                var iconURL = " http://openweathermap.org/img/wn/" + icon + "@2x.png";
                $('.weather-box img').attr('src', iconURL);
                break;

            default:
                $('.weather-box img').attr('src', '');
        }
        temperature = response.main.temp;
        description = response.weather[0].description;
        humidity = response.main.humidity;
        windspeed = response.wind.speed;
        $(".temperature").html(temperature + "<span>°C</span>");
        $(".description").html(description);
        $(".humidity-percent").html(humidity + "%")
        $(".wind").html(windspeed + " Km/h")

       


    }).fail(function(){
        console.log("failed");
        $(".container").height("400px");
        $(".weather-box").css("display", "none");
        $(".weather-details").css("display", "none");
        $(".not-found").css("display", "block");
    });


})
