// Selecting a rate
let rate_display = document.querySelector('.rate');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const rating = event.target.getAttribute('data-rating');
    rate_display.textContent = rating;    

    buttons.forEach(btn => {
      if (btn !== button) btn.classList.remove('selected');
      else btn.classList.add('selected');
    });
  });
});

//Send a rate
let btn_send = document.querySelector('.btn_submit');
let alert_modal = document.querySelector('.alert_modal');
let face_front = document.querySelector('.front');
let face_back = document.querySelector('.back');

btn_send.addEventListener('click', () => {
  let rate = rate_display.textContent;
  if (rate === '0') {
    alert_modal.classList.add('display_alert');
    setTimeout(() => {
      alert_modal.classList.remove('display_alert');
    }, 5000);
  } else {
    face_front.classList.add('perspective_active');
    face_back.classList.add('perspective_active');
  }
});