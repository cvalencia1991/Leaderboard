/* eslint-disable no-return-assign */
import './style.css';
import Scorelist from './modules/scorelist.js';
import refreshpage from './modules/refresh.js';

const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');

refresh.addEventListener('click', refreshpage);

const getResponse = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const response = await fetch(url,
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'My brand new game cool game',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
};

let a = getResponse();
a.then((result)=> {
  localStorage.setItem('gameId',result.result.split(' ')[3])
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('nameplayer').value;
  const scoreplayer = document.getElementById('scoreplayer').value;
  const x = localStorage.getItem('gameId')
  console.log(x)
const getResponse2 = async () => {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${x}/scores`;
  console.log(url);
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
    console.log(data);
  };
  if (name !== '' || scoreplayer !== '') {
    const scorelistitem = new Scorelist(name, scoreplayer);
    scorelistitem.addscorelist();
    getResponse2();
  }
});



