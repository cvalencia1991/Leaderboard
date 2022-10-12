export default class Scorelist {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  addscorelist() {
    const scoreslistul = document.getElementById('scoreslist');
    const element = document.createElement('div');
    element.innerHTML = `<li>${this.name} : ${this.score}</li>`;
    scoreslistul.appendChild(element);
    document.getElementById('form').reset();
  }
}