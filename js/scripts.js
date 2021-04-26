const formdiv = document.getElementById('pop');
const form = document.getElementById('form');
let gramata = [];

window.addEventListener('load', () => {
    gramatas = JSON.parse(localStorage.getItem("gramatas") || "[]");
    console.log(gramatas)
    render();
});

document.getElementById('knop').addEventListener('click', () => {
    form.style.display = 'block';
})

document.getElementById('pievenot').addEventListener('click', () => {
    form.style.display = 'none';
})

