// Scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis')}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Skill bars
const sio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const f=e.target.querySelector('.skill-fill');if(f)f.style.width=f.dataset.w}}),{threshold:.3});
document.querySelectorAll('.skill-cell').forEach(el=>sio.observe(el));
