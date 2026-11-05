export default function decorate(block) {
  const nav = document.createElement('header');
  nav.className = 'site-header';
  nav.innerHTML = `
    <div class="header-top"><a class="lg-wordmark" href="/" aria-label="LG home"><span class="lg-symbol">L</span><span>LG</span></a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a href="#offers">Ưu đãi</a><a href="#products">TV & Loa thanh</a><a href="#products">Thiết bị gia dụng</a>
        <a href="#products">Màn hình & Laptop</a><a href="#support">Hỗ trợ</a>
      </nav>
      <div class="header-actions"><button class="search-toggle" aria-label="Search">⌕</button><a class="account-link" href="#support">Tài khoản</a><button class="menu-toggle" aria-label="Open menu" aria-expanded="false">☰</button></div>
    </div>
    <nav class="mobile-nav" aria-label="Mobile navigation">
      <a href="#offers">Ưu đãi</a><a href="#products">TV & Loa thanh</a><a href="#products">Thiết bị gia dụng</a>
      <a href="#products">Màn hình & Laptop</a><a href="#support">Hỗ trợ</a>
    </nav>`;
  block.replaceWith(nav);
  const toggle = nav.querySelector('.menu-toggle');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('menu-open', !open);
  });
}
