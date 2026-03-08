
let fontSize = 14;

function increaseFontSize() {
  fontSize += 2;
  document.body.style.fontSize = fontSize + 'px';
}

function decreaseFontSize() {
  fontSize -= 2;
  if (fontSize < 10) fontSize = 10;
  document.body.style.fontSize = fontSize + 'px';
}

document.addEventListener('DOMContentLoaded', function() {
  const controlsDiv = document.createElement('div');
  controlsDiv.id = 'zoom-controls';
  controlsDiv.innerHTML = `
    <style>
      #zoom-controls {
        position: fixed;
        top: 60px;
        left: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        z-index: 9999;
      }
      #zoom-controls button {
        width: 25px;
        height: 25px;
        border: none;
        border-radius: 50%;
        background: #e94560;
        color: white;
        font-size: 14px;
        cursor: pointer;
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      }
      #zoom-controls button:hover {
        background: #ff6b8a;
      }
    </style>
    <button onclick="increaseFontSize()" title="تكبير">+</button>
    <button onclick="decreaseFontSize()" title="تصغير">-</button>
  `;
  document.body.appendChild(controlsDiv);
});

