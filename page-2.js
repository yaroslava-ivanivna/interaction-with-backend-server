import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".js-posts-list"),c=t=>`<li class="posts-list-item">
<span class="post-index">${t.id}</span>
<h3 class="post-title">${t.title}</h3>
<p class="post-text">${t.body}</p>
<a href="#" class="post-link" data-id="${t.id}">Read more</a>
</li>`;fetch("https://jsonplaceholder.typicode.com/posts").then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{const o=t.map(c).join("");a.innerHTML=o,document.querySelectorAll(".post-link").forEach(e=>{e.addEventListener("click",l=>{l.preventDefault();const s=e.previousElementSibling;s.classList.toggle("expanded"),s.classList.contains("expanded")?e.textContent="Show less":e.textContent="Read more"})})}).catch(t=>{console.log(t)});
//# sourceMappingURL=page-2.js.map
