export default function decorate(block) {
  const products = [
    ['OLED evo AI','TV OLED','Hình ảnh chân thực trong từng khung hình','OLED'],
    ['InstaView™','Tủ lạnh','Chạm nhẹ để khám phá bên trong','FRIDGE'],
    ['WashTower™','Giặt sấy','Chăm sóc quần áo thông minh','WASH'],
    ['LG gram','Laptop','Mỏng nhẹ, mạnh mẽ cho mọi hành trình','GRAM']
  ];
  const section = document.createElement('section');
  section.className = 'product-section';
  section.id = 'products';
  section.innerHTML = `<span class="eyebrow">Tuyển chọn nổi bật</span><h2>Công nghệ cho cuộc sống tốt đẹp hơn</h2>
    <div class="product-grid">${products.map(([name,cat,desc,tag],i)=>`<article class="product-card"><div class="product-visual visual-${i+1}"><span>${tag}</span></div><div class="product-info"><small>${cat}</small><h3>${name}</h3><p>${desc}</p><a href="#support">Tìm hiểu thêm →</a></div></article>`).join('')}</div>`;
  block.replaceWith(section);
}
