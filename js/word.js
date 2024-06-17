document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.category');
    const wordCards = document.querySelectorAll('.word-card');
  
    categories.forEach(category => {
      category.addEventListener('click', function() {
        const categoryValue = this.getAttribute('data-category');
  
        // Remove active class from all categories
        categories.forEach(cat => cat.classList.remove('active'));
  
        // Add active class to the clicked category
        this.classList.add('active');
  
        // Show or hide words based on category
        wordCards.forEach(card => {
          if (categoryValue === 'all') {
            card.style.display = 'block';
          } else {
            card.style.display = card.getAttribute('data-category') === categoryValue ? 'block' : 'none';
          }
        });
      });
    });
  
    wordCards.forEach(card => {
      card.querySelector('h2').addEventListener('click', function() {
        const description = card.querySelector('p');
        if (description.style.display === 'none' || description.style.display === '') {
          description.style.display = 'block';
        } else {
          description.style.display = 'none';
        }
      });
    });
  });