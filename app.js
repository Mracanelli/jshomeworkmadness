var cities = [
  'Austin',
  'Los Angeles',
  'New York City',
  'San Francisco',
  'Sydney'
];

$(document).ready(function(){

  for (var i = 0; i < cities.length; i++) {

    var option = $('<option>', {
                      value: cities[i],
                      text: cities[i]
                  });


    $('#city-type').append(option);
  }

  $('#city-type').on('change', function(){
    var cities = $('#city-type').val();
    cities = cities.toLowerCase().trim();
 

    if(cities === 'austin') {

      $('body').css('background-image', 'url(austin.jpg)');

    } else if(cities === 'los angeles') {

      $('body').css('background-image', 'url(la.jpg)');

    } else if(cities === 'new york city') {

      $('body').css('background-image', 'url(nyc.jpg)');

    } else if (cities === 'san francisco'){

      $('body').css('background-image', 'url(sf.jpg)');
    }

    else if (cities === 'sydney') {

      $('body').css('background-image', 'url(sydney.jpg)');
    } 

    else {

      $('body').css('background-image', 'url(./citipix_skyline.jpg)');
      
    }
  });


  $('#city-name').trigger('change');

 // based on the value

 
});