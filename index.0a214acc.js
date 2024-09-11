var t=document.querySelectorAll(".population"),e=[];t.forEach(function(t){e.push(+t.innerHTML.split(",").join(""))});var n=e.reduce(function(t,e){return t+e},0),o=n/e.length,r=function(t){return t.toLocaleString()};document.querySelector(".average-population").textContent=r(o),document.querySelector(".total-population").textContent=r(n);
//# sourceMappingURL=index.0a214acc.js.map
