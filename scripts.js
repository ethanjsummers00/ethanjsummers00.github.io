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
    // const pageColor = document.documentElement;

    /* idea for later - condense the changing color value into a css var and just change the value
    of that instead of every elements BC value */
    // if(document.getElementById("pageSwitch").checked == true){
    //     pageColor.style.setProperty("--switchingColor", "--blue")
    // }
    // if(document.getElementById("pageSwitch").checked == false){
    //     pageColor.style.setProperty("--switchingColor", "--orange")
    // }

    if (document.getElementById("pageSwitch").checked == true) {
        strongColor.style.backgroundColor = "var(--blue)";
        footColor.style.backgroundColor = "var(--blue)";
        aboutSectionStatus.style.display = "none";
        portfolioPageStatus.style.display = "block";
        headBlock.style.display = "none";
    }
    if (document.getElementById("pageSwitch").checked == false){
        strongColor.style.backgroundColor = "var(--orange)";
        footColor.style.backgroundColor = "var(--orange)";
        aboutSectionStatus.style.display = "block";
        portfolioPageStatus.style.display = "none";
        headBlock.style.display = "block";
    }

    console.log(document.getElementById("pageSwitch").checked);
}






// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
// }
  
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
// }