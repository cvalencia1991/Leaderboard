import Scorelist from './scorelist.js';

export default async function refreshpage() {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vr0F3gIgcu44WrsSv7t4/scores',
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const data = await response.json();
  data.result.forEach((score) => {
    const scorelist = new Scorelist(score.user, score.score);
    scorelist.addscorelist();
  });
}