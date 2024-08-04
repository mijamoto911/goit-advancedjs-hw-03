import{i as a,S as d}from"./assets/vendor-f33cd494.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g=({webformatURL:n,largeImageURL:s,tags:t,likes:o,views:e,comments:r,downloads:i})=>`
    <li class="gallery-card">
      <a href="${s}" class="gallery-link">
        <img class="gallery-image" src="${n}" alt="${t}" />
      </a>
      <div class="gallery-card-info">
        <p><strong>Likes:</strong> ${o}</p>
        <p><strong>Views:</strong> ${e}</p>
        <p><strong>Comments:</strong> ${r}</p>
        <p><strong>Downloads:</strong> ${i}</p>
      </div>
    </li>
  `,m="45206058-c611c9adec5d897ba1c6c02b0",f=n=>{const t=`https://pixabay.com/api/?key=${m}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},p=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader");let l;const h=n=>{n.preventDefault();const s=n.target.elements.user_query.value.trim();if(n.target.elements.user_query.value="",s===""){a.error({message:"Please fill in this place",position:"topRight"});return}u.classList.remove("is-hidden"),c.innerHTML="",f(s).finally(()=>{u.classList.add("is-hidden")}).then(({hits:t})=>{if(t.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const o=t.map(e=>g(e)).join("");c.innerHTML=o,l?l.refresh():l=new d(".gallery-link",{captionsData:"alt",captionDelay:250})}).catch(t=>{a.error({title:"Error",message:`Something went wrong: ${t.message}`})})};p.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
