const URL_GETID = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const getid = async () => {
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

export default getid;