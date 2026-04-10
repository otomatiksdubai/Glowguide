import os
from flask import Flask, render_template, request, jsonify, send_from_directory

# Configure Flask app to serve static files from the 'static' folder
# and also allow serving from the 'Assets' folder at the root.
app = Flask(__name__, static_url_path='/static')

PRODUCTS = [
    # Foundations
    {
        "id": "f1", "name": "Luminous Silk Foundation", "category": "foundation", "skinTones": ["fair", "light"], "skinTypes": ["dry", "normal"], "image": "/Assets/foundation1.jpg.jpeg", "price": 42.00, "description": "A lightweight, liquid foundation providing a luminous, dewy finish."
    },
    {
        "id": "f2", "name": "Matte Perfection Foundation", "category": "foundation", "skinTones": ["medium", "tan"], "skinTypes": ["oily", "combination"], "image": "/Assets/foundation2.jpg.jpeg", "price": 38.00, "description": "Oil-free, medium-to-full coverage with a beautiful matte finish."
    },
    {
        "id": "f3", "name": "Hydrating Glow Serum", "category": "foundation", "skinTones": ["fair", "light", "medium"], "skinTypes": ["dry", "normal", "combination"], "image": "/Assets/foundation3.jpg.jpeg", "price": 45.00, "description": "Super hydrating formula infused with hyaluronic acid."
    },
    {
        "id": "f4", "name": "Deep Rich Coverage", "category": "foundation", "skinTones": ["deep"], "skinTypes": ["normal", "dry", "combination", "oily"], "image": "/Assets/foundation4.jpg.jpeg", "price": 40.00, "description": "Flawless coverage formulated specifically for deep skin tones."
    },
    {
        "id": "f5", "name": "All-Day Wear Velvet Base", "category": "foundation", "skinTones": ["tan", "deep"], "skinTypes": ["oily", "combination"], "image": "/Assets/foundation5.jpg.jpeg", "price": 39.00, "description": "Long-wearing velvety matte foundation that lasts up to 24 hours."
    },
    
    # Blushes
    {
        "id": "b1", "name": "Soft Peach Blush", "category": "blush", "skinTones": ["fair", "light"], "skinTypes": ["normal", "dry", "combination", "oily"], "image": "/Assets/blush1.jpg.jpeg", "price": 24.00, "description": "A subtle, natural peach flush perfect for lighter skin tones."
    },
    {
        "id": "b2", "name": "Rose Radiance", "category": "blush", "skinTones": ["light", "medium"], "skinTypes": ["normal", "dry", "combination", "oily"], "image": "/Assets/blush2.jpg.jpeg", "price": 26.00, "description": "A classic rose shade that provides a healthy, radiant glow."
    },
    {
        "id": "b3", "name": "Coral Pop Cream Blush", "category": "blush", "skinTones": ["medium", "tan"], "skinTypes": ["dry", "normal"], "image": "/Assets/blush3.jpg.jpeg", "price": 22.00, "description": "A vibrant coral cream that melts beautifully into the skin."
    },
    {
        "id": "b4", "name": "Rich Berry Flush", "category": "blush", "skinTones": ["tan", "deep"], "skinTypes": ["normal", "dry", "combination", "oily"], "image": "/Assets/blush4.jpg.jpeg", "price": 28.00, "description": "Deep berry tones that add a striking warm flush."
    },
    {
        "id": "b5", "name": "Terracotta Warmth", "category": "blush", "skinTones": ["medium", "tan", "deep"], "skinTypes": ["normal", "dry", "combination", "oily"], "image": "/Assets/blush5.jpg.jpeg", "price": 25.00, "description": "An earthy terracotta shade that doubles as a subtle bronzer."
    },
    
    # Eyeshadows
    {
        "id": "e1", "name": "Everyday Nudes Palette", "category": "eyeshadow", "skinTones": ["fair", "light", "medium", "tan", "deep"], "skinTypes": ["normal", "dry", "combination", "oily"], "image": "/Assets/eyeshade1.jpg.jpeg", "price": 48.00, "description": "Essential neutral shades for your daily flawless look."
    },
    {
        "id": "e2", "name": "Smokey Glam Palette", "category": "eyeshadow", "skinTones": ["fair", "light", "medium", "tan", "deep"], "skinTypes": ["normal", "dry", "combination", "oily"], "image": "/Assets/eyeshade2.jpg.jpeg", "price": 52.00, "description": "Deep, dramatic tones for the ultimate night-out glam."
    },
    {
        "id": "e3", "name": "Warm Sunset Palette", "category": "eyeshadow", "skinTones": ["medium", "tan", "deep"], "skinTypes": ["normal", "dry", "combination", "oily"], "image": "/Assets/eyeshade3.jpg.jpeg", "price": 45.00, "description": "Rich oranges, reds, and golds inspired by summer sunsets."
    },
    {
        "id": "e4", "name": "Cool Tones & Metallics", "category": "eyeshadow", "skinTones": ["fair", "light", "medium"], "skinTypes": ["normal", "dry", "combination", "oily"], "image": "/Assets/eyeshade4.jpg.jpeg", "price": 50.00, "description": "Silvers, icy blues, and cool browns with intense metallic shimmer."
    },
    {
        "id": "e5", "name": "Brights & Neons Palette", "category": "eyeshadow", "skinTones": ["fair", "light", "medium", "tan", "deep"], "skinTypes": ["normal", "dry", "combination", "oily"], "image": "/Assets/eyeshade5.jpg.jpeg", "price": 42.00, "description": "A pop of vibrant colors for creative and bold eye looks."
    }
]

@app.route('/Assets/<path:filename>')
def serve_assets(filename):
    return send_from_directory('Assets', filename)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/recommend', methods=['POST'])
def recommend():
    data = request.json
    category = data.get('category')
    skin_tone = data.get('skinTone')
    skin_type = data.get('skinType')

    recommendations = []
    
    for product in PRODUCTS:
        if product['category'] != category:
            continue
            
        score = 0
        if skin_tone in product['skinTones'] or "all" in product['skinTones']:
            score += 50
        if skin_type in product['skinTypes'] or "all" in product['skinTypes']:
            score += 50
            
        if score > 0:
            recommendations.append({
                **product,
                "matchScore": score
            })

    # Sort descending by score
    recommendations.sort(key=lambda x: x['matchScore'], reverse=True)
    
    return jsonify({
        "success": True,
        "recommendations": recommendations[:6] # Top 6 recommendations
    })

if __name__ == '__main__':
    app.run(debug=True, port=8080)
