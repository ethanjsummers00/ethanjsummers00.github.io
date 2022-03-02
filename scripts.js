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