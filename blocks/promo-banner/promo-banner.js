export default function decorate(block) {
  const section = document.createElement('section');
  section.className = 'promo-section';
  section.id = 'offers';
  section.innerHTML = `<div class="promo-copy"><span class="eyebrow">Đặc quyền thành viên LG</span><h2>Thêm niềm vui<br>trong mỗi lựa chọn</h2><p>Khám phá ưu đãi thành viên, hỗ trợ mua sắm và dịch vụ dành riêng cho bạn.</p><a class="button-link" href="#support">Khám phá ưu đãi <span>→</span></a></div><div class="promo-art"><div class="promo-disc"></div><div class="promo-card">LG<br><b>Life's Good</b></div></div>`;
  block.replaceWith(section);
}
