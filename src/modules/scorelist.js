/* eslint-disable class-methods-use-this */
export default class Scorelist {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  resetform() {
    document.getElementById('form').reset();
  }

  addscorelist(name, score) {
    const scoreslistul = document.getElementById('scoreslist');
    const element = document.createElement('div');
    element.innerHTML = `<li>${name} : ${score}</li>`;
    scoreslistul.appendChild(element);
    this.resetform();
  }
}