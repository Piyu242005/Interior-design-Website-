"""Application configuration helpers for D NEST."""
import os


def apply_production_config(app):
    """Apply safe defaults while allowing environment overrides."""
    is_production = os.environ.get("FLASK_ENV", "production").lower() == "production"
    app.config.update(
        DEBUG=os.environ.get("FLASK_DEBUG", "false").lower() == "true",
        TESTING=False,
        SESSION_COOKIE_HTTPONLY=True,
        SESSION_COOKIE_SECURE=is_production,
        SESSION_COOKIE_SAMESITE="Lax",
        MAX_CONTENT_LENGTH=2 * 1024 * 1024,
    )
    return app
