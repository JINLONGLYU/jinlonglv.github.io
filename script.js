// 页脚年份
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// 移动端菜单开关
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (navToggle && nav){
  navToggle.addEventListener('click', ()=>{
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
