import { nanoid } from 'nanoid';
import './style.css';

const passWordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passWordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});
