document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recommendation-form');
    const resultsSection = document.getElementById('results');
    const productsContainer = document.getElementById('products-container');
    const spinner = document.getElementById('spinner');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form values
        const category = document.getElementById('category').value;
        const skinTone = document.getElementById('skinTone').value;
        const skinType = document.getElementById('skinType').value;

        // Show results section and spinner
        resultsSection.classList.remove('hidden');
        productsContainer.innerHTML = '';
        spinner.classList.remove('hidden');
        
        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });

        try {
            // Fetch recommendations from Flask backend
            const response = await fetch('/api/recommend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ category, skinTone, skinType })
            });

            const data = await response.json();

            // Simulate slight delay for better UX (so spinner is visible briefly)
            setTimeout(() => {
                spinner.classList.add('hidden');
                displayProducts(data.recommendations);
            }, 800);

        } catch (error) {
            console.error('Error fetching recommendations:', error);
            spinner.classList.add('hidden');
            productsContainer.innerHTML = '<p style="color: red; text-align: center; width: 100%;">An error occurred. Please try again later.</p>';
        }
    });

    function displayProducts(products) {
        if (!products || products.length === 0) {
            productsContainer.innerHTML = '<p style="text-align: center; width: 100%; color: var(--text-light); font-size: 1.2rem;">No perfect matches found. Try adjusting your preferences!</p>';
            return;
        }

        products.forEach((product, index) => {
            // Create product card
            const card = document.createElement('div');
            card.className = 'product-card animate-up';
            card.style.animationDelay = `${index * 0.1}s`;

            // Calculate match percentage for UI (Backend gives max 100)
            const matchPercentage = product.matchScore > 100 ? 100 : (product.matchScore === 100 ? '100% Perfect Match' : `${product.matchScore}% Match`);

            card.innerHTML = `
                <div class="match-badge">${matchPercentage} <i class="fa-solid fa-star" style="font-size: 0.8rem;"></i></div>
                <div class="product-img-wrapper">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                    <div class="product-footer">
                        <span class="product-price">$${product.price.toFixed(2)}</span>
                        <button class="btn-add-cart">
                            <i class="fa-solid fa-cart-plus"></i> Add
                        </button>
                    </div>
                </div>
            `;
            productsContainer.appendChild(card);
        });
    }

    // Interactive Cart Mock
    document.querySelectorAll('.nav-links .cart-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Cart functionality is coming soon!");
        });
    });

    // Add to cart delegation
    productsContainer.addEventListener('click', (e) => {
        if (e.target.closest('.btn-add-cart')) {
            const badge = document.querySelector('.badge');
            badge.textContent = parseInt(badge.textContent) + 1;
            
            const btn = e.target.closest('.btn-add-cart');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Added';
            btn.style.background = 'var(--primary-dark)';
            btn.style.color = 'white';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.color = '';
            }, 2000);
        }
    });
});
