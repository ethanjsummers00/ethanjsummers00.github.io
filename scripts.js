var year = (new Date()).getFullYear();
var month = (new Date()).getMonth();
var day = (new Date()).getDate();
var age = 21;

function myAge() {
    if (month >= 10) {
        age += year - 2021;
    }
    else {
        age = year - 2001;
    }
    document.getElementById("myAge").innerHTML = age;
}
myAge();

window.onscroll = function(){
    var aboutSec = document.getElementById('aboutSection');
    var resumeSec = document.getElementById('resumeSection');
    if (document.documentElement.scrollTop < resumeSec.getBoundingClientRect) {
        resumeSec.style.visibility = "hidden";
    }
    else {
        resumeSec.style.visibility = "visible";
    }
}

function pageSwitch() {
    const strongColor = document.querySelector('strong');
    const footColor = document.querySelector('footer');
    const aboutSectionStatus = document.querySelector('#aboutSection');
    const resumeSectionStatus = document.querySelector("#resumeSection");
    const portfolioPageStatus = document.querySelector('#portfolioPage');
    const headBlock = document.querySelector('#headBlock');

    /* idea for later - condense the changing color value into a css var and just change the value
    of that instead of every elements BC value */
    if (document.getElementById("pageSwitch").checked == true) {
        strongColor.style.backgroundColor = "var(--blue)";
        footColor.style.backgroundColor = "var(--blue)";
        aboutSectionStatus.style.display = "none";
        resumeSectionStatus.style.display = "none";
        portfolioPageStatus.style.display = "flex";
        headBlock.style.display = "none";
    }
    if (document.getElementById("pageSwitch").checked == false){
        strongColor.style.backgroundColor = "var(--orange)";
        footColor.style.backgroundColor = "var(--orange)";
        aboutSectionStatus.style.display = "flex";
        resumeSectionStatus.style.display = "grid";
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