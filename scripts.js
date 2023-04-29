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


function pageSwitch() {
    const strongColor = document.querySelector('strong');
    const footColor = document.querySelector('footer');
    const aboutSectionStatus = document.querySelector('#aboutPage');
    const portfolioPageStatus = document.querySelector('#portfolioPage');
    const headBlock = document.querySelector('#headBlock');

    if (document.getElementById("pageSwitch").checked == true) {
        strongColor.style.backgroundColor = "var(--blue)";
        footColor.style.backgroundColor = "var(--blue)";
        aboutSectionStatus.style.display = "none";
        portfolioPageStatus.style.display = "block";
        headBlock.style.display = "none";
        // document.getElementById("orn").style.color = "#000000";
        // document.getElementById("blu").style.color = "var(--blue)";
    }
    if (document.getElementById("pageSwitch").checked == false){
        strongColor.style.backgroundColor = "var(--orange)";
        footColor.style.backgroundColor = "var(--orange)";
        aboutSectionStatus.style.display = "block";
        portfolioPageStatus.style.display = "none";
        headBlock.style.display = "block";
        // document.getElementById("orn").style.color = "var(--orange)";
        // document.getElementById("blu").style.color = "#000000";
    }

    console.log(document.getElementById("pageSwitch").checked);
}

var slideIndex = 1;
    displaySlide(slideIndex);
  
    function moveSlides(n) {
        displaySlide(slideIndex += n);
    }
  
    function activeSlide(n) {
        displaySlide(slideIndex = n);
    }
  
    /* Main function */
    function displaySlide(n) {
        var i;
        var totalslides =
            document.getElementsByClassName("slide");
        var totaldots =
            document.getElementsByClassName("footerdot");
         
        if (n > totalslides.length) {
            slideIndex = 1;
        }
         
        if (n < 1) {
            slideIndex = totalslides.length;
        }
        for (i = 0; i < totalslides.length; i++) {
            totalslides[i].style.display = "none";
        }
        for (i = 0; i < totaldots.length; i++) {
            totaldots[i].className =
            totaldots[i].className.replace(" active", "");
        }
        totalslides[slideIndex - 1].style.display = "flex";
        totaldots[slideIndex - 1].className += " active";
    }