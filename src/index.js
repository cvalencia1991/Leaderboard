import './style.css';
import Scorelist from './modules/scorelist.js';
import refreshPage from './modules/refreshPage.js';
import getInfo from './modules/getinfo.js';

const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');
const scoreListUl = document.getElementById('scoreslist');

refresh.addEventListener('click', async (e) => {
  e.preventDefault();
  const data = await refreshPage();
  scoreListUl.innerHTML = '';
  data.result.forEach((score) => {
    const scorelist = new Scorelist(score.user, score.score);
    scorelist.addscorelist();
  });
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('nameplayer').value;
  const scoreplayer = document.getElementById('scoreplayer').value;
  if (name !== '' || scoreplayer !== '') {
    const scorelistitem = new Scorelist(name, scoreplayer);
    scorelistitem.addscorelist();
    getInfo(name, scoreplayer);
  }
});
