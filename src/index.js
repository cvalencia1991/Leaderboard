import './style.css';
import Scorelist from './modules/scorelist.js';
import refreshpage from './modules/refresh.js';

const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');

refresh.addEventListener('click', refreshpage);
submit.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('nameplayer').value;
  const score = document.getElementById('scoreplayer').value;
  if (name !== '' || score !== '') {
    const scorelistitem = new Scorelist(name, score);
    scorelistitem.addscorelist();
  }
});