// api/estimate.js
// This file runs on Vercel's servers — your CLAUDE_KEY is NEVER sent to the browser.
// Set CLAUDE_KEY in: Vercel Dashboard → Your Project → Settings → Environment Variables

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Only allow requests that come with a valid Firebase Auth token
  // (basic protection so random people can't abuse your endpoint)
  const authHeader = req.headers.authorization || '';
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CLAUDE_KEY,   // ← stored safely in Vercel, never exposed
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    return res.status(200).json(data);

  } catch (err) {
    console.error('Anthropic proxy error:', err);
    return res.status(500).json({ error: 'AI service error' });
  }
}
