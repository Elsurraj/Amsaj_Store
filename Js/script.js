
//js for handbugger Menu

//  function menutoggle() {
//       var menuItems = document.getElementById("menuItems");
//       if (menuItems.style.maxHeight === "0px" || !menuItems.style.maxHeight) {
//         menuItems.style.maxHeight = "200px";
//       } else {
//         menuItems.style.maxHeight = "0px";
//       }
//     }
//     var menuItems=document.getElementById("menuItems");
//  menuItems.style.maxHeight='0px';

// function menutoggle(){
//     if(menuItems.style.maxHeight=='0px'){
//      menuItems.style.maxHeight='200px';
//     }
//     else{
//         menuItems.style.maxHeight='0px';
//     }
// }


const year = new Date().getFullYear();
 document.getElementById('currentYear').textContent = year;

    //js for small product
var LoginForm = document.getElementById('LoginForm');
var RegForm = document.getElementById('RegForm');
var Indicator = document.getElementById('Indicator');

     const register = () =>{
         RegForm.style.transform = 'translateX(0px)';
         LoginForm.style.transform = 'translateX(0px)';
         Indicator.style.transform = 'translateX(100px)';
     }
     const login = () =>{
        RegForm.style.transform = 'translateX(300px)';
        LoginForm.style.transform = 'translateX(300px)';
        Indicator.style.transform = 'translateX(0px)';
    }

    function menutoggle() {
    var menu = document.getElementById("menuItems");
    menu.classList.toggle("active");
}



    

// //js for small product 
// var LoginForm = document.getElementById('LoginForm');
// var RegForm = document.getElementById('RegForm');
// var Indicator = document.getElementById('Indicator');

//      const register = () =>{
//          RegForm.style.transform = 'translate(0px)';
//          LoginForm.style.translate = 'translate(0px)';
//      }
//      const login = () =>{
//         RegForm.style.transform = 'translate(300px)';
//         LoginForm.style.translate = 'translate(300px)';
//     }