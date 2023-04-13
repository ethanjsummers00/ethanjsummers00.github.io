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

// // image slides
// const slides = document.querySelectorAll(".slide");

// // loop through slides and set each slides translateX
// slides.forEach((slide, indx) => {
//   slide.style.transform = `translateX(${indx * 100}%)`;
// });

// // select next slide button
// const nextSlide = document.querySelector(".btn-next");

// // current slide counter
// let curSlide = 0;
// // maximum number of slides
// let maxSlide = slides.length - 1;

// // add event listener and navigation functionality
// nextSlide.addEventListener("click", function () {
//   // check if current slide is the last and reset current slide
// if (curSlide === maxSlide) {
//     curSlide = 0;
// } else {
//     curSlide++;
// }

//   //   move slide by -100%
// slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
// });
// });

// // select next slide button
// const prevSlide = document.querySelector(".btn-prev");

// // add event listener and navigation functionality
// prevSlide.addEventListener("click", function () {
//   // check if current slide is the first and reset current slide to last
// if (curSlide === 0) {
//     curSlide = maxSlide;
// } else {
//     curSlide--;
// }

//   //   move slide by 100%
// slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
// });
// });

(function() {

    init(); //on page load - show first slide, hidethe rest
  
    function init() {
  
      parents = document.getElementsByClassName('portfolioSlider');
  
      for (j = 0; j < parents.length; j++) {
        var slides = parents[j].getElementsByClassName("slide");
        // var dots = parents[j].getElementsByClassName("dot");
        slides[0].classList.add('active-slide');
        dots[0].classList.add('active');
      }
    }
  
    dots = document.getElementsByClassName('dot'); //dots functionality
  
    for (i = 0; i < dots.length; i++) {
  
      dots[i].onclick = function() {
  
        slides = this.parentNode.parentNode.getElementsByClassName("slide");
  
        for (j = 0; j < this.parentNode.children.length; j++) {
          this.parentNode.children[j].classList.remove('active');
          slides[j].classList.remove('active-slide');
          if (this.parentNode.children[j] == this) {
            index = j;
          }
        }
        this.classList.add('active');
        slides[index].classList.add('active-slide');
  
      }
    }
  //prev/next functionality
    links = document.querySelectorAll('.slideshow-container a');
  
    for (i = 0; i < links.length; i++) {
      links[i].onclick = function() {
        current = this.parentNode;
  
        var slides = current.getElementsByClassName("slide");
        // var dots = current.getElementsByClassName("dot");
        curr_slide = current.getElementsByClassName('active-slide')[0];
        curr_dot = current.getElementsByClassName('active')[0];
        curr_slide.classList.remove('active-slide');
        curr_dot.classList.remove('active');
        if (this.className == 'next') {
  
          if (curr_slide.nextElementSibling.classList.contains('slide')) {
            curr_slide.nextElementSibling.classList.add('active-slide');
            curr_dot.nextElementSibling.classList.add('active');
          } else {
            slides[0].classList.add('active-slide');
            dots[0].classList.add('active');
          }
  
        }
  
        if (this.className == 'prev') {
  
          if (curr_slide.previousElementSibling) {
            curr_slide.previousElementSibling.classList.add('active-slide');
            curr_dot.previousElementSibling.classList.add('active');
          } else {
            slides[slides.length - 1].classList.add('active-slide');
            dots[slides.length - 1].classList.add('active');
          }
  
        }
  
      }
  
    }
  })();