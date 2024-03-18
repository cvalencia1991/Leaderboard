import Scorelist from './scorelist.js';

const URL_GET = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vr0F3gIgcu44WrsSv7t4/scores';

const refreshPage = async () => {
  const scoreListUl = document.getElementById('scoreslist');
  scoreListUl.innerHTML = '<p>Loading...</p>';
  const response = await fetch(URL_GET, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  let data;
  try {
    if (response.ok) {
      data = await response.json();
      data.result.forEach((score) => {
        const scorelist = new Scorelist(score.user, score.score);
        scorelist.addscorelist();
      });
      const firstElement = document.querySelector('p');
      firstElement.remove();
    }
  } catch (err) {
    throw new Error(err);
  }
  return data;
};

export default refreshPage;
