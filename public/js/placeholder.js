(function(c){function f(a,i,h){return a.addEventListener?a.addEventListener(i,h,!1):a.attachEvent?a.attachEvent("on"+i,h):void 0}function d(a,i){var h,j;for(h=0,j=a.length;j>h;h++){if(a[h]===i){return !0}}return !1}function g(a,i){var h;a.createTextRange?(h=a.createTextRange(),h.move("character",i),h.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(i,i))}function b(a,i){try{return a.type=i,!0}catch(h){return !1}}c.Placeholders={Utils:{addEventListener:f,inArray:d,moveCaret:g,changeType:b}}})(this),function(ao){function aE(a){var b;return a.value===a.getAttribute(O)&&"true"===a.getAttribute(Z)?(a.setAttribute(Z,"false"),a.value="",a.className=a.className.replace(Q,""),b=a.getAttribute(W),b&&(a.type=b),!0):!1}function aq(a){var b;return""===a.value?(a.setAttribute(Z,"true"),a.value=a.getAttribute(O),a.className+=" "+ay,b=a.getAttribute(W),b?a.type="text":"password"===a.type&&aa.changeType(a,"text")&&a.setAttribute(W,"password"),!0):!1}function av(f,h){var g,j,b,c,d;if(f&&f.getAttribute(O)){h(f)}else{for(g=f?f.getElementsByTagName("input"):g,j=f?f.getElementsByTagName("textarea"):j,d=0,c=g.length+j.length;c>d;d++){b=g.length>d?g[d]:j[d-g.length],h(b)}}}function aI(a){av(a,aE)}function an(a){av(a,aq)}function aA(a){return function(){aD&&a.value===a.getAttribute(O)&&"true"===a.getAttribute(Z)?aa.moveCaret(a,0):aE(a)}}function ax(a){return function(){aq(a)}}function aG(a){return function(b){return at=a.value,"true"===a.getAttribute(Z)?!(at===a.getAttribute(O)&&aa.inArray(af,b.keyCode)):void 0}}function au(a){return function(){var b;"true"===a.getAttribute(Z)&&a.value!==at&&(a.className=a.className.replace(Q,""),a.value=a.value.replace(a.getAttribute(O),""),a.setAttribute(Z,!1),b=a.getAttribute(W),b&&(a.type=b)),""===a.value&&(a.blur(),aa.moveCaret(a,0))}}function ap(a){return function(){a===document.activeElement&&a.value===a.getAttribute(O)&&"true"===a.getAttribute(Z)&&aa.moveCaret(a,0)}}function aF(a){return function(){aI(a)}}function aC(a){a.form&&(ak=a.form,ak.getAttribute(K)||(aa.addEventListener(ak,"submit",aF(ak)),ak.setAttribute(K,"true"))),aa.addEventListener(a,"focus",aA(a)),aa.addEventListener(a,"blur",ax(a)),aD&&(aa.addEventListener(a,"keydown",aG(a)),aa.addEventListener(a,"keyup",au(a)),aa.addEventListener(a,"click",ap(a))),a.setAttribute(az,"true"),a.setAttribute(O,aj),aq(a)}var am,aH,aD,aB,at,aw,ah,aj,ad,ak,M,X,Y,al=["text","search","url","tel","email","password","number","textarea"],af=[27,33,34,35,36,37,38,39,40,8,46],ag="#ccc",ay="placeholdersjs",Q=RegExp("\\b"+ay+"\\b"),O="data-placeholder-value",Z="data-placeholder-active",W="data-placeholder-type",K="data-placeholder-submit",az="data-placeholder-bound",J="data-placeholder-focus",ar="data-placeholder-live",ai=document.createElement("input"),ae=document.getElementsByTagName("head")[0],ac=document.documentElement,ab=ao.Placeholders,aa=ab.Utils;if(void 0===ai.placeholder){for(am=document.getElementsByTagName("input"),aH=document.getElementsByTagName("textarea"),aD="false"===ac.getAttribute(J),aB="false"!==ac.getAttribute(ar),aw=document.createElement("style"),aw.type="text/css",ah=document.createTextNode("."+ay+" { color:"+ag+"; }"),aw.styleSheet?aw.styleSheet.cssText=ah.nodeValue:aw.appendChild(ah),ae.insertBefore(aw,ae.firstChild),Y=0,X=am.length+aH.length;X>Y;Y++){M=am.length>Y?am[Y]:aH[Y-am.length],aj=M.getAttribute("placeholder"),aj&&aa.inArray(al,M.type)&&aC(M)}ad=setInterval(function(){for(Y=0,X=am.length+aH.length;X>Y;Y++){M=am.length>Y?am[Y]:aH[Y-am.length],aj=M.getAttribute("placeholder"),aj&&aa.inArray(al,M.type)&&(M.getAttribute(az)||aC(M),(aj!==M.getAttribute(O)||"password"===M.type&&!M.getAttribute(W))&&("password"===M.type&&!M.getAttribute(W)&&aa.changeType(M,"text")&&M.setAttribute(W,"password"),M.value===M.getAttribute(O)&&(M.value=aj),M.setAttribute(O,aj)))}aB||clearInterval(ad)},100)}ab.disable=aI,ab.enable=an}(this);