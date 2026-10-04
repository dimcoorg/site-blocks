/* EverGreen landing page variant B · FORM HEADING ONLY · built 2026-10-04 by EAD/landing_b/build.py · hosted on GitHub Pages.
   Page line: <script src="https://dimcoorg.github.io/site-blocks/ead-lp-heading.js" defer></script>
   Changes the booking widget heading "Schedule Ducts & Vents Cleaning Now" to "Pick Your Package, Then Your Time" and keeps it changed through GHL's repaint (checks for 60 s). Nothing else. */
(function(){
  var FROM=/Schedule Ducts\s*&\s*Vents Cleaning Now/i, TO="Pick Your Package, Then Your Time";
  function swap(){ var hs=document.querySelectorAll('[id^="heading-"],h1,h2,h3'); var n=0; for(var i=0;i<hs.length;i++){ if(FROM.test(hs[i].textContent||"")){ var tn, w=document.createTreeWalker(hs[i], NodeFilter.SHOW_TEXT); while((tn=w.nextNode())){ if(FROM.test(tn.nodeValue)){ tn.nodeValue=tn.nodeValue.replace(FROM,TO); n++; } } } } return n; }
  var t0=Date.now(); function tick(){ try{ swap(); }catch(e){} if(Date.now()-t0<60000) setTimeout(tick,400); }
  function start(){ tick(); try{ new MutationObserver(function(){ if(Date.now()-t0<120000) swap(); }).observe(document.body,{childList:true,subtree:true,characterData:true}); }catch(e){} }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
