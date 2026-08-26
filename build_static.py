"""Build the Flask-rendered D NEST site as static HTML for GitHub Pages."""
from pathlib import Path
import json
import os
import shutil
import sys

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT / "flask_app"))
from app import app  # noqa: E402

OUTPUT = ROOT / "_site"
BASE_PATH = os.environ.get("PAGES_BASE_PATH", "/dnest-interior-design")
SUPABASE_URL = os.environ.get("SUPABASE_URL", "")
SUPABASE_ANON_KEY = os.environ.get("SUPABASE_ANON_KEY", "")

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

    bridge = (
        "<script>window.DNEST_SUPABASE="
        + json.dumps({"url": SUPABASE_URL.rstrip("/"), "anonKey": SUPABASE_ANON_KEY})
        + ";</script>\n"
        + f'<script src="{BASE_PATH}/static/js/github-pages.js"></script>\n'
    )
    html = html.replace("</body>", bridge + "</body>")

    destination = OUTPUT / output_name
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(html, encoding="utf-8")

static_source = ROOT / "flask_app" / "static"
if static_source.exists():
    shutil.copytree(static_source, OUTPUT / "static")

# The exact founder portraits live in ScreenShot/. Copy them into the static
# build so GitHub Pages can serve the same real photos used by the team data.
team_images = ["1749496203858~3.jpg", "niku.jpeg"]
source_images = ROOT / "ScreenShot"
team_output = OUTPUT / "static" / "images"
team_output.mkdir(parents=True, exist_ok=True)
for image_name in team_images:
    source = source_images / image_name
    if source.exists():
        shutil.copy2(source, team_output / image_name)

with app.test_request_context("/404", base_url=base_url, environ_base=environ_base):
    response = app.full_dispatch_request()
    error_html = response.get_data(as_text=True)
    error_html = error_html.replace("</body>", bridge + "</body>")
    (OUTPUT / "404.html").write_text(error_html, encoding="utf-8")

(OUTPUT / ".nojekyll").write_text("", encoding="utf-8")
print(f"Built static site: {OUTPUT}")
