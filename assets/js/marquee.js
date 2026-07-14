// Marquee
const marquee=document.querySelector('.marquee-inner');
let pos=0,speed=.4;
(function animate(){pos-=speed;marquee.style.transform=`translateX(${pos}px)`;if(Math.abs(pos)>=marquee.scrollWidth/2)pos=0;requestAnimationFrame(animate)})();
