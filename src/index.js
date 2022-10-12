import './style.css';
import Scorelist from './modules/scorelist.js';
import refreshpage from './modules/refresh.js';
import getid from './modules/getid.js';

const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');

refresh.addEventListener('click', refreshpage);

const a = getid();
a.then((result) => {
  localStorage.setItem('gameId', result.result.split(' ')[3]);
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('nameplayer').value;
  const scoreplayer = document.getElementById('scoreplayer').value;
  /*   const x = localStorage.getItem('gameId'); */
  const getResponse2 = async () => {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3Gp8KLZKuYejD2oYH5ly/scores';
    const response = await fetch(url,
      {
        method: 'POST',
        body: JSON.stringify({
          user: name,
          score: scoreplayer,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    const data = await response.json();
    return data;
  };
  if (name !== '' || scoreplayer !== '') {
    const scorelistitem = new Scorelist(name, scoreplayer);
    scorelistitem.addscorelist();
    getResponse2();
  }
});
