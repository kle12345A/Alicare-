window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.body.classList.add('page-loaded');
    var overlay = document.getElementById('loading-overlay');
    if (overlay) overlay.classList.add('hide');
  }, 300);

  
}); 