export default function decorate(block) {
  const items = [
    ['TV & Loa thanh','01','linear-gradient(135deg,#d6dbe4,#8e9bb3)'],
    ['Tủ lạnh','02','linear-gradient(135deg,#e8e4df,#b9c2c5)'],
    ['Máy giặt & Máy sấy','03','linear-gradient(135deg,#d9e2e5,#8fa4ad)'],
    ['Điều hòa','04','linear-gradient(135deg,#e6e9eb,#b7c7d0)'],
    ['Màn hình & Laptop','05','linear-gradient(135deg,#d9d9e8,#9898b4)']
  ];
  const section = document.createElement('section');
  section.className = 'category-section';
  section.innerHTML = `<div class="section-heading"><div><span class="eyebrow">Khám phá LG</span><h2>Sản phẩm dành cho bạn</h2></div><a href="#products">Xem tất cả <span>→</span></a></div>
    <div class="category-list">${items.map(([name,num,bg])=>`<a class="category-item" href="#products"><span class="category-art" style="background:${bg}"><i>${num}</i></span><strong>${name}</strong><span class="category-arrow">↗</span></a>`).join('')}</div>`;
  block.replaceWith(section);
}
