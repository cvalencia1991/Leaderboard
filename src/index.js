import './style.css';
import refreshPage from './modules/refreshPage.js';
import createPlayer from './modules/createPlayer.js';

const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');

refresh.addEventListener('click', refreshPage);

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('nameplayer').value;
  const scoreplayer = document.getElementById('scoreplayer').value;
  createPlayer(name, scoreplayer);
});
