"""
D NEST Interior Design Studio - Flask Application
Main application file with routes and API endpoints
"""

from flask import Flask, render_template, request, jsonify
import os
from datetime import datetime
from supabase_client import supabase, get_portfolio_items, get_featured_items, submit_contact

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'dnest-secret-key-change-in-production')

# Configuration
app.config['DEBUG'] = os.environ.get('FLASK_DEBUG', 'True').lower() == 'true'

# Data for pages
STATS = [
    {'value': '150+', 'label': 'Projects Completed', 'icon': 'building2'},
    {'value': '200+', 'label': 'Happy Clients', 'icon': 'users'},
    {'value': '25+', 'label': 'Design Awards', 'icon': 'award'},
    {'value': '15+', 'label': 'Years Experience', 'icon': 'star'},
]

SERVICES = [
    {
        'icon': 'home',
        'title': 'Residential Design',
        'description': 'Transform your house into a dream home with personalized interior solutions that reflect your lifestyle and personality.',
        'features': ['Custom home design', 'Space optimization', 'Furniture curation', 'Color consultation'],
        'gradient': 'from-amber-500 to-orange-600',
        'image': 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        'icon': 'building2',
        'title': 'Commercial Spaces',
        'description': 'Create inspiring workspaces that boost productivity and leave lasting impressions on clients and employees alike.',
        'features': ['Office planning', 'Retail design', 'Brand integration', 'Ergonomic solutions'],
        'gradient': 'from-blue-500 to-indigo-600',
        'image': 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        'icon': 'palette',
        'title': '3D Visualization',
        'description': 'Experience your space before it exists with photorealistic 3D renders and immersive virtual walkthroughs.',
        'features': ['3D rendering', 'Virtual tours', 'Material preview', 'Design iterations'],
        'gradient': 'from-purple-500 to-pink-600',
        'image': 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        'icon': 'lightbulb',
        'title': 'Lighting Design',
        'description': 'Illuminate your spaces with strategic lighting that enhances ambiance and highlights architectural features.',
        'features': ['Ambient lighting', 'Task lighting', 'Accent lighting', 'Smart controls'],
        'gradient': 'from-yellow-500 to-amber-600',
        'image': 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        'icon': 'sofa',
        'title': 'Furniture Design',
        'description': 'Custom furniture pieces designed exclusively for your space, blending form and function seamlessly.',
        'features': ['Custom pieces', 'Material selection', 'Ergonomic design', 'Artisan crafting'],
        'gradient': 'from-emerald-500 to-teal-600',
        'image': 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        'icon': 'tree',
        'title': 'Landscape Integration',
        'description': 'Seamlessly blend indoor and outdoor spaces with biophilic design principles and natural elements.',
        'features': ['Indoor gardens', 'Natural materials', 'Outdoor living', 'Sustainable design'],
        'gradient': 'from-green-500 to-emerald-600',
        'image': 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
]

TEAM = [
    {
        'name': 'Piyush Ramteke',
        'role': 'Founder & Lead Developer',
        'image': 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        'bio': 'Piyush specializes in data-driven solutions, clean design, and efficient development. He focuses on building practical, user-friendly, and scalable projects with attention to detail.',
        'icon': 'code'
    },
    {
        'name': 'Nikhil Sonone',
        'role': 'Co-Founder & Technical Associate',
        'image': 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        'bio': 'Nikhil contributes to development, problem-solving, and implementation support, ensuring projects are executed smoothly and meet performance expectations.',
        'icon': 'wrench'
    }
]

VALUES = [
    {
        'icon': 'heart',
        'title': 'Quality',
        'description': 'We are committed to delivering high-quality work with attention to every detail, ensuring meaningful and effective results.'
    },
    {
        'icon': 'lightbulb',
        'title': 'Creativity',
        'description': 'We combine creative ideas with practical solutions to create designs that are both attractive and functional for real users.'
    },
    {
        'icon': 'award',
        'title': 'Continuous Improvement',
        'description': 'We believe in constantly learning and improving, staying updated with the latest trends and technologies to deliver the best.'
    }
]

PORTFOLIO_ITEMS = [
    {
        'id': '1',
        'title': 'Modern Scandinavian Living',
        'category': 'residential',
        'description': 'A serene living space featuring clean lines, natural materials, and a calming neutral palette that embodies Scandinavian design principles.',
        'image_url': 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'featured': True,
        'location': 'Mumbai, India',
        'year': '2024'
    },
    {
        'id': '2',
        'title': 'Executive Office Suite',
        'category': 'commercial',
        'description': 'Sophisticated workspace design combining functionality with elegance, featuring custom furniture and ambient lighting.',
        'image_url': 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'featured': True,
        'location': 'Pune, India',
        'year': '2024'
    },
    {
        'id': '3',
        'title': 'Minimalist Zen Bedroom',
        'category': 'minimal',
        'description': 'A peaceful retreat with Japanese-inspired minimalism, featuring tatami elements and natural wood accents.',
        'image_url': 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'featured': True,
        'location': 'Bangalore, India',
        'year': '2024'
    },
    {
        'id': '4',
        'title': 'Luxe Marble Kitchen',
        'category': 'luxury',
        'description': 'Opulent kitchen design with Italian marble countertops, gold accents, and state-of-the-art appliances.',
        'image_url': 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'featured': True,
        'location': 'Delhi, India',
        'year': '2024'
    },
    {
        'id': '5',
        'title': 'Contemporary Loft Space',
        'category': 'residential',
        'description': 'Industrial-chic loft featuring exposed brick, metal accents, and an open floor plan perfect for modern living.',
        'image_url': 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'featured': False,
        'location': 'Hyderabad, India',
        'year': '2023'
    },
    {
        'id': '6',
        'title': 'Boutique Hotel Lobby',
        'category': 'commercial',
        'description': 'Welcoming hotel entrance with plush seating, artistic lighting fixtures, and a blend of modern and classic elements.',
        'image_url': 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'featured': False,
        'location': 'Goa, India',
        'year': '2023'
    }
]

LISTINGS = [
    {
        'id': 1,
        'title': 'Modern Luxury Apartment',
        'location': 'Bandra West, Mumbai',
        'price': '₹2.5 Cr',
        'bedrooms': 3,
        'bathrooms': 2,
        'area': '1,850 sq ft',
        'image': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'type': 'Apartment',
    },
    {
        'id': 2,
        'title': 'Contemporary Villa',
        'location': 'Juhu, Mumbai',
        'price': '₹8.5 Cr',
        'bedrooms': 5,
        'bathrooms': 4,
        'area': '4,200 sq ft',
        'image': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
        'type': 'Villa',
    },
    {
        'id': 3,
        'title': 'Penthouse Suite',
        'location': 'Worli, Mumbai',
        'price': '₹12 Cr',
        'bedrooms': 4,
        'bathrooms': 3,
        'area': '3,500 sq ft',
        'image': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        'type': 'Penthouse',
    },
    {
        'id': 4,
        'title': 'Studio Apartment',
        'location': 'Andheri West, Mumbai',
        'price': '₹85 L',
        'bedrooms': 1,
        'bathrooms': 1,
        'area': '650 sq ft',
        'image': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
        'type': 'Studio',
    },
    {
        'id': 5,
        'title': 'Duplex Home',
        'location': 'Powai, Mumbai',
        'price': '₹3.2 Cr',
        'bedrooms': 4,
        'bathrooms': 3,
        'area': '2,800 sq ft',
        'image': 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop',
        'type': 'Duplex',
    },
    {
        'id': 6,
        'title': 'Sea View Apartment',
        'location': 'Marine Drive, Mumbai',
        'price': '₹6.5 Cr',
        'bedrooms': 3,
        'bathrooms': 2,
        'area': '2,200 sq ft',
        'image': 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
        'type': 'Apartment',
    },
]

TESTIMONIALS = [
    {
        'name': 'Priya Sharma',
        'role': 'Homeowner, Mumbai',
        'text': 'D NEST transformed our apartment into a dream home. Every detail was thoughtfully crafted.',
        'image': 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
        'name': 'Rahul Mehta',
        'role': 'CEO, TechStart',
        'text': 'Our office space is now inspiring and productive. The team exceeded all expectations.',
        'image': 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
        'name': 'Anita Desai',
        'role': 'Restaurant Owner',
        'text': 'Professional, creative, and delivered on time. Our restaurant design is absolutely stunning.',
        'image': 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
]

PROCESS_STEPS = [
    {'step': '01', 'title': 'Discovery', 'desc': 'Understanding your vision'},
    {'step': '02', 'title': 'Concept', 'desc': 'Creating the blueprint'},
    {'step': '03', 'title': 'Design', 'desc': 'Detailed planning'},
    {'step': '04', 'title': 'Execute', 'desc': 'Bringing it to life'}
]


# Template context processor
@app.context_processor
def inject_globals():
    return {
        'current_year': datetime.now().year,
        'site_name': 'D NEST',
        'site_tagline': 'Interior Design Studio'
    }


# Routes
@app.route('/')
def home():
    """Home page with hero, stats, services preview, and testimonials"""
    featured_projects = [p for p in PORTFOLIO_ITEMS if p.get('featured', False)][:6]
    return render_template('home.html',
                           stats=STATS,
                           services=SERVICES[:4],
                           testimonials=TESTIMONIALS,
                           featured_projects=featured_projects,
                           page_title='D NEST Interior Design Studio - Transforming Spaces Into Dreams')


@app.route('/about')
def about():
    """About page with team, values, and story"""
    return render_template('about.html',
                           team=TEAM,
                           values=VALUES,
                           page_title='About - D NEST Interior Design')


@app.route('/services')
def services():
    """Services page with all services and process"""
    stats = [
        {'value': '50+', 'label': 'Projects Delivered'},
        {'value': '40+', 'label': 'Happy Clients'},
        {'value': '5+', 'label': 'Years Experience'},
        {'value': '100%', 'label': 'Client Satisfaction'}
    ]
    return render_template('services.html',
                           services=SERVICES,
                           process=PROCESS_STEPS,
                           stats=stats,
                           page_title='Services - D NEST Interior Design')


@app.route('/portfolio')
def portfolio():
    """Portfolio page with filterable projects"""
    categories = [
        {'id': 'all', 'label': 'All Projects'},
        {'id': 'residential', 'label': 'Residential'},
        {'id': 'commercial', 'label': 'Commercial'},
        {'id': 'minimal', 'label': 'Minimal'},
        {'id': 'luxury', 'label': 'Luxury'}
    ]
    return render_template('portfolio.html',
                           portfolio_items=PORTFOLIO_ITEMS,
                           categories=categories,
                           page_title='Portfolio - D NEST Interior Design')


@app.route('/listings')
def listings():
    """Property listings page"""
    return render_template('listings.html',
                           listings=LISTINGS,
                           page_title='Property Listings - D NEST Interior Design')


@app.route('/contact')
def contact():
    """Contact page with form and info"""
    return render_template('contact.html',
                           page_title='Contact - D NEST Interior Design')


# API Endpoints
@app.route('/api/portfolio')
def api_portfolio():
    """API endpoint for portfolio items"""
    category = request.args.get('category', 'all')
    if category == 'all':
        items = PORTFOLIO_ITEMS
    else:
        items = [p for p in PORTFOLIO_ITEMS if p['category'] == category]
    return jsonify({'items': items, 'total': len(items)})


@app.route('/api/portfolio/featured')
def api_featured_portfolio():
    """API endpoint for featured portfolio items"""
    featured = [p for p in PORTFOLIO_ITEMS if p.get('featured', False)]
    return jsonify({'items': featured, 'total': len(featured)})


@app.route('/api/contact', methods=['POST'])
def api_contact():
    """API endpoint for contact form submission"""
    try:
        data = request.get_json()
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        phone = data.get('phone', '').strip()
        message = data.get('message', '').strip()
        
        # Validation
        if not name or not email or not message:
            return jsonify({'success': False, 'error': 'Name, email, and message are required'}), 400
        
        # Try to submit to Supabase if configured
        result = submit_contact(name, email, phone, message)
        
        if result:
            return jsonify({'success': True, 'message': 'Thank you for your message! We will get back to you soon.'})
        else:
            # Even if Supabase fails, acknowledge receipt
            return jsonify({'success': True, 'message': 'Thank you for your message! We will get back to you soon.'})
            
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/api/listings')
def api_listings():
    """API endpoint for property listings"""
    property_type = request.args.get('type', 'all')
    if property_type == 'all':
        items = LISTINGS
    else:
        items = [l for l in LISTINGS if l['type'].lower() == property_type.lower()]
    return jsonify({'items': items, 'total': len(items)})


# Error handlers
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html', page_title='Page Not Found - D NEST'), 404


@app.errorhandler(500)
def internal_error(e):
    return render_template('500.html', page_title='Server Error - D NEST'), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
