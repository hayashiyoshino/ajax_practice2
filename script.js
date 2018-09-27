const API_KEY = 'd331f2554c1fc49908a3d0547c063624'


$(function() {
  $('#weather-form').on('submit', function(e) {
    var cityName = $(this).find('#weather-form-city').prop('value');
    $.ajax('http://api.openweathermap.org/data/2.5/weather?APPID=' + API_KEY + '&q=' + cityName)
      .done(function(data) {
        $('#form-error').css('display', 'none');
        $('#result-city-name').text(data.name);
        $('#result-temp').text(Math.round(data.main.temp - 273));
        $('#result-weather').text(data.weather[0].main);
        $('#result-datetime').text(Date(data.dt));
        $('#form-result').css('display', 'block');
      })
      .fail(function(data) {
        $('#form-spinner').css('display', 'none');
        alert('Something wrong occurred.');
      });
    e.preventDefault();
  });
});
