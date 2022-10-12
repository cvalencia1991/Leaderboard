export default async function getid() {
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
  const data = response.json();
  return data;
}