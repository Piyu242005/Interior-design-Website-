"""Build the Flask-rendered D NEST site as static HTML for GitHub Pages."""
from pathlib import Path
import os
import shutil

from flask_app.app import app

ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "_site"
BASE_PATH = os.environ.get("PAGES_BASE_PATH", "/Interior-design-Website-")

# Clean previous build.
if OUTPUT.exists():
    shutil.rmtree(OUTPUT)
OUTPUT.mkdir(parents=True)

routes = [
    ("/", "index.html"),
    ("/about", "about/index.html"),
    ("/services", "services/index.html"),
    ("/portfolio", "portfolio/index.html"),
    ("/listings", "listings/index.html"),
    ("/consultation", "consultation/index.html"),
    ("/contact", "contact/index.html"),
]

# SCRIPT_NAME makes Flask's url_for() generate the repository Pages prefix.
environ_base = {"SCRIPT_NAME": BASE_PATH}
with app.test_request_context("/", base_url=f"https://Piyu242005.github.io{BASE_PATH}", environ_base=environ_base):
    for route, output_name in routes:
        with app.test_request_context(route, base_url=f"https://Piyu242005.github.io{BASE_PATH}", environ_base=environ_base):
            response = app.full_dispatch_request()
            html = response.get_data(as_text=True)
        destination = OUTPUT / output_name
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_text(html, encoding="utf-8")

# Copy static assets exactly as used by Flask.
static_source = ROOT / "flask_app" / "static"
if static_source.exists():
    shutil.copytree(static_source, OUTPUT / "static")

# GitHub Pages needs a 404 page at the site root.
error_template = ROOT / "flask_app" / "templates" / "404.html"
if error_template.exists():
    with app.test_request_context("/404", base_url=f"https://Piyu242005.github.io{BASE_PATH}", environ_base=environ_base):
        response = app.full_dispatch_request()
        (OUTPUT / "404.html").write_text(response.get_data(as_text=True), encoding="utf-8")

# Prevent Jekyll from changing generated files.
(OUTPUT / ".nojekyll").write_text("", encoding="utf-8")
print(f"Built static site: {OUTPUT}")
