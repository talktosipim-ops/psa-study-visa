const menuBtn=document.querySelector('.menuBtn');
const navlinks=document.querySelector('.navlinks');
if(menuBtn&&navlinks){menuBtn.addEventListener('click',()=>{const open=navlinks.dataset.open==='1';navlinks.dataset.open=open?'0':'1';navlinks.style.display=open?'none':'flex';navlinks.style.position='absolute';navlinks.style.top='68px';navlinks.style.left='12px';navlinks.style.right='12px';navlinks.style.flexDirection='column';navlinks.style.alignItems='stretch';navlinks.style.background='#fff';navlinks.style.padding='14px 20px';navlinks.style.border='1px solid #e6e9ef';navlinks.style.borderRadius='16px';navlinks.style.boxShadow='0 18px 50px rgba(11,42,74,.14)';navlinks.querySelectorAll('a').forEach(a=>a.style.padding='10px 0');});}

const form=document.querySelector('#courseForm');
const results=document.querySelector('#results');
const courses=[
 {country:'Australia',level:'Bachelor',area:'Business',title:'Bachelor of Business',city:'Melbourne',note:'ตัวอย่างหลักสูตรเพื่อใช้เป็นต้นแบบการค้นหา'},
 {country:'Australia',level:'Master',area:'IT',title:'Master of Information Technology',city:'Sydney',note:'ตัวอย่างหลักสูตรเพื่อใช้เป็นต้นแบบการค้นหา'},
 {country:'New Zealand',level:'Diploma',area:'Hospitality',title:'Diploma in Hospitality Management',city:'Auckland',note:'ตัวอย่างหลักสูตรเพื่อใช้เป็นต้นแบบการค้นหา'},
 {country:'UK',level:'Master',area:'Business',title:'MSc International Business',city:'London',note:'ตัวอย่างหลักสูตรเพื่อใช้เป็นต้นแบบการค้นหา'},
 {country:'UK',level:'Bachelor',area:'Design',title:'BA (Hons) Graphic Design',city:'Manchester',note:'ตัวอย่างหลักสูตรเพื่อใช้เป็นต้นแบบการค้นหา'},
 {country:'New Zealand',level:'Bachelor',area:'IT',title:'Bachelor of Information Technology',city:'Wellington',note:'ตัวอย่างหลักสูตรเพื่อใช้เป็นต้นแบบการค้นหา'}
];
function renderResults(items){if(!results)return;results.innerHTML=items.length?items.map(c=>`<div class="result"><h3>${c.title}</h3><div class="result-meta"><span class="tag">${c.country}</span><span class="tag">${c.level}</span><span class="tag">${c.area}</span><span class="tag">${c.city}</span></div><p>${c.note}</p><a class="btn btn-secondary" href="contact.html">ขอข้อมูลหลักสูตร</a></div>`).join(''):'<div class="notice">ยังไม่พบหลักสูตรที่ตรงกับตัวกรอง ลองเลือกเงื่อนไขอื่น หรือส่งข้อมูลให้ PSA ช่วยค้นให้ค่ะ</div>'}
if(form){renderResults(courses);form.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(form);const c=fd.get('country'),l=fd.get('level'),a=fd.get('area');const filtered=courses.filter(x=>(!c||x.country===c)&&(!l||x.level===l)&&(!a||x.area===a));renderResults(filtered);});}
