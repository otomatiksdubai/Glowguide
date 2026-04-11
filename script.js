// Beginner-level database of products in an array
var products = [
    // Foundations
    { id: "f1", name: "Luminous Silk Foundation", category: "foundation", skinTones: ["fair", "medium"], skinTypes: ["dry", "normal"], conditions: ["none", "aging"], sensitive: "no", image: "Assets/foundation1.jpg.jpeg", price: 42.00, desc: "A lightweight liquid foundation." },
    { id: "f2", name: "Matte Perfection Foundation", category: "foundation", skinTones: ["medium", "tan"], skinTypes: ["oily", "combination"], conditions: ["acne", "none"], sensitive: "yes", image: "Assets/foundation2.jpg.jpeg", price: 38.00, desc: "Oil-free matte finish." },
    { id: "f3", name: "Hydrating Glow Foundation", category: "foundation", skinTones: ["fair", "medium"], skinTypes: ["dry", "normal", "combination"], conditions: ["none", "pigmentation"], sensitive: "yes", image: "Assets/foundation3.jpg.jpeg", price: 45.00, desc: "Hydrating formula for glow." },
    { id: "f4", name: "Deep Rich Foundation", category: "foundation", skinTones: ["deep"], skinTypes: ["normal", "dry", "combination", "oily"], conditions: ["pigmentation", "acne", "none"], sensitive: "no", image: "Assets/foundation4.jpg.jpeg", price: 40.00, desc: "Full coverage for deep skin." },
    { id: "f5", name: "All-Day Wear Foundation", category: "foundation", skinTones: ["tan", "deep"], skinTypes: ["oily", "combination"], conditions: ["redness", "acne", "none"], sensitive: "no", image: "Assets/foundation5.jpg.jpeg", price: 39.00, desc: "Long-wearing matte." },

    // Blushes
    { id: "b1", name: "Soft Peach Blush", category: "blush", skinTones: ["fair", "medium"], skinTypes: ["normal", "dry", "oily", "combination"], conditions: ["none", "acne", "aging", "redness", "pigmentation"], sensitive: "yes", image: "Assets/blush1.jpg.jpeg", price: 24.00, desc: "Natural peach flush." },
    { id: "b2", name: "Rose Radiance", category: "blush", skinTones: ["medium", "tan"], skinTypes: ["normal", "dry", "oily", "combination"], conditions: ["none", "acne", "aging", "redness", "pigmentation"], sensitive: "no", image: "Assets/blush2.jpg.jpeg", price: 26.00, desc: "Classic rose shade." },
    { id: "b3", name: "Coral Cream Blush", category: "blush", skinTones: ["medium", "tan"], skinTypes: ["dry", "normal"], conditions: ["aging", "none"], sensitive: "yes", image: "Assets/blush3.jpg.jpeg", price: 22.00, desc: "Coral cream blush." },
    { id: "b4", name: "Rich Berry Blush", category: "blush", skinTones: ["tan", "deep"], skinTypes: ["normal", "dry", "oily", "combination"], conditions: ["none", "acne", "aging", "redness", "pigmentation"], sensitive: "no", image: "Assets/blush4.jpg.jpeg", price: 28.00, desc: "Deep berry tones." },
    { id: "b5", name: "Terracotta Blush", category: "blush", skinTones: ["medium", "tan", "deep"], skinTypes: ["normal", "dry", "oily", "combination"], conditions: ["none", "pigmentation"], sensitive: "yes", image: "Assets/blush5.jpg.jpeg", price: 25.00, desc: "Warm terracotta shadow." },

    // Eyeshadows
    { id: "e1", name: "Everyday Nudes", category: "eyeshadow", skinTones: ["fair", "medium", "tan", "deep"], skinTypes: ["normal", "dry", "oily", "combination"], conditions: ["none", "acne", "aging", "redness", "pigmentation"], sensitive: "yes", image: "Assets/eyeshade1.jpg.jpeg", price: 48.00, desc: "Essential neutrals." },
    { id: "e2", name: "Smokey Glam Palette", category: "eyeshadow", skinTones: ["fair", "medium", "tan", "deep"], skinTypes: ["normal", "dry", "oily", "combination"], conditions: ["none", "acne", "aging", "redness", "pigmentation"], sensitive: "no", image: "Assets/eyeshade2.jpg.jpeg", price: 52.00, desc: "Deep colors for night out." },
    { id: "e3", name: "Warm Sunset", category: "eyeshadow", skinTones: ["medium", "tan", "deep"], skinTypes: ["normal", "dry", "oily", "combination"], conditions: ["none", "acne", "aging", "redness", "pigmentation"], sensitive: "yes", image: "Assets/eyeshade3.jpg.jpeg", price: 45.00, desc: "Rich oranges and golds." },
    { id: "e4", name: "Cool Tones Palette", category: "eyeshadow", skinTones: ["fair", "medium"], skinTypes: ["normal", "dry", "oily", "combination"], conditions: ["none", "acne", "aging", "redness", "pigmentation"], sensitive: "no", image: "Assets/eyeshade4.jpg.jpeg", price: 50.00, desc: "Silvers and blues." },
    { id: "e5", name: "Brights & Neons", category: "eyeshadow", skinTones: ["fair", "medium", "tan", "deep"], skinTypes: ["normal", "dry", "oily", "combination"], conditions: ["none", "acne", "aging", "redness", "pigmentation"], sensitive: "yes", image: "Assets/eyeshade5.jpg.jpeg", price: 42.00, desc: "Vibrant neon colors." },

    // Lipsticks
    { id: "l1", name: "Velvet Matte Nude", category: "lipstick", skinTones: ["fair", "medium"], skinTypes: ["normal", "dry", "oily", "combination"], conditions: ["none", "acne", "aging", "redness", "pigmentation"], sensitive: "yes", image: "Assets/lipstick1.jpg", price: 28.00, desc: "Hydrating matte nude." },
    { id: "l2", name: "Ruby Red Lipstick", category: "lipstick", skinTones: ["fair", "medium", "tan", "deep"], skinTypes: ["normal", "dry", "oily", "combination"], conditions: ["none", "acne", "aging", "redness", "pigmentation"], sensitive: "no", image: "Assets/lipstick2.jpg", price: 32.00, desc: "Bold red lip." },
    { id: "l3", name: "Dusty Rose Satin", category: "lipstick", skinTones: ["fair", "medium"], skinTypes: ["normal", "dry", "oily", "combination"], conditions: ["none", "acne", "aging", "redness", "pigmentation"], sensitive: "yes", image: "Assets/lipstick3.jpg", price: 30.00, desc: "Everyday rose color." },
    { id: "l4", name: "Warm Cocoa Lip Tint", category: "lipstick", skinTones: ["medium", "tan"], skinTypes: ["normal", "dry", "oily", "combination"], conditions: ["none", "acne", "aging", "redness", "pigmentation"], sensitive: "no", image: "Assets/lipstick4.jpg", price: 26.00, desc: "Warm brown tint." },
    { id: "l5", name: "Plum Liquid Lip", category: "lipstick", skinTones: ["tan", "deep"], skinTypes: ["normal", "dry", "oily", "combination"], conditions: ["none", "acne", "aging", "redness", "pigmentation"], sensitive: "yes", image: "Assets/lipstick5.jpg", price: 34.00, desc: "Intense plum color." }
];

