class Scorelist {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  addscorelist() {
    const scoreslistul = document.getElementById('scoreslist');
    const element = document.createElement('div');
    element.classList.add('listscores');
    scoreslistul.style.border = '2px solid black';
    element.innerHTML = `<li>${this.name} : ${this.score}</li>`;
    scoreslistul.appendChild(element);
    document.getElementById('form').reset();
  }
}

export default Scorelist;
