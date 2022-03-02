var year = (new Date()).getFullYear();
var month = (new Date()).getMonth();
var day = (new Date()).getDate();
var age = 0;

if (month >= 10){
    age += year - 2021;
}
else {
    age = year - 2001;
}

document.getElementById("myAge").innerHTML = age;

var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });

  // Toggle button
  document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
  });