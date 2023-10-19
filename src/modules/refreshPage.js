const URL_GET = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vr0F3gIgcu44WrsSv7t4/scores';

const refreshPage = async () => {
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
    }
  } catch (err) {
    throw new Error(err);
  }
  return data;
};

export default refreshPage;
