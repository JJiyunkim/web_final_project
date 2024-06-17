document.addEventListener('DOMContentLoaded', () => {
  const coinAnimationContainer = document.getElementById('coin-animation');

  function createCoin() {
      const coin = document.createElement('div');
      coin.classList.add('coin');
      coin.style.left = `${Math.random() * 100}%`;
      coin.style.animationDuration = `${2 + Math.random() * 2}s`; // 더 느리게 떨어지도록 설정
      coinAnimationContainer.appendChild(coin);

      coin.addEventListener('animationend', () => {
          coin.remove();
      });
  }

  setInterval(createCoin, 700); // 코인 생성 주기
});

