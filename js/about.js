const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const iFrame = document.querySelectorAll('.map')
let currentIframe = 0;

nextBtn.addEventListener('click', function() {

iFrame[currentIframe].classList.remove('active');
currentIframe++;

iFrame[currentIframe].classList.add('active');
prevBtn.style.display = 'block'
prevBtn.disabled = false;

if (currentIframe === iFrame.length -1) {
  nextBtn.style.display = 'none'
}
  
});

prevBtn.addEventListener('click', function() {

  iFrame[currentIframe].classList.remove('active');
  currentIframe--;
  
  iFrame[currentIframe].classList.add('active');
  prevBtn.disabled = false;
  
  if (currentIframe === iFrame.length -1) {
    
    nextBtn.style.display = 'none'
  }
  if (currentIframe === 0) {
    prevBtn.style.display = 'none'
    nextBtn.style.display = 'block'
  }
    
  });