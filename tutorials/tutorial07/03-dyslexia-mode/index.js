/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

function dyslexiaMode() {
  const bodyEl = document.querySelector("body");
  bodyEl.className = "dyslexia-mode"
}
function dyslexiaModeOff() {
  const bodyEl = document.querySelector("body");
  bodyEl.className = ""
}

