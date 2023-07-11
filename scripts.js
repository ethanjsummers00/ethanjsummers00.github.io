const strongColor = document.querySelector('strong');
const footColor = document.querySelector('footer');
const aboutSectionStatus = document.querySelector('#aboutPage');
const portfolioPageStatus = document.querySelector('#portfolioPage');
const contactPageStatus = document.querySelector('#contactPage');
const aboutTab = document.getElementById('aboutTab')
const portfolioTab = document.getElementById('portfolioTab')

var year = (new Date()).getFullYear();
var month = (new Date()).getMonth();
var day = (new Date()).getDate();
var age = 0;

// $( document ).ready(function(){
//     $(window).scroll( function(){
//         $('.hideMe').each( function(i){
//             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//             if( bottom_of_window > bottom_of_object ){
//                 $(this).animate({'opacity':'1'},500);
//             }
//         }); 
//     });
//   });

function myAge() {
    if (month >= 10) {
        age += year - 2000;
    }
    else {
        age = year - 2001;
    }
    document.getElementById("myAge").innerHTML = age;
}
myAge();

// keeps pageSwitch state on refresh
$(function(){
    var test = localStorage.input === 'true'? true: false;
    $('input').prop('checked', test || false);
});

$('input').on('change', function() {
    localStorage.input = $(this).is(':checked');
    console.log($(this).is(':checked'));
});

// keeps index page state on refresh
$(document).ready(function(){
    $('input[type=checkbox]').each(function(i,x) {
        if ($(x).is(':checked')) {
            pageSwitch();
        }   
    });
  });

// changes color and page content depending on the state of the switch
// function pageSwitch() {
//     let pageNum = 0;


//     if (document.getElementById("pageSwitch").checked == true) {
//         strongColor.style.backgroundColor = "var(--blue)";
//         footColor.style.backgroundColor = "var(--blue)";
//         aboutSectionStatus.style.display = "none";
//         portfolioPageStatus.style.display = "block";
//         headBlock.style.display = "none";
//         // document.getElementById("orn").style.color = "#000000";
//         // document.getElementById("blu").style.color = "var(--blue)";
//     }
//     if (document.getElementById("pageSwitch").checked == false){
//         strongColor.style.backgroundColor = "var(--orange)";
//         footColor.style.backgroundColor = "var(--orange)";
//         aboutSectionStatus.style.display = "block";
//         portfolioPageStatus.style.display = "none";
//         headBlock.style.display = "block";
//         // document.getElementById("orn").style.color = "var(--orange)";
//         // document.getElementById("blu").style.color = "#000000";
//     }

//     console.log(document.getElementById("pageSwitch").checked);
// }

document.getElementById('aboutTab').onclick = function() {
    strongColor.style.backgroundColor = "var(--orange)";
    footColor.style.backgroundColor = "var(--orange)";
    aboutSectionStatus.style.display = "block";
    portfolioPageStatus.style.display = "none";
    contactPageStatus.style.display = "none";
    aboutTab.className = "orange";
    contactTab.className = "none"
    portfolioTab.className = "none";
}

document.getElementById('portfolioTab').onclick = function() {
    strongColor.style.backgroundColor = "var(--blue)";
    footColor.style.backgroundColor = "var(--blue)";
    aboutSectionStatus.style.display = "none";
    portfolioPageStatus.style.display = "block";
    contactPageStatus.style.display = "none";
    aboutTab.className = "none";
    contactTab.className = "none"
    portfolioTab.className = "blue";
}

document.getElementById('contactTab').onclick = function() {
    strongColor.style.backgroundColor = "var(--purple)";
    footColor.style.backgroundColor = "var(--purple)";
    aboutSectionStatus.style.display = "none";
    portfolioPageStatus.style.display = "none";
    contactPageStatus.style.display = "block";
    aboutTab.className = "none";
    contactTab.className = "purple"
    portfolioTab.className = "none";
}