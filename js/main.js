
AOS.init({duration:700,once:true,easing:'ease-out-cubic'});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const root = document.body;
function setTheme(dark){
  if(dark) root.classList.add('dark'); else root.classList.remove('dark');
  localStorage.setItem('pfg-dark', dark? '1':'0');
  themeToggle.innerHTML = dark ? '<i class="fa-regular fa-sun"></i>' : '<i class="fa-regular fa-moon"></i>';
}
const pref = localStorage.getItem('pfg-dark');
setTheme(pref === '1');
themeToggle && themeToggle.addEventListener('click', ()=> setTheme(!root.classList.contains('dark')));

// Contact demo
document.addEventListener('submit', function(e){
  if(e.target && e.target.id === 'contactForm'){
    e.preventDefault();
    document.getElementById('contactStatus').textContent = 'Thanks — message sent (demo).';
    e.target.reset();
  }
});

// BMI calculator (membership page)
const bmiForm = document.getElementById('bmiForm');
if(bmiForm){
  bmiForm.addEventListener('submit', function(e){
    e.preventDefault();
    const w = parseFloat(document.getElementById('bmiWeight').value);
    const hCm = parseFloat(document.getElementById('bmiHeight').value);
    if(!w || !hCm) return;
    const h = hCm/100;
    const bmi = w/(h*h);
    let label = '';
    if(bmi < 18.5) label='Underweight';
    else if(bmi < 25) label='Normal';
    else if(bmi < 30) label='Overweight';
    else label='Obese';
    document.getElementById('bmiResult').innerHTML = '<strong>BMI:</strong> ' + bmi.toFixed(1) + ' — ' + label;
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});
