/* We Mount Your TVs · tvm-booker-split.js · 10/9/26 — HOMEPAGE booker split without a GHL split (one URL, no variant page, no redirect = nothing for Google to index twice).
   Flips a coin once per visitor (localStorage wm_hp, sticky), then loads tvm-booker.js (A, quiz first) or tvm-booker-cal.js (B, calendar first) right where this line sits.
   window.WM_HP tells the booker its arm: GA4 gets ib_*_hpa / ib_*_hpb twins + book_appointment_hpa/_hpb, the contact summary field gets "hp A/B". Paid pages load the bookers directly and never see WM_HP. */
(function(){ var K="wm_hp", a=null; try{ a=localStorage.getItem(K); }catch(e){}
  if(a!=="A"&&a!=="B"){ a=Math.random()<0.5?"A":"B"; try{ localStorage.setItem(K,a); }catch(e){} }
  window.WM_HP=a; var s=document.currentScript, t=document.createElement("script"); t.src="https://dimcoorg.github.io/site-blocks/"+(a==="B"?"tvm-booker-cal.js":"tvm-booker.js"); t.setAttribute("data-hp",a);
  if(s&&s.parentNode) s.parentNode.insertBefore(t,s.nextSibling); else document.body.appendChild(t); })();
