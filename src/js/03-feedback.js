import _ from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const checkStorage = () => {
  const getStorage = localStorage.getItem('feedback-form-state');
  if (getStorage) {
    const storage = JSON.parse(localStorage.getItem('feedback-form-state'));
    email.value = storage.email;
    message.value = storage.message;
  }
};
checkStorage();

const inputTracker = e => {
  const tracked = { email: '', message: '' };
  tracked.email = email.value;
  tracked.message = message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(tracked));
};

form.addEventListener('input', _(inputTracker, 500));

form.addEventListener('submit', e => {
  e.preventDefault();
  const storage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (storage) {
    console.log(storage);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
});
5;
