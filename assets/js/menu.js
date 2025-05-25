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
        // Kiểm tra cả tên file và đường dẫn đầy đủ
        if (href === currentPage || 
            (currentPage === '' && href === 'Home.html') ||
            (currentPage === 'index.html' && href === 'Home.html')) {
            item.classList.add('active');
        }
    });

    // Thêm CSS cho menu active
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: #2196f3 !important;
            font-weight: bold;
            position: relative;
        }
        .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #2196f3;
        }
    `;
    document.head.appendChild(style);
}); 