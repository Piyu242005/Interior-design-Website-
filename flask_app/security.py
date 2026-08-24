"""Small security helpers used by the Flask application."""
from functools import wraps
from flask import jsonify, request


def json_error(message, status=400):
    return jsonify({"success": False, "error": message}), status


def require_json(f):
    """Require a JSON request body for JSON API endpoints."""
    @wraps(f)
    def wrapper(*args, **kwargs):
        if not request.is_json:
            return json_error("Content-Type must be application/json", 415)
        return f(*args, **kwargs)
    return wrapper
