
export default class scorelist{

    constructor(name,score){
        this.name = name;
        this.score =score;
    }

    addscorelist(name,score){
        const scoreslistul = document.getElementById('scoreslist');
        const element = document.createElement('div');
        element.innerHTML =`<li>${name} : ${score}</li>`;
        scoreslistul.appendChild(element);
        this.resetform();
    }
    resetform(){
        document.getElementById('form').reset();
    }
}