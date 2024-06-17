document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.category');
    const tipCards = document.querySelectorAll('.tip-card');
  
    categories.forEach(category => {
      category.addEventListener('click', function() {
        const categoryValue = this.getAttribute('data-category');
  
        // Remove active class from all categories
        categories.forEach(cat => cat.classList.remove('active'));
  
        // Add active class to the clicked category
        this.classList.add('active');
  
        // Show or hide tips based on category
        tipCards.forEach(card => {
          if (categoryValue === 'all') {
            card.style.display = 'block';
          } else {
            card.style.display = card.getAttribute('data-category') === categoryValue ? 'block' : 'none';
          }
        });
      });
    });
  });