// Your code goes here



const navBar = document.querySelectorAll('nav a');
    Array.from(navBar).forEach(elem => {
        elem.addEventListener('click', function(event){
            event.target.style.color = 'green';
              //  event.stopPropagation();
        });
   
 });

 const imgOpacity = document.querySelectorAll('img');
 imgOpacity.forEach(item => {
    item.addEventListener('mousemove', () => {
       item.style.opacity = '0.5';
    })
 })

//  const navLinks = document.getElementsByTagName("nav a");
// navLinks.forEach((item) => {
//   item.addEventListener("click", function (event) {
//     navLinks.innerHTML += "Sorry can't do that!";
//     event.preventDefault();
//   });

//  const buttonElement = document.getElementById('btn');


// buttonElement.addEventListener('click', function (event) {
//   alert('Element clicked through function!');
// });


// buttonElement.addEventListener('click', {
//   handleEvent: function (event) {
//     alert('Element clicked through handleEvent property!');
//   }
// });

function escKey(event){
  
}

document.addEventListener("keydown",escKey)