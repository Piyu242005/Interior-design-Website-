# 🏠 D NEST Interior Design Studio

> *Transforming Spaces Into Dreams*
--
# Piyu – Interior Design & Consulting Website

A modern, responsive, and visually rich portfolio website designed for interior design services and professional consulting.  
The project highlights services, portfolio listings, client testimonials, and UPI-based consultation payments.

A modern interior design website built with **Python**, **Flask**, **Jinja2**, and **Tailwind CSS**.
--

## 🌐 Website Sections Overview

### 🏠 Home
![Home](ScreenShot/Piyu%20latest.jpeg)


### Services
Showcases core interior design services with a premium UI and modern layout.

![Services](ScreenShot/Services.jpeg)

---

### 👤 About
Brief introduction about the creator, vision, and design philosophy.

![About](ScreenShot/about.jpeg)

---

### 🧾 Listings
Displays categorized interior projects and offerings.

![Listings](ScreenShot/Listings.jpeg)

---

### 🖼 Portfolio
Highlights featured projects with images, locations, and completion year.

![Portfolio](ScreenShot/portfolio.jpeg)

---

### 💬 Consultation & Appointment
Allows users to book consultations and pay the appointment fee using UPI Payment
Secure and simple UPI QR-based payment system for consultation or appointment booking.
![Consult](ScreenShot/consult.jpeg)

---

### 📞 Contact
Contact details and inquiry section for easy communication.

![Contact](ScreenShot/contact.jpeg)

---

## 🚀 Quick Start

### Prerequisites
- [Python](https://python.org/) (v3.9 or higher)
- [pip](https://pip.pypa.io/) (Python package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Piyu242005/Interior-design-Website-.git
   cd Interior-design-Website-
   ```

2. **Navigate to Flask app**
   ```bash
   cd flask_app
   ```

3. **Create virtual environment** (recommended)
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

4. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

5. **Run the application**
   ```bash
   python app.py
   ```

6. **Open in browser**  
   Visit 👉 [http://localhost:5000](http://localhost:5000)

---

## 📁 Project Structure

```
flask_app/
├── app.py                 # Main Flask application
├── supabase_client.py     # Database client (optional)
├── requirements.txt       # Python dependencies
├── static/
│   └── images/           # Static assets
└── templates/
    ├── base.html         # Base template
    ├── home.html         # Home page
    ├── about.html        # About page
    ├── services.html     # Services page
    ├── portfolio.html    # Portfolio page
    ├── listings.html     # Listings page
    └── contact.html      # Contact page
```

---

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `python app.py` | Start development server |
| `pip install -r requirements.txt` | Install dependencies |
| `gunicorn -w 4 app:app` | Production server |

---

## ✨ Features

- 🎨 Modern, responsive design
- 📱 Mobile-friendly
- ⚡ Fast with Flask
- 🐍 Python backend
- 💅 Tailwind CSS styling
- 💬 WhatsApp chat widget
- 📝 Contact form with API
- 🖼️ Filterable portfolio gallery

---

## 📄 Pages

- **Home** - Landing page with hero section
- **About** - Company information & team
- **Services** - Interior design services
- **Portfolio** - Project showcase with filtering
- **Listings** - Property listings
- **Contact** - Contact form & info

---

## 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/portfolio` | GET | Get portfolio items |
| `/api/portfolio/featured` | GET | Get featured items |
| `/api/contact` | POST | Submit contact form |
| `/api/listings` | GET | Get property listings |

---

## 👤 Author

**Piyush Ramteke**  
📧 piyu.143247@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/piyush-ramteke-24-mylife)  
📍 Amravati, India

---

## 📜 License

This project is open source and available under the MIT License.
