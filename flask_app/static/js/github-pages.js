/* GitHub Pages compatibility layer.
 * The Flask API is not available on GitHub Pages. When Supabase public
 * configuration is provided at build time, form submissions are sent
 * directly to Supabase instead of /api/* while the existing UI stays intact.
 */
(function () {
  const originalFetch = window.fetch.bind(window);
  const cfg = window.DNEST_SUPABASE || {};

  if (!cfg.url || !cfg.anonKey) return;

  async function supabaseInsert(table, payload) {
    return originalFetch(`${cfg.url}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        apikey: cfg.anonKey,
        Authorization: `Bearer ${cfg.anonKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal'
      },
      body: JSON.stringify(payload)
    });
  }

  window.fetch = function (input, init) {
    const url = typeof input === 'string' ? input : input && input.url;
    if (url && url.endsWith('/api/contact') && init && init.method === 'POST') {
      try {
        const payload = JSON.parse(init.body || '{}');
        return supabaseInsert('contact_submissions', payload).then(function (response) {
          return {
            ok: response.ok,
            status: response.status,
            json: async function () {
              if (response.ok) return { success: true, message: 'Thank you. Your inquiry has been received.' };
              return { success: false, error: 'Unable to save your inquiry right now.' };
            }
          };
        });
      } catch (_) {
        return Promise.reject(new Error('Invalid contact form data'));
      }
    }
    return originalFetch(input, init);
  };
})();
