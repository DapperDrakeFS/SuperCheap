(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const t=s=>{const o=document.querySelector(".app");return o.innerHTML=s,o},l=`
<div class="left-side">
<div class="left-side-header">
  <img class="logo" src="img/removedbg.png" alt="logo SuperCheap">
  <h1 class="left-side-header-title"> <span class="super">Super</span><span class="cheap">Cheap</span></h1>
</div>

<div class="left-side-content">
  <div class="principal-text-container">
    <p class="principal-text">Tus productos favoritos al mejor precio en el mejor lugar</p>
    <p>SuperCheap centraliza tus productos favoritos en un solo lugar para que sepas donde encontrarlos al mejor precio</p>
  </div>

  <div>
    <h2>\xBFQu\xE9 ser\xE1 SuperCheap en el futuro?</h2>
    <p>SuperCheap es una aplicaci\xF3n que nace de la necesidad de ahorrar tiempo y dinero en una \xE9poca donde la <strong>inflaci\xF3n</strong> ha crecido un <a href="https://datosmacro.expansion.com/ipc-paises/espana#:~:text=La%20tasa%20de%20variaci%C3%B3n%20anual,es%20del%205%2C3%25.">5,3% en 2022.</a> <strong>\xBFC\xF3mo lograremos eso?</strong> </p>
  </div>

  <div>
    <p>SuperCheap en su primera versi\xF3n de desarrollo que ser\xE1 lanzada el d\xEDa <strong>23 de diciembre de 2022</strong> contar\xE1 con las siguientes funcionalidades:</p>
    <ul>
      <li>Poder buscar productos para comparar su precio en <strong>Mercadona</strong>, <strong>Lidl</strong>, y <strong>Carrefour</strong>.</li>
      <li>Tambi\xE9n pensamos en <strong>Canarias</strong>, por lo tanto tendremos una manera de <strong>convertir todos los precios</strong> al tipo de impuesto de Canarias.</li>
      <li>Y por \xFAltimo contaremos con un <strong>"carrito de compra"</strong> donde podr\xE1s a\xF1adir tus productos favoritos y hacer tu propia lista de la compra y ver realmente te sale m\xE1s barato hacer esta compra y as\xED ir a tiro hecho.</li>
    </ul>
  </div>

</div>
</div>

<div class="right-side">
<div class="right-side-mercadona">
  <img src="img/mercadona.svg" alt="Mercadona logo">
</div>

<div class="right-side-lidl">
  <img src="img/lidl.svg" alt="Lidl logo">
</div>

<div class="right-side-carrefour">
  <img src="img/carrefour.svg" alt="Carrefour logo">
</div>
</div>
`,d=()=>{t(l)};d();
