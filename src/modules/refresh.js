export default function refreshpage() {
  localStorage.clear();
  window.location.reload();
  /*   const x = localStorage.getItem('gameId'); */
  async function getResponse() {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3Gp8KLZKuYejD2oYH5ly/scores',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    return response.json();
  }
  getResponse();
}
