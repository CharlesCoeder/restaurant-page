(()=>{"use strict";const e=function(){const e=document.getElementById("content"),t=document.querySelector(".main"),n=document.createElement("div");n.classList.add("hero"),n.innerHTML="<h1>Unimaginable flavor. Impeccable results.</h1>",t.appendChild(n);const i=document.createElement("div");i.classList.add("container");const a=document.createElement("div");a.classList.add("text");const s=document.createElement("p");s.textContent="This is a description about our restaurant! We love to serve only the best food and yeah I'm just writing random text to fill up the space.";const c=document.createElement("p");c.textContent="Purus non enim praesent elementum facilisis leo vel fringilla. Fusce ut placerat orci nulla pellentesque dignissim. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Lacus vel facilisis volutpat est velit egestas dui id. Aenean et tortor at risus viverra adipiscing at in tellus. Vitae turpis massa sed elementum tempus. In pellentesque massa placerat duis ultricies lacus sed turpis. Laoreet non curabitur gravida arcu ac tortor dignissim. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Sed ullamcorper morbi tincidunt ornare massa eget. Rutrum quisque non tellus orci. Urna id volutpat lacus laoreet. Sit amet consectetur adipiscing elit pellentesque habitant.";const u=document.createElement("p");u.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Sit amet facilisis magna etiam tempor. Auctor neque vitae tempus quam. Etiam erat velit scelerisque in dictum. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Et pharetra pharetra massa massa ultricies mi. Dis parturient montes nascetur ridiculus mus. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Cum sociis natoque penatibus et magnis dis parturient. Quis eleifend quam adipiscing vitae. Enim nunc faucibus a pellentesque sit. Eu augue ut lectus arcu bibendum. Tristique risus nec feugiat in fermentum posuere urna nec. Luctus venenatis lectus magna fringilla urna porttitor rhoncus.",a.appendChild(s),a.appendChild(c),a.appendChild(u),i.appendChild(a),t.appendChild(i),e.appendChild(t)};(function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("header");const n=document.createElement("h1");n.textContent="Burger & Fries",t.appendChild(n);const i=document.createElement("div");i.classList.add("buttons");const a=document.createElement("button");a.classList.add("homeBtn"),a.textContent="Home",i.appendChild(a);const s=document.createElement("button");s.classList.add("menuBtn"),s.textContent="Menu",i.appendChild(s);const c=document.createElement("button");c.classList.add("contactBtn"),c.textContent="Contact",i.appendChild(c);const u=document.createElement("div");u.classList.add("container"),u.classList.add("main"),e.appendChild(t),e.appendChild(i),e.appendChild(u)})(),e();const t=document.querySelector(".main");function n(){for(;t.firstChild;)t.removeChild(t.firstChild)}document.querySelector(".homeBtn").addEventListener("click",(()=>{n(),e()})),document.querySelector(".menuBtn").addEventListener("click",(()=>{n();const e=document.createElement("div");e.textContent="Menu page to be implemented...",t.appendChild(e)})),document.querySelector(".contactBtn").addEventListener("click",(()=>{n();const e=document.createElement("div");e.textContent="Contact page to be implemented...",t.appendChild(e)}))})();