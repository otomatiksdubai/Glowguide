const PRODUCTS = [
    // Foundations
    {
        id: "f1", name: "Luminous Silk Foundation", category: "foundation",
        skinTones: ["fair", "light"], skinTypes: ["dry", "normal"], conditions: ["none", "aging"], sensitive: false,
        image: "Assets/foundation1.jpg.jpeg", price: 42.00, description: "A lightweight, liquid foundation providing a luminous, dewy finish."
    },
    {
        id: "f2", name: "Matte Perfection Foundation", category: "foundation",
        skinTones: ["medium", "tan"], skinTypes: ["oily", "combination"], conditions: ["acne", "none"], sensitive: true,
        image: "Assets/foundation2.jpg.jpeg", price: 38.00, description: "Oil-free, medium-to-full coverage with a beautiful matte finish."
    },
    {
        id: "f3", name: "Hydrating Glow Serum", category: "foundation",
        skinTones: ["fair", "light", "medium"], skinTypes: ["dry", "normal", "combination"], conditions: ["none", "pigmentation"], sensitive: true,
        image: "Assets/foundation3.jpg.jpeg", price: 45.00, description: "Super hydrating formula infused with hyaluronic acid. Gentle on sensitive skin."
    },
    {
        id: "f4", name: "Deep Rich Coverage", category: "foundation",
        skinTones: ["deep"], skinTypes: ["normal", "dry", "combination", "oily"], conditions: ["pigmentation", "acne"], sensitive: false,
        image: "Assets/foundation4.jpg.jpeg", price: 40.00, description: "Flawless full coverage formulated specifically for deep skin tones."
    },
    {
        id: "f5", name: "All-Day Wear Velvet Base", category: "foundation",
        skinTones: ["tan", "deep"], skinTypes: ["oily", "combination"], conditions: ["redness", "acne"], sensitive: false,
        image: "Assets/foundation5.jpg.jpeg", price: 39.00, description: "Long-wearing velvety matte foundation that lasts up to 24 hours."
    },

    // Blushes
    {
        id: "b1", name: "Soft Peach Blush", category: "blush",
        skinTones: ["fair", "light"], skinTypes: ["all"], conditions: ["all"], sensitive: true,
        image: "Assets/blush1.jpg.jpeg", price: 24.00, description: "A subtle, natural peach flush perfect for lighter skin tones."
    },
    {
        id: "b2", name: "Rose Radiance", category: "blush",
        skinTones: ["light", "medium"], skinTypes: ["all"], conditions: ["all"], sensitive: false,
        image: "Assets/blush2.jpg.jpeg", price: 26.00, description: "A classic rose shade that provides a healthy, radiant glow."
    },
    {
        id: "b3", name: "Coral Pop Cream Blush", category: "blush",
        skinTones: ["medium", "tan"], skinTypes: ["dry", "normal"], conditions: ["aging", "none"], sensitive: true,
        image: "Assets/blush3.jpg.jpeg", price: 22.00, description: "A vibrant coral cream that melts beautifully into the dry skin."
    },
    {
        id: "b4", name: "Rich Berry Flush", category: "blush",
        skinTones: ["tan", "deep"], skinTypes: ["all"], conditions: ["all"], sensitive: false,
        image: "Assets/blush4.jpg.jpeg", price: 28.00, description: "Deep berry tones that add a striking warm flush."
    },
    {
        id: "b5", name: "Terracotta Warmth", category: "blush",
        skinTones: ["medium", "tan", "deep"], skinTypes: ["all"], conditions: ["none", "pigmentation"], sensitive: true,
        image: "Assets/blush5.jpg.jpeg", price: 25.00, description: "An earthy terracotta shade that doubles as a subtle bronzer."
    },

    // Eyeshadows
    {
        id: "e1", name: "Everyday Nudes Palette", category: "eyeshadow",
        skinTones: ["all"], skinTypes: ["all"], conditions: ["all"], sensitive: true,
        image: "Assets/eyeshade1.jpg.jpeg", price: 48.00, description: "Essential neutral shades for your daily flawless look."
    },
    {
        id: "e2", name: "Smokey Glam Palette", category: "eyeshadow",
        skinTones: ["all"], skinTypes: ["all"], conditions: ["all"], sensitive: false,
        image: "Assets/eyeshade2.jpg.jpeg", price: 52.00, description: "Deep, dramatic tones for the ultimate night-out glam."
    },
    {
        id: "e3", name: "Warm Sunset Palette", category: "eyeshadow",
        skinTones: ["medium", "tan", "deep"], skinTypes: ["all"], conditions: ["all"], sensitive: true,
        image: "Assets/eyeshade3.jpg.jpeg", price: 45.00, description: "Rich oranges, reds, and golds inspired by summer sunsets."
    },
    {
        id: "e4", name: "Cool Tones & Metallics", category: "eyeshadow",
        skinTones: ["fair", "light", "medium"], skinTypes: ["all"], conditions: ["all"], sensitive: false,
        image: "Assets/eyeshade4.jpg.jpeg", price: 50.00, description: "Silvers, icy blues, and cool browns with intense metallic shimmer."
    },
    {
        id: "e5", name: "Brights & Neons Palette", category: "eyeshadow",
        skinTones: ["all"], skinTypes: ["all"], conditions: ["all"], sensitive: true,
        image: "Assets/eyeshade5.jpg.jpeg", price: 42.00, description: "A pop of vibrant colors for creative and bold eye looks."
    },

    // Lipsticks
    {
        id: "l1", name: "Velvet Matte Nude", category: "lipstick",
        skinTones: ["fair", "light"], skinTypes: ["all"], conditions: ["all"], sensitive: true,
        image: "Assets/lipstick1.jpg", price: 28.00, description: "A soft, hydrating matte nude perfect for lighter tones."
    },
    {
        id: "l2", name: "Classic Ruby Red", category: "lipstick",
        skinTones: ["all"], skinTypes: ["all"], conditions: ["all"], sensitive: false,
        image: "Assets/lipstick2.jpg", price: 32.00, description: "The ultimate bold red lip that suits absolutely everyone."
    },
    {
        id: "l3", name: "Dusty Rose Satin", category: "lipstick",
        skinTones: ["light", "medium"], skinTypes: ["all"], conditions: ["all"], sensitive: true,
        image: "Assets/lipstick3.jpg", price: 30.00, description: "A beautiful everyday rose color with a satin smooth finish."
    },
    {
        id: "l4", name: "Warm Cocoa Lip Tint", category: "lipstick",
        skinTones: ["medium", "tan"], skinTypes: ["all"], conditions: ["all"], sensitive: false,
        image: "Assets/lipstick4.jpg", price: 26.00, description: "A nourishing lip tint offering a beautiful warm brown hue."
    },
    {
        id: "l5", name: "Deep Plum Liquid Lip", category: "lipstick",
        skinTones: ["tan", "deep"], skinTypes: ["all"], conditions: ["all"], sensitive: true,
        image: "Assets/lipstick5.jpg", price: 34.00, description: "Intense, long-lasting plum liquid lipstick that won't dry out your lips."
    }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recommendation-form');
    const resultsSection = document.getElementById('results');
    const productsContainer = document.getElementById('products-container');
    const spinner = document.getElementById('spinner');

    // Cart Elements
    const cartIconBtn = document.getElementById('cart-icon-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.getElementById('close-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const category = document.getElementById('category').value;
        const skinTone = document.getElementById('skinTone').value;
        const skinType = document.getElementById('skinType').value;
        const skinCondition = document.getElementById('skinCondition').value;
        const sensitivity = document.getElementById('sensitivity').value;

        // Show results section and spinner
        resultsSection.classList.remove('hidden');
        productsContainer.innerHTML = '';
        spinner.classList.remove('hidden');

        // Scroll to results cleanly
        setTimeout(() => {
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);

        // Simulate network delay for UX
        setTimeout(() => {
            spinner.classList.add('hidden');

            // Logic for Recommendation
            const recommendations = getRecommendations(category, skinTone, skinType, skinCondition, sensitivity);
            displayProducts(recommendations);
        }, 800);
    });

    function getRecommendations(category, skinTone, skinType, condition, sensitivity) {
        let matches = [];

        for (const product of PRODUCTS) {
            if (product.category !== category) continue;

            let score = 0;
            let tags = [];

            // Skin Tone Match
            if (product.skinTones.includes(skinTone) || product.skinTones.includes("all")) {
                score += 30;
            }
            // Skin Type Match
            if (product.skinTypes.includes(skinType) || product.skinTypes.includes("all")) {
                score += 30;
                tags.push("Good for " + skinType);
            }
            // Condition Match
            if (product.conditions.includes(condition) || product.conditions.includes("all")) {
                score += 20;
                if (condition !== "none" && !product.conditions.includes("all")) tags.push("Targets " + condition);
            }
            // Sensitivity Match
            if (sensitivity === 'yes') {
                if (product.sensitive) {
                    score += 20;
                    tags.push("Gentle & Safe");
                } else {
                    // Penalty if it's not sensitive friendly but user is sensitive
                    score -= 20;
                }
            } else {
                score += 20; // If not sensitive, default gets points
            }

            if (score > 0) {
                matches.push({ ...product, matchScore: score, tags: tags });
            }
        }

        // Sort descending by score
        matches.sort((a, b) => b.matchScore - a.matchScore);

        // Return top 6
        return matches.slice(0, 6);
    }

    function displayProducts(products) {
        if (!products || products.length === 0) {
            productsContainer.innerHTML = '<p style="text-align: center; width: 100%; color: var(--text-light); font-size: 1.2rem;">No perfect matches found. Try adjusting your preferences!</p>';
            return;
        }

        products.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = product.matchScore >= 100 ? 'product-card animate-up perfect-match' : 'product-card animate-up';
            card.setAttribute('data-id', product.id);
            card.style.animationDelay = `${index * 0.1}s`;

            const matchPercentage = product.matchScore >= 100 ? '100% Perfect Match' : `${Math.max(product.matchScore, 20)}% Match`;

            let tagsHtml = product.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

            card.innerHTML = `
                <div class="match-badge">${matchPercentage} <i class="fa-solid fa-star" style="font-size: 0.8rem;"></i></div>
                <div class="product-img-wrapper">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300?text=No+Image';">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-tags">${tagsHtml}</div>
                    <p class="product-desc">${product.description}</p>
                    <div class="product-footer">
                        <span class="product-price">$${product.price.toFixed(2)}</span>
                        <button class="btn-add-cart" data-id="${product.id}">
                            <i class="fa-solid fa-cart-plus"></i> Add
                        </button>
                    </div>
                </div>
            `;
            productsContainer.appendChild(card);
        });
    }

    // --- Cart Logic ---

    function updateCartUI() {
        // Update badge
        const badge = document.querySelector('.badge');
        badge.textContent = cart.length;

        // Populate modal items
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="cart-empty">Your bag is empty.</p>';
        } else {
            cart.forEach((item, index) => {
                total += item.price;
                const div = document.createElement('div');
                div.className = 'cart-item';
                div.innerHTML = `
                    <div class="cart-item-info">
                        <span class="cart-item-title">${item.name}</span>
                        <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                    </div>
                    <button class="cart-item-remove" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
                `;
                cartItemsContainer.appendChild(div);
            });
        }

        cartTotalPrice.textContent = `$${total.toFixed(2)}`;
    }

    // Product & Cart delegation
    productsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-add-cart');
        const card = e.target.closest('.product-card');

        if (btn) {
            e.stopPropagation(); // prevent card click
            const productId = btn.getAttribute('data-id');
            const product = PRODUCTS.find(p => p.id === productId);
            if (product) {
                cart.push(product);
                updateCartUI();

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
        } else if (card) {
            // Open Quick View Modal
            const productId = card.getAttribute('data-id');
            const product = PRODUCTS.find(p => p.id === productId);
            if (product) {
                document.getElementById('popup-img').src = product.image;
                document.getElementById('popup-title').textContent = product.name;
                document.getElementById('popup-price').textContent = `$${product.price.toFixed(2)}`;
                document.getElementById('popup-desc').textContent = product.description;
                
                // Add tags
                const tagsHtml = product.tags ? product.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '';
                document.getElementById('popup-tags').innerHTML = tagsHtml;
                
                // Track button ID
                document.getElementById('popup-add-cart').setAttribute('data-id', product.id);
                
                // Show modal
                document.getElementById('product-modal').classList.add('active');
            }
        }
    });

    // Quick View Add to Cart
    document.getElementById('popup-add-cart').addEventListener('click', (e) => {
        const btn = e.currentTarget;
        const productId = btn.getAttribute('data-id');
        const product = PRODUCTS.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            updateCartUI();

            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Added';
            btn.style.background = 'var(--primary-dark)';
            btn.style.color = 'white';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.color = '';
                document.getElementById('product-modal').classList.remove('active');
            }, 1000);
        }
    });

    // Close Modals
    document.getElementById('close-product-modal').addEventListener('click', () => {
        document.getElementById('product-modal').classList.remove('active');
    });

    // Remove from cart delegation
    cartItemsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.cart-item-remove');
        if (btn) {
            const index = btn.getAttribute('data-index');
            cart.splice(index, 1);
            updateCartUI();
        }
    });

    // Modal behavior
    cartIconBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cartModal.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });

    // Initialize UI
    updateCartUI();

    // Checkout Logic
    const btnCheckout = document.querySelector('.btn-checkout');
    const cartSuccessOverlay = document.getElementById('cart-success');
    
    if (btnCheckout && cartSuccessOverlay) {
        btnCheckout.addEventListener('click', (e) => {
            if (cart.length === 0) {
                alert("Your bag is empty! Add some products first.");
                return; // cannot checkout empty cart
            }

            // Show circular loading on button first
            btnCheckout.innerHTML = '<span class="checkout-loader"></span> Processing...';
            btnCheckout.style.pointerEvents = 'none';

            // Simulate server processing time
            setTimeout(() => {
                // Success State! Trigger Right-Middle pop up overlay
                cartSuccessOverlay.classList.remove('hidden');
                
                // Keep overlay for a few seconds, then close modal and clear bag
                setTimeout(() => {
                    cart = [];
                    updateCartUI();
                    
                    // Reset everything
                    cartModal.classList.remove('active');
                    cartSuccessOverlay.classList.add('hidden');
                    btnCheckout.innerHTML = 'Checkout Now';
                    btnCheckout.style.pointerEvents = 'auto';
                }, 3500);

            }, 2500); // 2.5 seconds loading
        });
    }

    // Hero Image Slideshow
    const heroImg = document.getElementById('hero-img');
    const heroImageAssets = [
        'Assets/lipstick5.jpg',
        'Assets/eyeshade2.jpg.jpeg',
        'Assets/foundation3.jpg.jpeg',
        'Assets/blush1.jpg.jpeg',
        'Assets/eyeshade5.jpg.jpeg'
    ];
    let currentHeroIndex = 0;

    if (heroImg) {
        // Set smooth transition for the image source change
        heroImg.style.transition = 'all 0.5s ease-in-out';

        setInterval(() => {
            // Fade out
            heroImg.style.opacity = '0.3';

            setTimeout(() => {
                currentHeroIndex = (currentHeroIndex + 1) % heroImageAssets.length;
                heroImg.src = heroImageAssets[currentHeroIndex];

                // Fade in
                heroImg.style.opacity = '1';
            }, 500); // Match this timeout with the CSS transition duration
        }, 2000); // Change image every 4 seconds
    }
});
