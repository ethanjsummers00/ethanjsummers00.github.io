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


// $(document).on("scroll", function() {
//     var pageTop = $(document).scrollTop();
//     var pageBottom = pageTop + $(window).height();
//     var tags = $(".tag");
  
//     for (var i = 0; i < tags.length; i++) {
//       var tag = tags[i];
  
//       if ($(tag).position().top < pageBottom) {
//         $(tag).addClass("visible");
//       } else {
//         $(tag).removeClass("visible");
//       }
//     }
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