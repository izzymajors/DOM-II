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

 const btn = document.getElementsByClassName("btn");
 btn.addEventListener('focusin', function(event) {
     
 });