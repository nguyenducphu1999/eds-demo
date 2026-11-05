export default function decorate(block) {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.id = 'support';
  footer.innerHTML = `<div class="footer-main"><div class="footer-brand"><span class="lg-symbol">L</span><strong>LG</strong><p>Life's Good</p></div>
    <div><h3>Sản phẩm</h3><a href="#products">TV & Loa thanh</a><a href="#products">Thiết bị gia dụng</a><a href="#products">Màn hình & Laptop</a></div>
    <div><h3>Hỗ trợ</h3><a href="#support">Liên hệ với chúng tôi</a><a href="#support">Bảo hành & sửa chữa</a><a href="#support">Câu hỏi thường gặp</a></div>
    <div><h3>Về LG</h3><a href="#support">Giới thiệu LG</a><a href="#support">Tin tức</a><a href="#support">Cơ hội nghề nghiệp</a></div></div>
    <div class="footer-bottom"><span>© 2026 LG Electronics. Demo giao diện EDS.</span><span>Quyền riêng tư　 Điều khoản sử dụng</span></div>`;
  block.replaceWith(footer);
}
