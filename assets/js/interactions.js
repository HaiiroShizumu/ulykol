// 3D tilt
function tilt3D(el,amount){
 el.addEventListener('mousemove',e=>{
 const r=el.getBoundingClientRect();
 const x=(e.clientX-r.left-r.width/2)/r.width*amount;
 const y=(e.clientY-r.top-r.height/2)/r.height*amount;
 el.style.transform=`translateY(-4px) perspective(600px) rotateY(${x}deg) rotateX(${-y}deg)`;
 });
 el.addEventListener('mouseleave',()=>{el.style.transform=''});
}
document.querySelectorAll('.exp-card').forEach(c=>tilt3D(c,3));
document.querySelectorAll('.edu-card').forEach(c=>tilt3D(c,4));
document.querySelectorAll('.skill-cell').forEach(c=>{
 c.addEventListener('mousemove',e=>{
 const r=c.getBoundingClientRect();
 const x=(e.clientX-r.left-r.width/2)/r.width*6;
 const y=(e.clientY-r.top-r.height/2)/r.height*6;
 const svg=c.querySelector('svg');
 if(svg)svg.style.transform=`scale(1.1) translateX(${x}px) translateY(${y}px)`;
 });
 c.addEventListener('mouseleave',()=>{const svg=c.querySelector('svg');if(svg)svg.style.transform=''});
});

// Magnetic buttons
document.querySelectorAll('.btn').forEach(btn=>{
 btn.addEventListener('mousemove',e=>{
 const r=btn.getBoundingClientRect();
 btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`;
 });
 btn.addEventListener('mouseleave',()=>{btn.style.transform=''});
});
