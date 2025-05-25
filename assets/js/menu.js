// Xử lý active menu cho tất cả các trang
document.addEventListener('DOMContentLoaded', function() {
    // Lấy đường dẫn hiện tại
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'Home.html'; // Mặc định là Home.html nếu ở trang chủ
    
    // Lấy tất cả các menu items
    const menuItems = document.querySelectorAll('.nav-link');
    
    // Xóa class active từ tất cả menu items
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Thêm class active cho menu item tương ứng với trang hiện tại
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        }
    });
}); 