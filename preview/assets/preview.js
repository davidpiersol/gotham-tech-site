// Static review only: no production application scripts or submissions.
const redStyles = document.querySelector('#red-type-styles');
const controls = document.querySelectorAll('[data-mode]');
const labels = ['Discuss your website', 'Discuss your brand', 'Discuss your social presence', 'Discuss your web application', 'Discuss your mobile application', 'Discuss your desktop application'];
const serviceLinks = [...document.querySelectorAll('.service-card .text-link')];
function setMode(mode) {
  redStyles.disabled = mode === 'before';
  controls.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode === mode)));
  serviceLinks.forEach((link, i) => {
    {
      link.textContent = labels[i];
      const arrow = document.createElement('span');
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '→';
      link.append(arrow);
    }
  });
}
controls.forEach(button => button.addEventListener('click', () => setMode(button.dataset.mode)));
setMode('after');
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
menu?.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menu.setAttribute('aria-expanded', String(open));
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    navigation.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.focus();
  }
});
