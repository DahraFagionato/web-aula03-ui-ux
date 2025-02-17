const cards = document.querySelector('main');
fetch('./produtos.json')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(p => {
        const card = document.createElement('div');
        card.innerHTML = `
            <h3>${p.nome}</h3>
            <img src="${p.avatar}" alt="Avatar">
            <p>${p.preco}</p>
        `;
        cards.appendChild(card);
    });
})