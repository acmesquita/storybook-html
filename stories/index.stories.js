import '../src/styles.scss';
import input from '../src/input.html';

export default {
  title: 'Components',
};

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.classList = 'btn';
  btn.addEventListener('click', e => alert('Hello'));
  return btn;
};

export const ButtonPrimary = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.classList = 'btn btn-primary';
  btn.addEventListener('click', e => alert('Hello'));
  return btn;
};

export const Input = () => input