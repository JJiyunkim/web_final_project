document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.options li');
    const nextBtn = document.getElementById('next-btn');
    const piggyBank = document.getElementById('piggy-bank');
    const coinCount = document.getElementById('coin-count');
    const coinContainer = document.getElementById('coin-container');
    const quizQuestionElement = document.getElementById('quiz-question');
    const nextQuizButton = document.getElementById('next-quiz-button');

    let coins = 0;
    let currentQuizIndex = 0;

    const quizData = [
        {
            question: "금리란 무엇일까요?",
            options: [
                { text: "예금하는 금액", answer: "wrong" },
                { text: "돈을 빌리거나 맡길 때 발생하는 이자율", answer: "correct" },
                { text: "주식의 가격", answer: "wrong" },
                { text: "대출의 한도", answer: "wrong" }
            ]
        },
        {
            question: "저축의 가장 좋은 방법은 무엇일까요?",
            options: [
                { text: "매달 일정 금액을 저축하기", answer: "correct" },
                { text: "여유 자금 있을 때만 저축하기", answer: "wrong" },
                { text: "주식에 투자하기", answer: "wrong" },
                { text: "대출을 받아 저축하기", answer: "wrong" }
            ]
        },
        {
            question: "신용 점수는 무엇을 기반으로 결정될까요?",
            options: [
                { text: "예금액", answer: "wrong" },
                { text: "대출 상환 기록", answer: "correct" },
                { text: "신용 카드 사용 빈도", answer: "wrong" },
                { text: "월급", answer: "wrong" }
            ]
        },
        // 추가 퀴즈를 여기 추가할 수 있습니다.
    ];

    function loadQuiz() {
        const currentQuiz = quizData[currentQuizIndex];
        quizQuestionElement.textContent = currentQuiz.question;
        options.forEach((option, index) => {
            option.textContent = currentQuiz.options[index].text;
            option.setAttribute('data-answer', currentQuiz.options[index].answer);
            option.classList.remove('selected');
        });
    }

    options.forEach(option => {
        option.addEventListener('click', selectAnswer);
    });

    function selectAnswer(event) {
        options.forEach(option => {
            option.classList.remove('selected');
        });
        event.target.classList.add('selected');
    }

    nextBtn.addEventListener('click', () => {
        const selectedOption = document.querySelector('.options .selected');
        if (selectedOption) {
            const isCorrect = selectedOption.getAttribute('data-answer') === 'correct';
            if (isCorrect) {
                coins += 1;
                coinCount.textContent = `${coins} 코인`;
                alert('정답입니다! 코인이 추가되었습니다.');
                createCoin();
            } else {
                alert('오답입니다. 다시 시도해보세요.');
            }
            options.forEach(option => {
                option.classList.remove('selected');
            });
        } else {
            alert('답을 선택해주세요.');
        }
    });

    nextQuizButton.addEventListener('click', () => {
        currentQuizIndex = (currentQuizIndex + 1) % quizData.length;
        loadQuiz();
    });

    function createCoin() {
        const coin = document.createElement('div');
        coin.classList.add('coin');
        coin.textContent = '💰';
        coin.style.fontSize = '50px'; // 코인의 크기를 늘림
        coin.setAttribute('draggable', true);
        coinContainer.appendChild(coin);

        coin.addEventListener('dragstart', dragStart);
        piggyBank.addEventListener('dragover', dragOver);
        piggyBank.addEventListener('drop', dropCoin);
    }

    function dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function dropCoin(event) {
        event.preventDefault();
        const draggedCoin = document.querySelector('.coin');
        if (draggedCoin) {
            draggedCoin.remove();
            increasePiggyBankSize();
        }
    }

    function increasePiggyBankSize() {
        const newSize = 100 + (coins * 30); // 기본 크기 100px에서 코인마다 10px씩 증가
        piggyBank.style.transform = `scale(${newSize / 100})`;
    }

    // 초기 퀴즈 질문 표시
    loadQuiz();
});