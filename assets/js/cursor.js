// Cursor
const cursor=document.getElementById('cursor'),cursorDot=document.getElementById('cursorDot');
let mx=0,my=0,cx=0,cy=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursorDot.style.left=mx-2+'px';cursorDot.style.top=my-2+'px'});
(function loop(){cx+=(mx-cx)*.12;cy+=(my-cy)*.12;cursor.style.left=cx-8+'px';cursor.style.top=cy-8+'px';requestAnimationFrame(loop)})();
document.querySelectorAll('a,button,.btn,.skill-cell,.exp-card,.edu-card,.cert,.contact-item').forEach(el=>{
 el.addEventListener('mouseenter',()=>cursor.classList.add('hover'));
 el.addEventListener('mouseleave',()=>cursor.classList.remove('hover'));
});
if('ontouchstart'in window||navigator.maxTouchPoints>0){cursor.style.display='none';cursorDot.style.display='none'}
