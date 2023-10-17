const URL_POST = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vr0F3gIgcu44WrsSv7t4/scores';
const URL_GET = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vr0F3gIgcu44WrsSv7t4/scores';
const URL_GETID = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

export const refreshPage = async () => {
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

export const getInfo = async (name, scoreplayer) => {
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

export const getid = async () => {
  const response = await fetch(URL_GETID, {
    method: 'POST',
    body: JSON.stringify({
      name: 'My brand new game cool game',
    }),
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
