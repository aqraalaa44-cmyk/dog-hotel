

let fontSize = 16;

function increaseFontSize() {
  fontSize += 2;
  document.body.style.fontSize = fontSize + 'px';
}

function decreaseFontSize() {
  fontSize -= 2;
  document.body.style.fontSize = fontSize + 'px';
}

document.addEventListener("mouseup", function () {
  const text = window.getSelection().toString().trim();

  if (text.length > 0) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "ar";
    
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const oldControls = document.getElementById('font-controls');
  if (oldControls) oldControls.remove();
  
  const controlsDiv = document.createElement('div');
  controlsDiv.id = 'font-controls';
  controlsDiv.innerHTML = `
    <style>
      #font-controls {
        position: fixed;
        top: 60px;
        left: 15px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        z-index: 9999;
      }
      #font-controls button {
        width: 35px;
        height: 35px;
        border: none;
        border-radius: 50%;
        background: #e94560;
        color: white;
        font-size: 18px;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
      }
      #font-controls button:hover {
        transform: scale(1.1);
        background: #ff6b8a;
      }
      #font-controls button:active {
        transform: scale(0.95);
      }
    </style>
    <button onclick="increaseFontSize()" title="تكبير الخط">+</button>
    <button onclick="decreaseFontSize()" title="تصغير الخط">-</button>
  `;
  document.body.appendChild(controlsDiv);
});

