import './style.css';
import Scorelist from './modules/scorelist.js';
import refreshpage from './modules/refresh.js';
import getinformation from './modules/sendinformation.js';

const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');

refresh.addEventListener('click', refreshpage);

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('nameplayer').value;
  const scoreplayer = document.getElementById('scoreplayer').value;
  if (name !== '' || scoreplayer !== '') {
    const scorelistitem = new Scorelist(name, scoreplayer);
    scorelistitem.addscorelist();
    getinformation(name, scoreplayer);
  }
});