var cart = []; // store items added to the cart

// Main function to match products
function getRecommendations() {
    var category = document.getElementById("category").value;
    var skinTone = document.getElementById("skinTone").value;
    var skinType = document.getElementById("skinType").value;
    var condition = document.getElementById("skinCondition").value;
    var sensitive = document.getElementById("sensitivity").value;

    var container = document.getElementById("products");
    container.innerHTML = ""; // clear old products before showing new ones

    var matches = [];
    
    // Simple basic for-loop to search the array
    for (var i = 0; i < products.length; i++) {
        var prod = products[i];
        
        var score = 0; // simple points system
        
        // Product MUST match the requested category
        if (prod.category == category) {
            score = score + 50; 
            
            if (prod.skinTones.includes(skinTone)) {
                score = score + 20;
            }
            if (prod.skinTypes.includes(skinType)) {
                score = score + 10;
            }
            if (prod.conditions.includes(condition)) {
                score = score + 10;
            }
            if (prod.sensitive == sensitive || prod.sensitive == "no") {
                score = score + 10;
            }

            // If score is high enough, we recommend it
            if (score >= 70) {
                matches.push(prod);
            }
        }
    }

    if (matches.length == 0) {
        container.innerHTML = "<p>No products found for this match. Try different options.</p>";
    } else {
        // Create HTML for each matched product
        for (var j = 0; j < matches.length; j++) {
            var matchProd = matches[j];
            
            var card = document.createElement("div");
            card.className = "product-card";
            
            // Simple string concatenation for HTML
            card.innerHTML = "<h3>" + matchProd.name + "</h3>" +
                             "<img src='" + matchProd.image + "' alt='Image'>" +
                             "<p>" + matchProd.desc + "</p>" +
                             "<p><b>Price: $" + matchProd.price + "</b></p>" +
                             "<button onclick='addToCart(\"" + matchProd.id + "\", \"" + matchProd.name + "\", " + matchProd.price + ")'>Add to Cart</button>";
            
            container.appendChild(card);
        }
    }
}

// Function to handle shopping cart
function addToCart(id, name, price) {
    cart.push({ id: id, name: name, price: price });
    document.getElementById("cart-count").innerText = cart.length; // update cart number
    alert("Success! " + name + " was added to your cart.");
}

function openCart() {
    document.getElementById("cart-modal").style.display = "block";
    var cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = "";
    
    var total = 0;
    
    if (cart.length == 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        for (var i = 0; i < cart.length; i++) {
            var item = cart[i];
            cartItemsDiv.innerHTML += "<p>- " + item.name + ": $" + item.price + "</p>";
            total = total + item.price;
        }
    }
    
    document.getElementById("total").innerText = total.toFixed(2);
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}
