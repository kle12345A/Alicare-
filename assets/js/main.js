// // Custom JS for AliCare homepage 

// // Tự động set active cho menu theo URL
// // Khi trang được load, kiểm tra URL và set class active cho menu tương ứng
// // (giúp người dùng biết đang ở trang nào)
// document.addEventListener('DOMContentLoaded', function() {
//     var path = window.location.pathname.split('/').pop();
//     if (!path) path = 'Home.html'; // Nếu là trang chủ mặc định
//     document.querySelectorAll('.navbar-nav .nav-link').forEach(function(link) {
//         if (link.getAttribute('href') === path) {
//             link.classList.add('active');
//         } else {
//             link.classList.remove('active');
//         }
//     });
// });

// // Khởi tạo hiệu ứng AOS (Animate On Scroll)
// AOS.init(); 