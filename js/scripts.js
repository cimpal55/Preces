const FORMDIV = document.getElementById('pop');
const FORM = document.getElementById('form');
const KNOPKA = document.getElementById('pievienot');
let preces = [];

function render() {
    let tovari = document.getElementById('tovari');
    tovari.innerHTML = "";

    for(let i = 0; i < preces.length; i++) {
        let prece = `
        <li class="prece">
            <h3>Nosaukums: ${preces[i].nazv}</h3>
            <h4>Ražotajs: ${preces[i].comp}</h4>
            <button type="button" class="deleted">Dzēst</button>
        </li>`

        tovari.innerHTML += prece;
    }
    localStorage.setItem('preces', JSON.stringify(preces));
}
window.addEventListener('load', () => {
    preces = JSON.parse(localStorage.getItem("preces") || "[]")
    console.log(preces)
    render()
})

const list = document.querySelector('#tovari')

list.addEventListener('click', (e) => {
    if(e.target.className == 'deleted'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
      preces.splice(li, 1);
      localStorage.setItem('preces',JSON.stringify(preces));
    };
});

document.getElementById('addprec').addEventListener('click', () => {
    FORM.style.display = 'block';

})

document.getElementById('pievienot').addEventListener('click', () => {
    FORM.style.display = 'none';

    let prece = {nazv: nazv.value, comp: comp.value}
    
    nazv.value = "";
    comp.value = "";

    preces.push(prece);

    render();
})

document.getElementById('zakr').addEventListener('click', () => {
    FORM.style.display = 'none';
})



