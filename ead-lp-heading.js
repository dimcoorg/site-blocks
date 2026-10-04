/* EverGreen landing page variant B · FORM HEADING · built 2026-10-04 by EAD/landing_b/build.py · hosted on GitHub Pages.
   Page line: <script src="https://dimcoorg.github.io/site-blocks/ead-lp-heading.js" defer></script>  (put the Custom Code element right above the form's "Fill out the form below" line)
   1. Changes the widget heading "Schedule Ducts & Vents Cleaning Now" to "Pick Your Package, Then Your Time" wherever GHL shows it (desktop).
   2. On phones GHL hides that heading, so this renders the same heading inside the Custom Code element that carries this line (id ea-form-head), same green, Montserrat.
   Keeps both through GHL's repaint (checks for 60 s). */
(function(){
  var FROM=/Schedule Ducts\s*&\s*Vents Cleaning Now/i, TO="Pick Your Package, Then Your Time";
  function host(){ var tags=document.querySelectorAll('script[src*="ead-lp-heading"]'); for(var i=tags.length-1;i>=0;i--){ var c=tags[i].closest('[id^="custom-code-"]'); if(c) return c; } return null; }
  function ghlHeading(){ var hs=document.querySelectorAll('[id^="heading-"]'); for(var i=0;i<hs.length;i++){ var t=hs[i].textContent||""; if(FROM.test(t)||t.indexOf(TO)>=0) return hs[i]; } return null; }
  function visible(e){ if(!e) return false; var r=e.getBoundingClientRect(); return r.width>0&&r.height>0&&getComputedStyle(e).display!=="none"&&getComputedStyle(e).visibility!=="hidden"; }
  function swap(){ var h=ghlHeading(); if(h&&FROM.test(h.textContent)){ var tn, w=document.createTreeWalker(h, NodeFilter.SHOW_TEXT); while((tn=w.nextNode())){ if(FROM.test(tn.nodeValue)) tn.nodeValue=tn.nodeValue.replace(FROM,TO); } }
    var mine=document.getElementById("ea-form-head"), need=!visible(h);
    if(need&&!mine){ var ho=host(); if(ho){ if(!document.getElementById("ea-css-form-head")){ var st=document.createElement("style"); st.id="ea-css-form-head"; st.textContent='#ea-form-head{font-family:var(--headlinefont,"Montserrat"),"Montserrat",system-ui,-apple-system,"Segoe UI",Arial,sans-serif;font-weight:800;font-size:clamp(22px,6.4vw,28px);line-height:1.15;text-align:center;color:#46b51c!important;margin:4px 0 2px;padding:0 6px;text-wrap:balance}'; document.head.appendChild(st); }
      var d=document.createElement("div"); d.id="ea-form-head"; d.textContent=TO; ho.appendChild(d); } }
    if(mine&&!need) mine.style.display="none"; else if(mine&&need) mine.style.display=""; }
  var t0=Date.now(); function tick(){ try{ swap(); }catch(e){} if(Date.now()-t0<60000) setTimeout(tick,400); }
  function start(){ tick(); try{ new MutationObserver(function(){ if(Date.now()-t0<120000) swap(); }).observe(document.body,{childList:true,subtree:true,characterData:true}); }catch(e){} window.addEventListener("resize", swap); }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
