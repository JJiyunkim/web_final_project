document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const age = parseInt(urlParams.get('age'), 10);
    const income = parseInt(urlParams.get('income'), 10);
    const goal = urlParams.get('goal');
  
    let recommendation = '';
  
    if (goal === 'saving') {
      if (income < 3000) {
        recommendation = '저축 상품 추천: 저비용 고금리 저축 예금, 적금 상품';
      } else if (income < 7000) {
        recommendation = '저축 상품 추천: 중간 금리 저축 예금, 적금 상품';
      } else {
        recommendation = '저축 상품 추천: 고금리 저축 예금, 적금 상품';
      }
    } else if (goal === 'investment') {
      if (age < 30) {
        recommendation = '투자 상품 추천: 공격적인 투자 상품 (주식, ETF)';
      } else if (age < 50) {
        recommendation = '투자 상품 추천: 중립적인 투자 상품 (혼합형 펀드, 채권)';
      } else {
        recommendation = '투자 상품 추천: 보수적인 투자 상품 (안정형 펀드, 채권)';
      }
    } else if (goal === 'loan') {
      if (income < 30000000) {
        recommendation = '대출 상품 추천: 저비용 신용 대출';
      } else if (income < 70000000) {
        recommendation = '대출 상품 추천: 중간 금리 신용 대출, 담보 대출';
      } else {
        recommendation = '대출 상품 추천: 고액 신용 대출, 담보 대출';
      }
    } else if (goal === 'retirement') {
      if (age < 30) {
        recommendation = '은퇴 계획 추천: 장기적 연금 저축, 연금 보험';
      } else if (age < 50) {
        recommendation = '은퇴 계획 추천: 중기적 연금 저축, 연금 보험';
      } else {
        recommendation = '은퇴 계획 추천: 단기적 연금 저축, 연금 보험';
      }
    }
  
    const resultDiv = document.getElementById('recommendationResult');
  resultDiv.innerHTML = `
    <p><strong>나이:</strong> ${age}</p>
    <p><strong>소득:</strong> ${income}</p>
    <p><strong>재정 목표:</strong> ${goal}</p>
    <p><strong>추천:</strong> ${recommendation}</p>
  `;
  resultDiv.style.display = 'block';
  });