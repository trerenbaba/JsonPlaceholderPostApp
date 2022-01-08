

const menuHtml=`
<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img width="100" height="60" src="/images/logo.jpg" alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="/index.html">Ana Sayfa</a>
            <a class="nav-link" href="/makaleDetay.html">Makaleler</a>
          </div>
        </div>
      </div>
    </nav>
`


const menuDiv=document.getElementById('menu');
menuDiv.innerHTML=menuHtml;

var menuJS = document.createElement('script');
    menuJS.rel = 'javascript';
    menuJS.src = '/menu.js'
    document.getElementsByTagName("body")[0].appendChild(menuJS);

   