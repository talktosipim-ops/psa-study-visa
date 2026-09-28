const menuBtn=document.querySelector('.menuBtn');
const navlinks=document.querySelector('.navlinks');
if(menuBtn&&navlinks){menuBtn.addEventListener('click',()=>{const open=navlinks.dataset.open==='1';navlinks.dataset.open=open?'0':'1';navlinks.style.display=open?'none':'flex';navlinks.style.position='absolute';navlinks.style.top='68px';navlinks.style.left='12px';navlinks.style.right='12px';navlinks.style.flexDirection='column';navlinks.style.alignItems='stretch';navlinks.style.background='#fff';navlinks.style.padding='14px 20px';navlinks.style.border='1px solid #e6e9ef';navlinks.style.borderRadius='16px';navlinks.style.boxShadow='0 18px 50px rgba(11,42,74,.14)';navlinks.querySelectorAll('a').forEach(a=>a.style.padding='10px 0');});}

const form=document.querySelector('#courseForm');
const results=document.querySelector('#results');
const partnerInstitutions=[
 {country:'Australia',provider:'Gamma College',areas:['Other'],website:'',note:'สถาบันตัวแทน PSA — ติดต่อ PSA เพื่อค้นหาหลักสูตรที่เปิดรับล่าสุด'},
 {country:'New Zealand',provider:'ICL Education Group',areas:['English','Business','Information Technology','Other'],website:'https://www.icl.ac.nz/',note:'Auckland — มีหลักสูตรภาษาอังกฤษ ธุรกิจ และโปรแกรมระดับสูงหลายระดับ'},
 {country:'Australia',provider:'National Polytechnic of Australia (NPA)',areas:['Business','Information Technology','Hospitality','Automotive / Trades','Other'],website:'https://npa.edu.au/',note:'สถาบันตัวแทน PSA — ตรวจสอบหลักสูตรและ intake ล่าสุดก่อนสมัคร'},
 {country:'Australia',provider:'BROWNS English Language School',areas:['English'],website:'https://brownsenglish.edu.au/',note:'สถาบันภาษาอังกฤษ — ตรวจสอบแคมปัสและโปรแกรมล่าสุดก่อนสมัคร'},
 {country:'Australia',provider:'ALS College',areas:['English','Business','Other'],website:'https://alscollege.com.au/',note:'Brisbane — มีหลักสูตรภาษาอังกฤษและสายอาชีพ'},
 {country:'Australia',provider:'Reach Community College',areas:['English','Business','Information Technology','Hospitality','Community Services','Automotive / Trades','Other'],website:'https://reachcollege.edu.au/',note:'มีหลักสูตรหลายสาย และแคมปัสใน NSW, VIC และ Tasmania'},
 {country:'Australia',provider:'Milner International College of English',areas:['English'],website:'https://www.milner.wa.edu.au/',note:'Perth — สถาบันภาษาอังกฤษตัวแทน PSA'},
 {country:'Australia',provider:'Holmes Institute',areas:['Business','Information Technology','Accounting & Finance','Cybersecurity','Education & Teaching','Aviation','Fashion','Other'],website:'https://holmes.edu.au/',note:'Melbourne, Sydney, Brisbane และ Gold Coast — มีหลักสูตรระดับอุดมศึกษาหลากหลายสาขา'}
];
function renderResults(items){
 if(!results)return;
 results.innerHTML=items.length?items.map(x=>`<div class="result"><h3>${x.provider}</h3><div class="result-meta"><span class="tag">${x.country}</span>${x.areas.map(a=>`<span class="tag">${a}</span>`).join('')}</div><p>${x.note}</p><div style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn btn-primary" href="contact.html">ให้ PSA ช่วยเลือกคอร์ส</a>${x.website? `<a class="btn btn-secondary" href="${x.website}" target="_blank" rel="noopener">เว็บไซต์สถาบัน</a>`:''}</div></div>`).join(''):'<div class="notice">ยังไม่พบสถาบันตัวแทน PSA ที่ตรงกับตัวกรอง กรุณาเลือกเงื่อนไขอื่นหรือติดต่อ PSA เพื่อให้ช่วยตรวจสอบทางเลือกค่ะ</div>';
}
if(form){
 renderResults(partnerInstitutions);
 form.addEventListener('submit',e=>{
   e.preventDefault();
   const fd=new FormData(form);
   const country=fd.get('country'),provider=fd.get('provider'),area=fd.get('area');
   const filtered=partnerInstitutions.filter(x=>(!country||x.country===country)&&(!provider||x.provider===provider)&&(!area||x.areas.includes(area)));
   renderResults(filtered);
 });
}
