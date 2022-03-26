const creatNav = ()=>{
let nav = document.querySelector('.navbar');
nav.innerHTML = `  
<div class="nav">
          <img class="brand-logo" src="dark-logo.png" alt="">
          <div class="nav-items">
              <div class="search">
                  <input type="text" class="search-box" placeholder="search brand, product">
                  <button class="search-button">Search</button>
              </div>
              <a href="#"><img src="user.png" alt=""></a>
              <a href="#"><img src="cart.png" alt=""></a>
          </div>
      </div>
      <ul class="links-container">
          <li class="link-items"><a href="#" class="link">HOME</a></li>
          <li class="link-items"><a href="#" class="link">WOMEN</a></li>
          <li class="link-items"><a href="#" class="link">MEN</a></li>
          <li class="link-items"><a href="#" class="link">KIDS</a></li>
          <li class="link-items"><a href="#" class="link">ACCESSORIES</a></li>
      </ul>
`
};
creatNav();
