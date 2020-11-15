(()=>{"use strict";(()=>{const e=(e,t,o)=>{e.responseType="json",e.addEventListener("load",(()=>{200===e.status?t(e.response):o(`Статус ответа: ${e.status} ${e.statusText}`)})),e.addEventListener("error",(()=>{o("Произошла ошибка соединения")})),e.addEventListener("timeout",(()=>{o(`Запрос не успел выполниться за ${e.timeout} мс`)})),e.timeout=1e4};window.server={load:(t,o)=>{const n=new XMLHttpRequest;n.open("GET","https://21.javascript.pages.academy/kekstagram/data"),e(n,t,o),n.send()},upload:(t,o,n)=>{const r=new XMLHttpRequest;r.open("POST","https://21.javascript.pages.academy/kekstagram/"),e(r,o,n),r.send(t)}}})(),window.timeOut={debounce:e=>{let t=null;return(...o)=>{t&&window.clearTimeout(t),t=window.setTimeout((()=>{e(...o)}),500)}}},(()=>{const e=document.querySelector(".big-picture"),t=e.querySelector(".big-picture__img img"),o=e.querySelector(".likes-count"),n=e.querySelector(".comments-count"),r=e.querySelector(".social__caption"),s=e.querySelector(".social"),c=s.querySelector(".social__comments"),l=s.querySelector(".social__comment-count"),i=s.querySelector(".comments-loader"),a=e.querySelector(".big-picture__cancel");let d=[];const u=e=>{const t=document.createElement("li"),o=document.createElement("img"),n=document.createElement("p");return t.classList.add("social__comment"),o.classList.add("social__picture"),n.classList.add("social__text"),t.append(o,n),o.src=e.avatar,o.alt=e.name,n.textContent=e.message,t},m=()=>{const e=document.querySelectorAll(".social__comment").length,t=e+5,o=d.slice(e,t),n=document.createDocumentFragment();for(let e=0;e<o.length;e++)n.appendChild(u(o[e]));l.textContent=`${t} из ${d.length} комментариев`,c.append(n),o.length<5&&(l.textContent=`${d.length} из ${d.length} комментариев`,i.classList.add("hidden"))},w=e=>{"Escape"===e.key&&(e.preventDefault(),v())},p=e=>{e.preventDefault(),v()},v=()=>{e.classList.add("hidden"),document.removeEventListener("keydown",w),document.body.classList.remove("modal-open"),a.removeEventListener("click",p)};window.hugeImg={openBigPicture:s=>{const{url:l,likes:u,comments:v,description:y}=s;d=v.slice(),c.innerHTML="",t.src=l,o.textContent=u,n.textContent=v.length,r.textContent=y,m(),e.classList.remove("hidden"),document.body.classList.add("modal-open"),document.addEventListener("keydown",w),a.addEventListener("click",p),v.length>5?(i.classList.remove("hidden"),i.addEventListener("click",m)):i.classList.add("hidden")},bigPictureEscPressHandler:w,bigPicture:e}})(),(()=>{const e=document.querySelector(".pictures"),t=document.querySelector(".img-filters"),o=window.hugeImg.openBigPicture,n=document.querySelector("#picture").content.querySelector(".picture"),r=t=>{const o=document.createDocumentFragment();return t.forEach((e=>{o.appendChild((e=>{const{likes:t,comments:o,url:r}=e,s=n.cloneNode(!0);return s.querySelector(".picture__likes").textContent=t,s.querySelector(".picture__comments").textContent=o.length,s.querySelector("img").src=r,s})(e))})),e.appendChild(o),o},s=e=>{document.querySelectorAll(".picture").forEach(((t,n)=>{t.addEventListener("click",(t=>{t.preventDefault(),o(e[n])}))}))};window.server.load((e=>{window.cardCreate.cardsList=[],window.cardCreate.cardsList=e,r(e),s(e),t.classList.remove("img-filters--inactive")}),(e=>{const t=document.createElement("div");t.style="z-index: 100; margin: 0 auto; text-align: center; background-color: red;",t.style.position="absolute",t.style.left=0,t.style.right=0,t.style.fontSize="30px",t.textContent=e,document.body.insertAdjacentElement("afterbegin",t)})),window.cardCreate={renderPictures:r,clickSmallPhoto:s}})(),(()=>{const e=document.querySelector(".img-filters__form"),t=window.cardCreate.renderPictures,o=()=>{const e=window.cardCreate.cardsList;t(e),window.cardCreate.clickSmallPhoto(e)},n=window.timeOut.debounce((n=>{switch(document.querySelectorAll(".picture").forEach((e=>{e.remove()})),(t=>{const o=e.querySelector(".img-filters__button--active"),{target:n}=t;n.classList.contains("img-filters__button--active")||(o.classList.remove("img-filters__button--active"),n.classList.add("img-filters__button--active"))})(n),n.target.id){case"filter-default":o();break;case"filter-random":(()=>{const e=(e=>{const t=window.cardCreate.cardsList.slice(),o=10<t.length?10:t.length-1;for(let e=0;e<o;e++){const o=Math.floor(Math.random()*(t.length-e))+e,n=t[e];t[e]=t[o],t[o]=n}return t})().slice(0,10);t(e),window.cardCreate.clickSmallPhoto(e)})();break;case"filter-discussed":(()=>{const e=window.cardCreate.cardsList.slice().sort(((e,t)=>t.comments.length-e.comments.length));t(e),window.cardCreate.clickSmallPhoto(e)})();break;default:o()}}));e.addEventListener("click",n)})(),(()=>{const e=/^#([а-яА-Я]|[a-zA-Z]|[0-9]){1,20}$/,t="Нельзя указать больше пяти хэш-тегов",o="Один и тот же хэш-тег не может быть использован дважды",n="Не верный формат хештега",r=document.querySelector(".text__hashtags"),s=document.querySelector(".text__description");r.addEventListener("input",(()=>{const s=r.value.replace(/ +/g," ").trim().toLowerCase().split(" "),c=s.length<=5,l=s.every((t=>e.test(t))),i=s.every(((e,t,o)=>o.indexOf(e)===t));r.setCustomValidity(""),c||r.setCustomValidity(t),l||r.setCustomValidity(n),i||r.setCustomValidity(o),r.reportValidity(),""===r.value&&r.setCustomValidity(""),l&&i&&c||""===r.value?(r.style.outline="",r.style.background=""):(r.style.outline="2px solid red",r.style.background="pink")})),r.addEventListener("focusin",(()=>{document.removeEventListener("keydown",window.modalOpenClose.onPhotoEditEscHandler)})),r.addEventListener("focusout",(()=>{document.addEventListener("keydown",window.modalOpenClose.onPhotoEditEscHandler)})),s.oninput=()=>{const e=s.value.length;s.value.length>140?s.setCustomValidity("Удалите "+(140-e)+" симв."):s.setCustomValidity(""),s.reportValidity()},s.addEventListener("focusin",(()=>{document.removeEventListener("keydown",window.modalOpenClose.onPhotoEditEscHandler)})),s.addEventListener("focusout",(()=>{document.addEventListener("keydown",window.modalOpenClose.onPhotoEditEscHandler)})),window.validation={hashTagsInput:r,commentsField:s}})(),(()=>{const e=document.querySelector(".img-upload__form"),t=document.querySelector(".img-upload__overlay"),o=()=>{window.specialView.setDefaultDepth(),window.modalOpenClose.uploadFile.value="",window.scale.photoPrew.style.filter="",window.scale.photoPrew.style.transform="scale(1.00)",window.scale.photoPrew.className="effects__preview--none",window.specialView.effectLevel.classList.add("hidden")};e.addEventListener("submit",(n=>{window.server.upload(new FormData(e),(()=>{e.reset(),o(),t.classList.add("hidden"),window.luck.successUploadHandler()}),(()=>{window.mistake.errorUploadHandler()})),n.preventDefault()})),window.submit={resetImageData:o}})(),(()=>{const e=document.querySelector(".img-upload__overlay"),t=document.querySelector(".img-upload__preview img"),o=document.querySelector(".img-upload__effect-level"),n=document.querySelector("#upload-file"),r=document.querySelector(".img-upload__cancel"),{hashTagsInput:s,commentsField:c}=window.validation,l=e=>{"Escape"===e.key&&(e.preventDefault(),i())},i=()=>{s.value="",c.value="",n.value="",t.className="",t.style.transform="",e.classList.add("hidden"),document.querySelector("body").classList.remove("modal-open"),document.removeEventListener("keydown",l),o.classList.add("hidden")};r.addEventListener("click",(()=>{i()})),n.addEventListener("change",(()=>{if(e.classList.remove("hidden"),o.classList.add("hidden"),document.querySelector("body").classList.add("modal-open"),document.addEventListener("keydown",l),n.files&&n.files[0]){const e=new FileReader;e.onload=e=>{t.setAttribute("src",e.target.result)},e.readAsDataURL(n.files[0])}})),window.modalOpenClose={onPhotoEditEscPress:l,uploadFile:n,photoEdit:e}})(),(()=>{const e=["jpg","jpeg","png"],t=document.querySelector(".img-upload"),o=t.querySelector(".img-upload__start input[type=file]"),n=t.querySelector(".img-upload__preview img"),r=t.querySelectorAll(".effects__preview");o.addEventListener("change",(()=>{const t=o.files[0],s=t.name.toLowerCase();e.some((e=>s.endsWith(e)))||(window.mistake.errorUploadHandler("Недопустимый формат"),window.modalOpenClose.imageUploadOverlay.classList.add("hidden"),window.submit.resetImageData());const c=new FileReader;c.addEventListener("load",(()=>{const e=c.result;var t;n.src=e,t=e,r.forEach((e=>{e.style=`background-image: url('${t}')`}))})),c.readAsDataURL(t)}))})(),(()=>{const e=document.querySelector("main"),t=document.querySelector("#success").content.querySelector(".success").cloneNode(!0),o=t.querySelector(".success__inner"),n=t.querySelector(".success__button"),r=()=>{n.removeEventListener("click",s),document.removeEventListener("click",c),document.removeEventListener("keydown",l),e.removeChild(t)},s=()=>{r()},c=e=>{e.target!==o&&r()},l=e=>{"Escape"===e.key&&r()};window.luck={successUploadHandler:()=>{e.insertAdjacentElement("afterbegin",t),n.addEventListener("click",s),document.addEventListener("click",c),document.addEventListener("keydown",l)}}})(),(()=>{const e=document.querySelector("main"),t=document.querySelector("#error").content.querySelector(".error").cloneNode(!0),o=t.querySelector(".error__button"),n=t.querySelector(".error__inner"),r=()=>{e.removeChild(t),o.removeEventListener("click",s),document.removeEventListener("click",c),document.removeEventListener("keydown",l)},s=()=>{r()},c=e=>{e.target!==n&&r()},l=e=>{"Escape"===e.key&&r()};window.mistake={errorUploadHandler:()=>{e.insertAdjacentElement("beforeend",t),o.addEventListener("click",s),document.addEventListener("click",c),document.addEventListener("keydown",l)}}})(),(()=>{const e=document.querySelector(".img-upload__effect-level"),t=document.querySelector(".effects"),o=document.querySelector(".effect-level"),n=e.querySelector(".effect-level__depth"),r=e.querySelector(".effect-level__pin"),s=e.querySelector(".effect-level__value"),c=document.querySelector(".effects__item:first-child"),l=document.querySelectorAll(".effects__item"),i=[1,2];t.addEventListener("click",(e=>{e.target.matches('input[type="radio"]')&&(window.scale.photoPrew.className="",a(),window.scale.photoPrew.className="effects__preview--"+e.target.value)}));const a=()=>{r.style.left="100%",n.style.width="100%",s.value=100,window.scale.photoPrew.style.filter=""},d=e=>{const t=e/100;if(window.scale.photoPrew.className.match("effects__preview--"))switch(window.scale.photoPrew.className){case"effects__preview--chrome":window.scale.photoPrew.style.filter=`grayscale(${1*t})`;break;case"effects__preview--sepia":window.scale.photoPrew.style.filter=`sepia(${1*t})`;break;case"effects__preview--marvin":window.scale.photoPrew.style.filter=`invert(${e}%)`;break;case"effects__preview--phobos":window.scale.photoPrew.style.filter=`blur(${3*t}px)`;break;case"effects__preview--heat":window.scale.photoPrew.style.filter=`brightness(${i[1]*t+i[0]})`;break;default:window.scale.photoPrew.style.filter=""}};r.addEventListener("mousedown",(t=>{const o=e.querySelector(".effect-level__line").offsetWidth;let c=t.clientX;const l=e=>{const t=c-e.clientX;c=e.clientX;let l=r.offsetLeft-t;l<0?l=0:l>o&&(l=o),r.style.left=l+"px",n.style.width=l+"px",s.value=Math.round(100*l/o),d(s.value)},i=()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",l),document.addEventListener("mouseup",i)})),l.forEach((t=>{t.addEventListener("click",(()=>{e.classList.remove("hidden")}))})),c.addEventListener("click",(()=>{e.classList.add("hidden")}));const u={initSlider:e=>{r.addEventListener("mousedown",(t=>{"function"==typeof e&&d(t)}))}};window.specialView={setDefaultDepth:a,effectLevel:o,slider:u}})(),(()=>{const e=document.querySelector(".img-upload__preview img"),t=document.querySelector(".scale__control--smaller"),o=document.querySelector(".scale__control--bigger"),n=document.querySelector(".scale__control--value");t.addEventListener("click",(()=>{let e=parseInt(n.value,10);e<=100&&e>25&&(e-=25),r(e)})),o.addEventListener("click",(()=>{let e=parseInt(n.value,10);e>=25&&e<100&&(e+=25),r(e)}));const r=t=>{switch(t){case 25:e.style.transform="scale(0.25)",n.value=t+"%";break;case 50:e.style.transform="scale(0.50)",n.value=t+"%";break;case 75:e.style.transform="scale(0.75)",n.value=t+"%";break;case 100:e.style.transform="scale(1.00)",n.value=t+"%"}};window.scale={photoPrew:e,counterValue:n}})()})();