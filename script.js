const API_KEY = 'd331f2554c1fc49908a3d0547c063624'


$(function() {
  $('#weather-form').on('submit', function(e) {
    var cityName = $(this).find('#weather-form-city').prop('value');

    $.ajax('http://api.openweathermap.org/data/2.5/weather_APPID=' + API_KEY + '&q' + cityName);
      .done(function(data) {

      })
      .fail(function(data) {

      });
    e.preventDefault();
  });
});
