// Local demonstration: no network request or persistent storage.
const inquiryForm = document.querySelector('.inquiry-panel form');
const result = inquiryForm.querySelector('.inquiry-result');
const service = inquiryForm.elements.namedItem('service');
const requestedService = new URLSearchParams(location.search).get('service');
if ([...service.options].some(option => option.value === requestedService)) service.value = requestedService;
inquiryForm.querySelector('.sample-button').addEventListener('click', () => {
  inquiryForm.elements.namedItem('name').value = 'Alex Example';
  inquiryForm.elements.namedItem('email').value = 'alex@example.com';
  service.value = 'websites';
  inquiryForm.elements.namedItem('message').value = 'We would like a clear, welcoming website for our sample business.';
  result.hidden = true;
});
inquiryForm.addEventListener('input', () => { result.hidden = true; });
inquiryForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!inquiryForm.reportValidity()) return;
  result.replaceChildren();
  const heading = document.createElement('h3');
  heading.textContent = 'Your inquiry preview';
  const notice = document.createElement('p');
  notice.textContent = 'Nothing has been sent or saved. To contact Gotham Tech Solutions now, use the email or phone links on this page.';
  result.append(heading, notice);
  for (const [label, value] of [
    ['Name', inquiryForm.elements.namedItem('name').value],
    ['Email', inquiryForm.elements.namedItem('email').value],
    ['Service', service.selectedOptions[0].textContent],
    ['Project', inquiryForm.elements.namedItem('message').value]
  ]) {
    const line = document.createElement('p');
    line.textContent = `${label}: ${value}`;
    result.append(line);
  }
  result.hidden = false;
  result.focus();
});
