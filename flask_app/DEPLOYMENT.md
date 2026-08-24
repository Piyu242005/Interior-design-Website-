# D NEST Production Deployment

## Runtime

- Start with Gunicorn using the included `Procfile`.
- Set `FLASK_ENV=production` and `FLASK_DEBUG=false`.
- Set a strong random `SECRET_KEY`.
- Configure `SUPABASE_URL` and `SUPABASE_ANON_KEY` when persistence is enabled.

## Health check

`GET /api/health` should return HTTP 200 and a JSON status of `ok`.

## Notes

The application is a Flask server application. Use a Python-compatible hosting provider for the full backend. For Vercel, deploy the frontend separately or use a supported Python serverless entrypoint after validating the runtime.
