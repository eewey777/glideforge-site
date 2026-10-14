// Mobile nav toggle
document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.links').classList.toggle('open');
});
// Close menu after tapping a link
document.querySelectorAll('.links a').forEach(a =>
  a.addEventListener('click', () =>
    document.querySelector('.links').classList.remove('open')));
