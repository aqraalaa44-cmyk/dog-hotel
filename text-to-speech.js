
(function() {
  'use strict';
  
  const isSupported = 'speechSynthesis' in window;
  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  const isEdge = /Edg/.test(navigator.userAgent);
  const isFirefox = /Firefox/.test(navigator.userAgent);
  const isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
  
  console.log('Browser:', navigator.userAgent);
  console.log('TTS Support:', isSupported);
  console.log('Chrome:', isChrome, 'Edge:', isEdge, 'Firefox:', isFirefox, 'Safari:', isSafari);
  
  if (!isSupported) {
    console.log('Speech synthesis not supported');
  }
  
  function getVoices() {
    return new Promise(resolve => {
      let voices = speechSynthesis.getVoices();
      if (voices.length) {
        resolve(voices);
        return;
      }
      
      speechSynthesis.onvoiceschanged = () => {
        voices = speechSynthesis.getVoices();
        resolve(voices);
      };
      
      setTimeout(() => resolve(speechSynthesis.getVoices()), 1000);
    });
  }
  
  
  async function findVoice() {
    const voices = await getVoices();
    console.log('Available voices:', voices.length);
    
   
    const prefs = [
      v => v.lang.startsWith('ar') && v.name.includes('Google'),
      v => v.lang.startsWith('ar') && v.name.includes('Microsoft'),
      v => v.lang.startsWith('ar'),
      v => v.lang.includes('ar'),
      v => v.name.includes('Arabic'),
    ];
    
    for (const pref of prefs) {
      const found = voices.find(pref);
      if (found) return found;
    }
    
    return voices[0] || null;
  }
  
  
  async function speak(text) {
    if (!text || !isSupported) return;
    
    speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = await findVoice();
    
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
      console.log('Using voice:', voice.name, voice.lang);
    } else {
      utterance.lang = 'ar-SA';
      console.log('No Arabic voice, using default');
    }
    
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    speechSynthesis.speak(utterance);
  }
  
  
  function handleSelection() {
    const text = window.getSelection().toString().trim();
    if (text) {
      speak(text);
    }
  }
  
  document.addEventListener('click', handleSelection);
  document.addEventListener('mouseup', handleSelection); 
})();