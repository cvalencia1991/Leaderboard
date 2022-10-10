import './style.css';
import scorelist from './modules/scorelist.js';
const scorelistitem = new scorelist();

const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');

refresh.addEventListener('click',()=>{
    localStorage.clear();
    window.location.reload();
});

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const name = document.getElementById('nameplayer').value;
    const score= document.getElementById('scoreplayer').value;
    if(name ==="" || score===""){
        return;
    }else{
        scorelistitem.addscorelist(name,score);
    }
});