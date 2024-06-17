document.addEventListener('DOMContentLoaded', () => {
    const coins = document.querySelectorAll('.coin');
    const basket = document.getElementById('basket');

    coins.forEach(coin => {
        coin.addEventListener('dragstart', dragStart);
    });

    basket.addEventListener('dragover', dragOver);
    basket.addEventListener('drop', drop);

    function dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const id = event.dataTransfer.getData('text');
        const coin = document.getElementById(id);
        basket.appendChild(coin);
        coin.style.cursor = 'default';
        coin.setAttribute('draggable', false);
    }
});