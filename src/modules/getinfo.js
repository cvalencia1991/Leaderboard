const URL_POST = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vr0F3gIgcu44WrsSv7t4/scores';

const getInfo = async (name, scoreplayer) => {
  const response = await fetch(URL_POST, {
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

export default getInfo;