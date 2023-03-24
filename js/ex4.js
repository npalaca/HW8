const form = document.querySelector('#order-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  
  const name = formData.get('name');
  const email = formData.get('email');
  const paymentType = formData.get('payment-type');

  const container = document.createElement('div');

  const nameElem = document.createElement('p');
  nameElem.textContent = `Name: ${name}`;
  container.appendChild(nameElem);

  const emailElem = document.createElement('p');
  emailElem.textContent = `Email: ${email}`;
  container.appendChild(emailElem);

  const paymentTypeElem = document.createElement('p');
  paymentTypeElem.textContent = `Payment Type: ${paymentType}`;
  container.appendChild(paymentTypeElem);

  document.body.appendChild(container);
});
