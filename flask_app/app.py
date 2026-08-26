"""
D NEST Interior Design Studio - Flask Application
Production-oriented Flask app with public pages and JSON APIs.
"""

import os
from datetime import datetime
from flask import Flask, render_template, request, jsonify
from supabase_client import submit_contact
from config import apply_production_config
from security import json_error, require_json

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY") or "change-me-in-production"
apply_production_config(app)

# Public portfolio content.
STATS = [
    {"value": "150+", "label": "Projects Completed", "icon": "building2"},
    {"value": "200+", "label": "Happy Clients", "icon": "users"},
    {"value": "25+", "label": "Design Awards", "icon": "award"},
    {"value": "15+", "label": "Years Experience", "icon": "star"},
]

SERVICES = [
    {"icon": "home", "title": "Residential Design", "description": "Personalized interiors that balance lifestyle, comfort, and character.", "features": ["Custom home design", "Space optimization", "Furniture curation", "Color consultation"], "gradient": "from-amber-500 to-orange-600", "image": "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {"icon": "building2", "title": "Commercial Spaces", "description": "High-impact workspaces designed for productivity, identity, and customer experience.", "features": ["Office planning", "Retail design", "Brand integration", "Ergonomic solutions"], "gradient": "from-blue-500 to-indigo-600", "image": "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {"icon": "palette", "title": "3D Visualization", "description": "Photorealistic visualizations that let clients experience the design before execution.", "features": ["3D rendering", "Virtual tours", "Material preview", "Design iterations"], "gradient": "from-purple-500 to-pink-600", "image": "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {"icon": "lightbulb", "title": "Lighting Design", "description": "Layered lighting strategies that improve mood, function, and architectural focus.", "features": ["Ambient lighting", "Task lighting", "Accent lighting", "Smart controls"], "gradient": "from-yellow-500 to-amber-600", "image": "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {"icon": "sofa", "title": "Furniture Design", "description": "Custom furniture concepts tailored to space, materials, and everyday use.", "features": ["Custom pieces", "Material selection", "Ergonomic design", "Artisan crafting"], "gradient": "from-emerald-500 to-teal-600", "image": "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {"icon": "tree", "title": "Landscape Integration", "description": "Indoor-outdoor harmony using natural materials and biophilic principles.", "features": ["Indoor gardens", "Natural materials", "Outdoor living", "Sustainable design"], "gradient": "from-green-500 to-emerald-600", "image": "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600"},
]

TEAM = [
    {"name": "Piyush Ramteke", "role": "Founder & Lead Developer", "image": "images/1749496203858~3.jpg", "bio": "Leads the studio website, product direction, and practical digital experiences for clients.", "icon": "code"},
    {"name": "Nikhil Sonone", "role": "Co-Founder & Technical Associate", "image": "images/niku.jpeg", "bio": "Supports implementation, problem-solving, and delivery across design and technology workflows.", "icon": "wrench"},
]

VALUES = [
    {"icon": "heart", "title": "Quality", "description": "Detailed work, dependable communication, and consistent attention to the final experience."},
    {"icon": "lightbulb", "title": "Creativity", "description": "Ideas are balanced with practical constraints so the final design remains useful and memorable."},
    {"icon": "award", "title": "Continuous Improvement", "description": "The studio keeps refining its design process, technology, and client experience."},
]

PORTFOLIO_ITEMS = [
    {"id": "1", "title": "Modern Scandinavian Living", "category": "residential", "description": "Clean lines, natural materials, and a calm neutral palette.", "image_url": "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200", "featured": True, "location": "Mumbai, India", "year": "2024"},
    {"id": "2", "title": "Executive Office Suite", "category": "commercial", "description": "A sophisticated workspace combining functionality with elegance.", "image_url": "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1200", "featured": True, "location": "Pune, India", "year": "2024"},
    {"id": "3", "title": "Minimalist Zen Bedroom", "category": "minimal", "description": "Japanese-inspired minimalism with natural wood accents.", "image_url": "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1200", "featured": True, "location": "Bangalore, India", "year": "2024"},
    {"id": "4", "title": "Luxe Marble Kitchen", "category": "luxury", "description": "Italian marble, warm metallic accents, and modern appliances.", "image_url": "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200", "featured": True, "location": "Delhi, India", "year": "2024"},
    {"id": "5", "title": "Contemporary Loft Space", "category": "residential", "description": "Industrial-chic living with exposed textures and an open plan.", "image_url": "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200", "featured": False, "location": "Hyderabad, India", "year": "2023"},
    {"id": "6", "title": "Boutique Hotel Lobby", "category": "commercial", "description": "A welcoming lobby blending modern and classic details.", "image_url": "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1200", "featured": False, "location": "Goa, India", "year": "2023"},
]

LISTINGS = [
    {"id": 1, "title": "Modern Luxury Apartment", "location": "Bandra West, Mumbai", "price": "₹2.5 Cr", "bedrooms": 3, "bathrooms": 2, "area": "1,850 sq ft", "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop", "type": "Apartment"},
    {"id": 2, "title": "Contemporary Villa", "location": "Juhu, Mumbai", "price": "₹8.5 Cr", "bedrooms": 5, "bathrooms": 4, "area": "4,200 sq ft", "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop", "type": "Villa"},
    {"id": 3, "title": "Penthouse Suite", "location": "Worli, Mumbai", "price": "₹12 Cr", "bedrooms": 4, "bathrooms": 3, "area": "3,500 sq ft", "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop", "type": "Penthouse"},
    {"id": 4, "title": "Studio Apartment", "location": "Andheri West, Mumbai", "price": "₹85 L", "bedrooms": 1, "bathrooms": 1, "area": "650 sq ft", "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop", "type": "Studio"},
    {"id": 5, "title": "Duplex Home", "location": "Powai, Mumbai", "price": "₹3.2 Cr", "bedrooms": 4, "bathrooms": 3, "area": "2,800 sq ft", "image": "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop", "type": "Duplex"},
    {"id": 6, "title": "Sea View Apartment", "location": "Marine Drive, Mumbai", "price": "₹6.5 Cr", "bedrooms": 3, "bathrooms": 2, "area": "2,200 sq ft", "image": "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop", "type": "Apartment"},
]

TESTIMONIALS = [
    {"name": "Priya Sharma", "role": "Homeowner, Mumbai", "text": "D NEST transformed our apartment into a dream home. Every detail was thoughtfully crafted.", "image": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"},
    {"name": "Rahul Mehta", "role": "CEO, TechStart", "text": "Our office space is now inspiring and productive. The team exceeded all expectations.", "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"},
    {"name": "Anita Desai", "role": "Restaurant Owner", "text": "Professional, creative, and delivered on time. Our restaurant design is absolutely stunning.", "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"},
]

PROCESS_STEPS = [
    {"step": "01", "title": "Discovery", "desc": "Understanding your vision"},
    {"step": "02", "title": "Concept", "desc": "Creating the blueprint"},
    {"step": "03", "title": "Design", "desc": "Detailed planning"},
    {"step": "04", "title": "Execute", "desc": "Bringing it to life"},
]


@app.context_processor
def inject_globals():
    return {"current_year": datetime.now().year, "site_name": "D NEST", "site_tagline": "Interior Design Studio"}


@app.after_request
def add_security_headers(response):
    response.headers.setdefault("X-Content-Type-Options", "nosniff")
    response.headers.setdefault("X-Frame-Options", "SAMEORIGIN")
    response.headers.setdefault("Referrer-Policy", "strict-origin-when-cross-origin")
    response.headers.setdefault("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
    return response


@app.route("/")
def home():
    return render_template("home.html", stats=STATS, services=SERVICES[:4], testimonials=TESTIMONIALS, featured_projects=[p for p in PORTFOLIO_ITEMS if p["featured"]][:6], page_title="D NEST Interior Design Studio — Transforming Spaces Into Dreams")


@app.route("/about")
def about():
    return render_template("about.html", team=TEAM, values=VALUES, page_title="About — D NEST Interior Design")


@app.route("/services")
def services():
    stats = [{"value": "50+", "label": "Projects Delivered"}, {"value": "40+", "label": "Happy Clients"}, {"value": "5+", "label": "Years Experience"}, {"value": "100%", "label": "Client Satisfaction"}]
    return render_template("services.html", services=SERVICES, process=PROCESS_STEPS, stats=stats, page_title="Services — D NEST Interior Design")


@app.route("/portfolio")
def portfolio():
    categories = [{"id": "all", "label": "All Projects"}, {"id": "residential", "label": "Residential"}, {"id": "commercial", "label": "Commercial"}, {"id": "minimal", "label": "Minimal"}, {"id": "luxury", "label": "Luxury"}]
    return render_template("portfolio.html", portfolio_items=PORTFOLIO_ITEMS, categories=categories, page_title="Portfolio — D NEST Interior Design")


@app.route("/listings")
def listings():
    return render_template("listings.html", listings=LISTINGS, page_title="Property Listings — D NEST Interior Design")


@app.route("/contact")
def contact():
    return render_template("contact.html", page_title="Contact — D NEST Interior Design")


@app.route("/consultation")
def consultation():
    return render_template("consultation.html", page_title="Book a Consultation — D NEST")


@app.route("/api/health")
def api_health():
    return jsonify({"status": "ok", "service": "dnest", "timestamp": datetime.utcnow().isoformat() + "Z"})


@app.route("/api/portfolio")
def api_portfolio():
    category = request.args.get("category", "all").lower()
    items = PORTFOLIO_ITEMS if category == "all" else [p for p in PORTFOLIO_ITEMS if p["category"] == category]
    return jsonify({"items": items, "total": len(items)})


@app.route("/api/portfolio/featured")
def api_featured_portfolio():
    featured = [p for p in PORTFOLIO_ITEMS if p.get("featured")]
    return jsonify({"items": featured, "total": len(featured)})


@app.route("/api/listings")
def api_listings():
    property_type = request.args.get("type", "all").lower()
    items = LISTINGS if property_type == "all" else [l for l in LISTINGS if l["type"].lower() == property_type]
    return jsonify({"items": items, "total": len(items)})


@app.route("/api/contact", methods=["POST"])
@require_json
def api_contact():
    try:
        data = request.get_json(silent=True) or {}
        name = str(data.get("name", "")).strip()
        email = str(data.get("email", "")).strip()
        phone = str(data.get("phone", "")).strip()
        message = str(data.get("message", "")).strip()
        if not name or len(name) > 100:
            return json_error("A valid name is required.")
        if not email or "@" not in email or len(email) > 200:
            return json_error("A valid email is required.")
        if not message or len(message) > 2000:
            return json_error("Message is required and must be under 2000 characters.")
        submitted = submit_contact(name, email, phone[:30], message)
        if not submitted:
            return json_error("Unable to save your inquiry right now.", 503)
        return jsonify({"success": True, "message": "Thank you. Your inquiry has been received."})
    except Exception:
        app.logger.exception("Contact submission failed")
        return json_error("Unable to process the inquiry right now.", 500)


@app.route("/api/consultation-request", methods=["POST"])
@require_json
def api_consultation_request():
    return jsonify({"success": True, "message": "Consultation request received. We will contact you shortly."})


@app.errorhandler(404)
def not_found(error):
    return render_template("404.html"), 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", "5000")), debug=os.environ.get("FLASK_DEBUG", "false").lower() == "true")
