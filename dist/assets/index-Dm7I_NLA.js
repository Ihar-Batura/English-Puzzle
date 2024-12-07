(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const C="_section_okxtr_1",q={section:C},A="_form_1l8zy_1",$={form:A};function B({autocomplete:t,className:e,parent:s}){const o=document.createElement("form");return o.setAttribute("autocomplete",t),o.classList.add($.form),e&&o.classList.add(e),s&&s.append(o),o}const I="_label_tvp1f_1",w={label:I};function h({forInput:t,text:e,className:s,parent:o}){const n=document.createElement("label");return n.setAttribute("for",t),n.textContent=e,n.classList.add(w.label),s&&n.classList.add(s),o&&o.append(n),n}const P="_input_rl4aw_1",k={input:P};function L({type:t,id:e,className:s,title:o,required:n,placeholder:i,minLength:a,pattern:r,addRules:p,onInput:g,parent:b}){const c=document.createElement("input");return c.setAttribute("type",t),e&&c.setAttribute("id",e),c.classList.add(k.input),s&&c.classList.add(s),o&&c.setAttribute("title",o),n&&c.setAttribute("required",""),i&&c.setAttribute("placeholder",i),a&&c.setAttribute("minlength",a),r&&c.setAttribute("pattern",r),p&&c.setAttribute("aria-describedby",p),g&&(c.oninput=g),b&&b.append(c),c}const H="_button_e6zya_1",z={button:H};function l({className:t,text:e,id:s,disabled:o,onClick:n,parent:i}){const a=document.createElement("button");return a.classList.add(z.button),t&&a.classList.add(t),e&&(a.textContent=e),s&&(a.id=s),o&&a.setAttribute("disabled"," "),n&&(a.onclick=n),i&&i.append(a),a}const O="_span_1a59u_1",F={span:O};function y({id:t,className:e,text:s,parent:o}){const n=document.createElement("span");return t&&n.setAttribute("id",t),n.classList.add(F.span),e&&n.classList.add(e),s&&(n.textContent=s),o&&o.append(n),n}function M(){const t=document.querySelectorAll(".login-input"),e=document.querySelector(".login-btn");let s=0;t.forEach(o=>{o.classList.value.includes("input-valid")&&(s+=1)}),e&&(s===t.length?(e.removeAttribute("disabled"),e.addEventListener("click",function(o){o.preventDefault()})):e.setAttribute("disabled","true"))}function v(t){const e=document.querySelector(`#${t}`),s=document.querySelector(`#${t}-minlength`);if(e&&s){const o=e.value.length,n=e.validity.valid;o>0&&(n?(e.classList.remove("input-invalid"),s.classList.remove("input-error"),e.classList.add("input-valid")):(e.classList.remove("input-valid"),e.classList.add("input-invalid"),s.classList.add("input-error")),M())}}const T="_div_ckpog_1",D={div:T};function u({className:t,id:e,text:s,parent:o}){const n=document.createElement("div");return n.classList.add(D.div),t&&n.classList.add(t),e&&(n.id=e),s&&(n.textContent=s),o&&o.append(n),n}function d({tag:t,className:e,id:s,text:o,parent:n}){const i=document.createElement(`${t}`);return e&&i.classList.add(e),s&&(i.id=s),o&&(i.textContent=o),n&&n.append(i),i}function U(){localStorage.removeItem("User"),m()}function R(){const t=d({tag:"header",className:"header"}),e=d({tag:"h1",className:"logo",text:"English Puzzles"}),s=l({className:"logout-btn",text:"Logout",onClick:()=>U()});return t.append(e,s),t}function V(){return d({tag:"main",className:"main"})}function j({href:t,className:e,id:s,text:o,target:n,parent:i}){const a=document.createElement("a");return a.href=t,e&&a.classList.add(e),s&&(a.id=s),o&&(a.textContent=o),n&&a.setAttribute("target",n),i&&i.append(a),a}function G(){const t=d({tag:"footer",className:"footer"}),e=d({tag:"p",className:"footer-text",text:"2024"}),s=j({href:"https://github.com/Ihar-Batura",className:"footer-link",text:"Ihar Batura",target:"_blank"});return t.append(e,s),t}function x(){const t=localStorage.getItem("User");if(t)return JSON.parse(t)}function J(){const t=document.querySelector("main");t&&(t.innerHTML="")}function f({value:t,options:e,id:s,className:o,name:n}){let i=document.querySelector(`#${s}`);if(i){if(i.innerHTML="",e>0)for(let a=1;a<=e;a+=1){const r=document.createElement("option");r.setAttribute("value",`${a}`),t&&(r.innerText=`${t} ${a}`),i.append(r)}}else if(i=document.createElement("select"),o&&i.classList.add(o),s&&(i.id=s),n&&i.setAttribute("name",n),e>0)for(let a=1;a<=e;a+=1){const r=document.createElement("option");r.setAttribute("value",`${a}`),t&&(r.innerText=`${t} ${a}`),i.append(r)}return i}function S(){const t=document.querySelector("#level-btn");return t?t.value:"1"}async function N(t){const e=`/data/wordCollectionLevel${t}.json`,o=await(await fetch(e)).json(),n=o.rounds,i=o.roundsCount;f({value:"Round",options:i,id:"round-btn"}),console.log(n)}function _(t){const e=document.querySelector(`#${t}`);e&&e.classList.toggle("cliked")}function Z(){const t=document.querySelector(".text-hint");t&&(t.classList.toggle("hidden"),_("translate-btn"))}function K(){const t=document.querySelector("#sound-btn"),e=document.querySelector("#translate-btn");t&&(t.classList.toggle("hidden"),_("audio-btn"),e&&e.classList.toggle("add-position"))}function W(){const t=u({className:"hints-container"}),e=f({value:"Level",options:6,id:"level-btn",className:"select-levels"}),s=f({value:"Round",options:1,id:"round-btn",className:"select-levels"});let o=S();N(o),e.addEventListener("change",()=>{o=S(),N(o)});const n=l({className:"hint-btn",id:"sound-btn"}),i=l({className:"hint-btn",id:"translate-btn",onClick:Z}),a=l({className:"hint-btn",id:"audio-btn",onClick:K}),r=l({className:"hint-btn",id:"image-btn"});return t.append(e,s,n,i,a,r),t}function Y(){const t=u({className:"game-board"});for(let e=0;e<=9;e+=1)u({className:"game-board__row",parent:t});return t}function Q(){const t=u({className:"btns-solution__container"}),e=l({className:"solution-btn",text:"Solution"}),s=l({className:"check-solution__btn",text:"Check",disabled:!0});return t.append(e,s),t}function X(){J();const t=document.querySelector("main");if(t){const e=W(),s=u({className:"text-hint",text:"Здесь будет подсказка"}),o=Y(),n=u({className:"game-words"}),i=Q();t.append(e,s,o,n,i)}}function tt(){const t=document.querySelector("body");if(t){const e=u({className:"wrapper"}),s=R(),o=V(),n=x();if(n!==void 0){const a=n.name,r=n.surname;d({tag:"h3",text:`Hello, ${a} ${r}`,className:"greetin-text",parent:o})}d({tag:"div",text:"Learn English fun with English Puzzles! Here you will find interesting tasks of different difficulty levels. You need to assemble sentences from words and solve exciting puzzles. There are a lot of different tips)",className:"rules-text",parent:o}),l({className:"start-btn",text:"Start",onClick:X,parent:o});const i=G();e.append(s,o,i),t.append(e)}}function m(){const t=document.querySelector("body"),e=document.querySelector(".page-login");t&&(t.innerHTML="",e?tt():E("page-login",t))}function et(){const t=document.querySelector("#name"),e=document.querySelector("#surname");if(t&&e){const s={name:`${t.value}`,surname:`${e.value}`};localStorage.setItem("User",JSON.stringify(s)),m()}}function nt(){const t=B({autocomplete:"off",className:"page-login__form"});return h({forInput:"name",text:"First Name",className:"login-label",parent:t}),L({type:"text",id:"name",className:"login-input",title:"Enter First Name (only latin letters and the hyphen (-) symbol)",required:" ",minLength:"3",pattern:"[A-Z]{1}[a-z\\-]{2,25}",addRules:"name-minlength",onInput:()=>v("name"),parent:t}),y({id:"name-minlength",className:"login-span",text:"Minimum 3 characters, the first letter is in uppercase",parent:t}),h({forInput:"surname",text:"Last Name",className:"login-label",parent:t}),L({type:"text",id:"surname",className:"login-input",title:"Enter Last Name (only latin letters and the hyphen (-) symbol)",required:" ",minLength:"4",pattern:"[A-Z]{1}[a-z\\-]{3,25}",addRules:"surname-minlength",onInput:()=>v("surname"),parent:t}),y({id:"surname-minlength",className:"login-span",text:"Minimum 4 characters, the first letter is in uppercase",parent:t}),l({className:"login-btn",text:"LogIn",disabled:!0,onClick:()=>et(),parent:t}),t}function E(t,e){const s=document.createElement("section");s.classList.add(q.section),s.classList.add(t),e&&e.append(s);const o=nt();return s.appendChild(o),s}const st=document.querySelector("body");E("page-login",st);document.addEventListener("DOMContentLoaded",function(){x()&&m()});