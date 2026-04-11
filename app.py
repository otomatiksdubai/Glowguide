from flask import Flask, render_template, request, session, redirect, url_for

app = Flask(__name__)
# Secret key is required to use session variables in Flask
app.secret_key = "my_basic_secret_key" 

# Beginner-level database of products
PRODUCTS = [
    { "id": "f1", "name": "Luminous Silk Foundation", "category": "foundation", "skinTones": ["fair", "medium"], "skinTypes": ["dry", "normal"], "conditions": ["none", "aging"], "sensitive": "no", "image": "static/Assets/foundation1.jpg.jpeg", "price": 42.00, "desc": "A lightweight liquid foundation." },
    { "id": "f2", "name": "Matte Perfection Foundation", "category": "foundation", "skinTones": ["medium", "tan"], "skinTypes": ["oily", "combination"], "conditions": ["acne", "none"], "sensitive": "yes", "image": "static/Assets/foundation2.jpg.jpeg", "price": 38.00, "desc": "Oil-free matte finish." },
    { "id": "f3", "name": "Hydrating Glow Foundation", "category": "foundation", "skinTones": ["fair", "medium"], "skinTypes": ["dry", "normal", "combination"], "conditions": ["none", "pigmentation"], "sensitive": "yes", "image": "static/Assets/foundation3.jpg.jpeg", "price": 45.00, "desc": "Hydrating formula for glow." },
    { "id": "f4", "name": "Deep Rich Foundation", "category": "foundation", "skinTones": ["deep"], "skinTypes": ["normal", "dry", "combination", "oily"], "conditions": ["pigmentation", "acne", "none"], "sensitive": "no", "image": "static/Assets/foundation4.jpg.jpeg", "price": 40.00, "desc": "Full coverage for deep skin." },
    
    { "id": "b1", "name": "Soft Peach Blush", "category": "blush", "skinTones": ["fair", "medium"], "skinTypes": ["normal", "dry", "oily", "combination"], "conditions": ["none", "acne", "aging", "redness", "pigmentation"], "sensitive": "yes", "image": "static/Assets/blush1.jpg.jpeg", "price": 24.00, "desc": "Natural peach flush." },
    { "id": "b2", "name": "Rose Radiance", "category": "blush", "skinTones": ["medium", "tan"], "skinTypes": ["normal", "dry", "oily", "combination"], "conditions": ["none", "acne", "aging", "redness", "pigmentation"], "sensitive": "no", "image": "static/Assets/blush2.jpg.jpeg", "price": 26.00, "desc": "Classic rose shade." },
    
    { "id": "e1", "name": "Everyday Nudes", "category": "eyeshadow", "skinTones": ["fair", "medium", "tan", "deep"], "skinTypes": ["normal", "dry", "oily", "combination"], "conditions": ["none", "acne", "aging", "redness", "pigmentation"], "sensitive": "yes", "image": "static/Assets/eyeshade1.jpg.jpeg", "price": 48.00, "desc": "Essential neutrals." },
    { "id": "e2", "name": "Smokey Glam Palette", "category": "eyeshadow", "skinTones": ["fair", "medium", "tan", "deep"], "skinTypes": ["normal", "dry", "oily", "combination"], "conditions": ["none", "acne", "aging", "redness", "pigmentation"], "sensitive": "no", "image": "static/Assets/eyeshade2.jpg.jpeg", "price": 52.00, "desc": "Deep colors for night out." },
    
    { "id": "l1", "name": "Velvet Matte Nude", "category": "lipstick", "skinTones": ["fair", "medium"], "skinTypes": ["normal", "dry", "oily", "combination"], "conditions": ["none", "acne", "aging", "redness", "pigmentation"], "sensitive": "yes", "image": "static/Assets/lipstick1.jpg", "price": 28.00, "desc": "Hydrating matte nude." },
    { "id": "l2", "name": "Ruby Red Lipstick", "category": "lipstick", "skinTones": ["fair", "medium", "tan", "deep"], "skinTypes": ["normal", "dry", "oily", "combination"], "conditions": ["none", "acne", "aging", "redness", "pigmentation"], "sensitive": "no", "image": "static/Assets/lipstick2.jpg", "price": 32.00, "desc": "Bold red lip." }
]

@app.route("/", methods=["GET", "POST"])
def index():
    # Keep track of cart using flask session
    if "cart" not in session:
        session["cart"] = []
        
    matches = []
    
    # If the user submitted the form
    if request.method == "POST":
        # Get input values from form
        category = request.form.get("category")
        skinTone = request.form.get("skinTone")
        skinType = request.form.get("skinType")
        condition = request.form.get("skinCondition")
        sensitive = request.form.get("sensitivity")
        
        # Basic matching loop
        for prod in PRODUCTS:
            score = 0
            # Must match category
            if prod["category"] == category:
                score = score + 50
                
                # Check other fields
                if skinTone in prod["skinTones"]:
                    score = score + 20
                if skinType in prod["skinTypes"]:
                    score = score + 10
                if condition in prod["conditions"]:
                    score = score + 10
                if prod["sensitive"] == sensitive or prod["sensitive"] == "no":
                    score = score + 10
                
                # Recommend if score is good
                if score >= 70:
                    matches.append(prod)
                    
    # Calculate cart total
    total_price = 0
    for item in session["cart"]:
        total_price = total_price + item["price"]
                    
    return render_template("index.html", matches=matches, cart=session["cart"], total_price=total_price)

@app.route("/add_to_cart", methods=["POST"])
def add_to_cart():
    # Gets the hidden input value
    product_id = request.form.get("product_id")
    
    for prod in PRODUCTS:
        if prod["id"] == product_id:
            cart = session["cart"]
            cart.append(prod)
            session["cart"] = cart
            break
            
    # Go back to the main page
    return redirect(url_for("index"))

@app.route("/clear_cart", methods=["POST"])
def clear_cart():
    # Empty the cart
    session["cart"] = []
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)
