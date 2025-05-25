window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.body.classList.add('page-loaded');
    var overlay = document.getElementById('loading-overlay');
    if (overlay) overlay.classList.add('hide');
  }, 300);

  // Catbot popup logic
  var catbotBtn = document.getElementById('catbot-btn');
  var catbotPopup = document.getElementById('catbot-popup');
  var catbotClose = document.getElementById('catbot-close');
  if (catbotBtn && catbotPopup) {
    catbotBtn.onclick = function() {
      catbotPopup.classList.toggle('open');
    };
  }
  if (catbotClose && catbotPopup) {
    catbotClose.onclick = function() {
      catbotPopup.classList.remove('open');
    };
  }

  // Thêm logic cho iframe Poe
  function togglePoeChatbot(show) {
    var floating = document.querySelector('.floating-contact');
    var poeFrame = document.getElementById('poe-chatbot-iframe');
    var poeClose = document.getElementById('poe-chatbot-close');
    if (floating) floating.style.display = show ? 'none' : '';
    if (poeFrame) poeFrame.style.display = show ? 'block' : 'none';
    if (poeClose) poeClose.style.display = show ? 'block' : 'none';
  }
  var poeFrame = document.getElementById('poe-chatbot-iframe');
  var poeBtn = document.getElementById('poe-chatbot-btn');
  var poeClose = document.getElementById('poe-chatbot-close');
  if (poeBtn && poeFrame && poeClose) {
    poeBtn.onclick = function() { togglePoeChatbot(true); };
    poeClose.onclick = function() { togglePoeChatbot(false); };
    togglePoeChatbot(false);
  }
}); 