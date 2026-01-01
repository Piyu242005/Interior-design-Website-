# D NEST Interior Design Studio - Flask Backend

A Python Flask backend version of the D NEST Interior Design website, converted from the original React/TypeScript frontend.

## Features

- **Modern Flask Backend**: Clean, organized Python code with Flask routes
- **Jinja2 Templates**: Server-side rendered HTML templates
- **Tailwind CSS**: Same beautiful styling as the original
- **Responsive Design**: Mobile-first responsive layout
- **Dark Mode**: Beautiful dark theme UI
- **API Endpoints**: RESTful API for portfolio, listings, and contact form
- **Supabase Integration**: Optional database support (works without it)
- **WhatsApp Widget**: Quick chat functionality

## Project Structure

```
flask_app/
├── app.py                 # Main Flask application
├── supabase_client.py     # Supabase database client
├── requirements.txt       # Python dependencies
├── .env.example          # Environment variables template
├── static/
│   └── images/
│       └── Piyu.png      # Logo image
└── templates/
    ├── base.html         # Base template with navigation & footer
    ├── home.html         # Home page
    ├── about.html        # About page
    ├── services.html     # Services page
    ├── portfolio.html    # Portfolio page
    ├── listings.html     # Property listings page
    ├── contact.html      # Contact page
    ├── 404.html          # 404 error page
    └── 500.html          # 500 error page
```

## Quick Start

### Prerequisites
- Python 3.9 or higher
- pip (Python package manager)

### Installation

1. **Navigate to the Flask app directory**
   ```bash
   cd flask_app
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env
   # Edit .env with your Supabase credentials if needed
   ```

5. **Run the application**
   ```bash
   python app.py
   ```

6. **Open in browser**
   Visit 👉 [http://localhost:5000](http://localhost:5000)

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Home page |
| `/about` | GET | About page |
| `/services` | GET | Services page |
| `/portfolio` | GET | Portfolio page |
| `/listings` | GET | Property listings page |
| `/contact` | GET | Contact page |
| `/api/portfolio` | GET | Get portfolio items (filter by ?category=) |
| `/api/portfolio/featured` | GET | Get featured portfolio items |
| `/api/contact` | POST | Submit contact form |
| `/api/listings` | GET | Get property listings (filter by ?type=) |

## Pages

- **Home** - Landing page with hero, stats, services preview, and testimonials
- **About** - Company story, team, values, and philosophy
- **Services** - Full services list with process steps
- **Portfolio** - Filterable project gallery with modal view
- **Listings** - Property listings with filtering
- **Contact** - Contact form with info and map

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `FLASK_DEBUG` | Enable debug mode | No (default: True) |
| `SECRET_KEY` | Flask secret key | Yes (for production) |
| `SUPABASE_URL` | Supabase project URL | No |
| `SUPABASE_ANON_KEY` | Supabase anonymous key | No |

## Production Deployment

For production, use Gunicorn:

```bash
gunicorn -w 4 -b 0.0.0.0:8000 app:app
```

## Author

**Piyush Ramteke**  
📧 piyu.143247@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/piyush-ramteke-24-mylife)  
📍 Amravati, India

## License

© 2025 Piyush Ramteke. All rights reserved.
