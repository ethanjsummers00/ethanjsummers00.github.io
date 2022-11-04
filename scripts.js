var year = (new Date()).getFullYear();
var month = (new Date()).getMonth();
var day = (new Date()).getDate();
var age = 0;

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

function pageSwitch() {
    const strongColor = document.querySelector('strong');
    const footColor = document.querySelector('footer');
    const aboutPageStatus = document.querySelector('#aboutPage');
    const portfolioPageStatus = document.querySelector('#portfolioPage');

    if (document.getElementById("pageSwitch").checked == true) {
        strongColor.style.backgroundColor = "var(--blue)";
        footColor.style.backgroundColor = "var(--blue)";
        aboutPageStatus.style.display = "none";
        portfolioPageStatus.style.display = "flex";
    }
    if (document.getElementById("pageSwitch").checked == false){
        strongColor.style.backgroundColor = "var(--orange)";
        footColor.style.backgroundColor = "var(--orange)";
        aboutPageStatus.style.display = "flex";
        portfolioPageStatus.style.display = "none";
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