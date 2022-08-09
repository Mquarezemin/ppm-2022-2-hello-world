document.querySelector('clique-aqui').click = () => {
    const nome = document.querySelector('#campo-nome').value;
    if (nome){
        alert(`hello word, ${nome}!`);
    }
    console.log(nome);
};