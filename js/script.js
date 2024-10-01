const formHeading = document.querySelector('.form-heading');
const letterDecoration = document.querySelector('.decoration');
const formInputs = document.querySelectorAll('.form-input');
const lockBtns = document.querySelectorAll('.lock-btn');
const body = document.querySelector('body');
// ============EVENTS==============
formInputs.forEach((input) => {
  input.addEventListener('focus', handleFocusEvent);
  input.addEventListener('blur', handleBlurEvent);
  input.addEventListener('input', showLetterDecoration);
});
lockBtns.forEach((btn) => {
  btn.addEventListener('click', showHidePassword);
});
body.addEventListener('click', handleClick);
// ============FUNCTIONS==============
function handleFocusEvent(e) {
  formHeading.style.opacity = 0;
  setTimeout(() => {
    formHeading.textContent = e.target.placeholder;
    formHeading.style.opacity = 1;
  }, 250);
  showLetterDecoration(e);
}
function handleBlurEvent(e) {
  console.log('blur');

  formHeading.style.opacity = 0;
  setTimeout(() => {
    formHeading.textContent = 'Sign Up';
    formHeading.style.opacity = 1;
  }, 250);
}
function handleClick(e) {
  const elem = e.target;
  if (elem.classList.contains('form-input')) return;
  const letter = document.querySelector('.letter');
  if (!letter) return;
  letterDecoration.innerHTML =
    '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
}
function showHidePassword(e) {
  const lockBtn = e.currentTarget;
  const icon = lockBtn.querySelector('i');
  const passwordInput = lockBtn.previousElementSibling;
  if (icon.classList.contains('fa-lock')) {
    icon.classList.remove('fa-lock');
    icon.classList.add('fa-lock-open');
    passwordInput.type = 'text';
    return;
  }
  icon.classList.remove('fa-lock-open');
  icon.classList.add('fa-lock');
  passwordInput.type = 'password';
}

function showLetterDecoration(e) {
  const value = e.target.value;
  if (value === '') {
    const decoration = document.querySelector('.dot');
    if (decoration) return;
    letterDecoration.innerHTML =
      '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
    return;
  }
  const lastLetter = e.target.type === 'password' ? '*' : value.slice(-1);
  letterDecoration.innerHTML = `<span class="letter">${lastLetter}</span>`;
}
