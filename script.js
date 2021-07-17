window.location = "#item-01";

const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("slide-in", entry.isIntersecting);
    });
};

const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: '0px', threshold:1 }

const elements = document.querySelectorAll('.beneficio');
elements.forEach(el => {
    observer.observe(el, options);
});

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')

    let carregando = `<p> Carregando...</p>`

    let pronto = `<p> Inscrição concluída! </p>`

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)
});