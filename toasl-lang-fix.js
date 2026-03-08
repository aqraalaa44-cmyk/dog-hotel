
document.addEventListener('DOMContentLoaded', function() {
  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.style.cssText = `
      position: fixed;
      top: 5px;
      left: 50%;
      transform: translateX(-50%);
      width: auto;
      padding: 3px 8px;
      min-width: 1px;
      background: #e94560;
      color: white;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      font-weight: bold;
      font-size: 25px;
      z-index: 100001;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      white-space: nowrap;
    `;
  }
});