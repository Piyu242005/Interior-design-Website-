<div align="center">

# 🏠 D NEST Interior Design Studio

**Transforming Spaces Into Dreams**

Premium interior design portfolio and consultation platform built with Flask, Tailwind CSS, and Supabase.

![Python](https://img.shields.io/badge/Python-3.9%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-3.x-000000?style=for-the-badge&logo=flask&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

## Overview

D NEST is a responsive digital presence for an interior design studio. It combines a premium visual portfolio with service discovery, property-style listings, consultation requests, contact capture, and JSON APIs.

## Key capabilities

- Premium responsive portfolio experience
- Residential and commercial service showcase
- Filterable project categories
- Property/listing presentation
- Consultation booking flow
- Contact form backed by Supabase
- REST-style JSON endpoints
- Production Gunicorn entrypoint
- Security headers and validated JSON APIs
- Environment-based configuration
- Mobile navigation and theme support

## Architecture

```text
Interior-design-Website-/
├── flask_app/
│   ├── app.py                 # Flask routes and APIs
│   ├── config.py              # Production configuration
│   ├── security.py            # Request/security helpers
│   ├── supabase_client.py     # Supabase integration
│   ├── requirements.txt       # Python dependencies
│   ├── Procfile               # Gunicorn process definition
│   ├── .env.example           # Environment template
│   ├── DEPLOYMENT.md          # Deployment guidance
│   ├── static/                # CSS, JS, images
│   └── templates/             # Jinja templates
├── supabase/                  # Database/project configuration
└── ScreenShot/                # Project screenshots
```

## Local development

```bash
git clone https://github.com/Piyu242005/Interior-design-Website-.git
cd Interior-design-Website-/flask_app
python -m venv .venv

# Windows
.venv\Scripts\activate

# macOS/Linux
# source .venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
python app.py
```

Open `http://localhost:5000`.

## Production

Use Gunicorn with the included `Procfile` and set:

```env
FLASK_ENV=production
FLASK_DEBUG=false
SECRET_KEY=<strong-random-secret>
SUPABASE_URL=<your-project-url>
SUPABASE_ANON_KEY=<your-anon-key>
```

Health endpoint:

```text
GET /api/health
```

## API endpoints

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/health` | GET | Service health check |
| `/api/portfolio` | GET | Portfolio items with optional category filter |
| `/api/portfolio/featured` | GET | Featured projects |
| `/api/listings` | GET | Property listings with optional type filter |
| `/api/contact` | POST | Validated contact submission |
| `/api/consultation-request` | POST | Consultation request intake |

## Portfolio sections

**Home → About → Services → Portfolio → Listings → Consultation → Contact**

The project also includes screenshots and Supabase integration for persistent contact/portfolio data.

## Roadmap

- Admin dashboard for content management
- Real consultation appointment availability
- Payment gateway integration with server-side verification
- Portfolio image storage and CDN optimization
- Automated tests and CI validation
- Structured data / Open Graph metadata
- Analytics dashboard for inquiries and conversions

## Author

**Piyush Ramteke**

[GitHub](https://github.com/Piyu242005) · [LinkedIn](https://www.linkedin.com/in/piyu24)

## License

MIT License.
