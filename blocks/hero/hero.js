export default function decorate(block) {
  const hero = document.createElement('section');
  hero.className = 'hero-banner';
  hero.innerHTML = `
    <div class="hero-copy">
      <span class="eyebrow">LG OLED AI TV</span>
      <h1>Trải nghiệm<br>đỉnh cao sống động</h1>
      <p>Công nghệ hình ảnh đột phá. Giải trí theo cách của riêng bạn.</p>
      <a class="button-link" href="#products">Khám phá ngay <span>→</span></a>
    </div>
    <div class="hero-art" role="img" aria-label="Minh họa TV màn hình lớn trong không gian sống">
      <div class="orb orb-one"></div><div class="orb orb-two"></div><div class="tv"><div class="tv-screen"></div><div class="tv-stand"></div></div>
    </div>`;
  block.replaceWith(hero);
}
