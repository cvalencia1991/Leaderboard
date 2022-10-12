export default async function refreshpage() {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3Gp8KLZKuYejD2oYH5ly/scores',
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const data = await response.json();
  const scoreslistul = document.getElementById('scoreslist');
  data.result.forEach((score) => {
    const element = document.createElement('div');
    element.innerHTML = `<li>${score.user} : ${score.score}</li>`;
    scoreslistul.appendChild(element);
    document.getElementById('form').reset();
  });
}