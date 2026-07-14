// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth'})}));

// Hamburger menu
const burger=document.getElementById('navBurger');
const navLinks=document.getElementById('navLinks');
if(burger&&navLinks){
 burger.addEventListener('click',()=>{burger.classList.toggle('active');navLinks.classList.toggle('open')});
 navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{burger.classList.remove('active');navLinks.classList.remove('open')}));
}
