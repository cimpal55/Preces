const formdiv = document.getElementById('pop');
const form = document.getElementById('form');
const knopka = document.getElementById('pievienot');
let preces = [];

function render() {
    let tovari = document.getElementById('tovari');
    tovari.innerHTML = "";

    for(let i = 0; i < preces.length; i++) {
        let prece = `
        <div class="prece">
            <h3>Nosaukums: ${preces[i].nazv}</h3>
            <h4>Ražotajs: ${preces[i].comp}</h4>
        </div>`;

        tovari.innerHTML += prece;

        if (preces == 3) {
            alert("Limit is 20 preces")
            knopka.disabled = true;
        }
    }
}

document.getElementById('addprec').addEventListener('click', () => {
    form.style.display = 'block';
})

document.getElementById('pievienot').addEventListener('click', () => {
    form.style.display = 'none';

    let prece = {nazv: nazv.value, comp: comp.value}
    
    nazv.value = "";
    comp.value = "";

    preces.push(prece);

    render();
})

document.getElementById('zakr').addEventListener('click', () => {
    form.style.display = 'none';
})




