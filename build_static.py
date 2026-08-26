"""Build the Flask-rendered D NEST site as static HTML for GitHub Pages."""
from pathlib import Path
import os
import shutil
import sys

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT / "flask_app"))
from app import app  # noqa: E402

OUTPUT = ROOT / "_site"
BASE_PATH = os.environ.get("PAGES_BASE_PATH", "/Interior-design-Website-")

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

environ_base = {"SCRIPT_NAME": BASE_PATH}
base_url = f"https://Piyu242005.github.io{BASE_PATH}"

for route, output_name in routes:
    with app.test_request_context(route, base_url=base_url, environ_base=environ_base):
        response = app.full_dispatch_request()
        html = response.get_data(as_text=True)
    destination = OUTPUT / output_name
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(html, encoding="utf-8")

static_source = ROOT / "flask_app" / "static"
if static_source.exists():
    shutil.copytree(static_source, OUTPUT / "static")

with app.test_request_context("/404", base_url=base_url, environ_base=environ_base):
    response = app.full_dispatch_request()
    (OUTPUT / "404.html").write_text(response.get_data(as_text=True), encoding="utf-8")

(OUTPUT / ".nojekyll").write_text("", encoding="utf-8")
print(f"Built static site: {OUTPUT}")
