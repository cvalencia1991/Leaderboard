export default async function getinformation(name, scoreplayer) {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vr0F3gIgcu44WrsSv7t4/scores';
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
}