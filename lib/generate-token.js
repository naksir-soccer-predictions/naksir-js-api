// api/generate-token.js
import { saveToken } from '../lib/tokens.js';
import crypto from 'crypto';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const token = crypto.randomBytes(16).toString('hex');
  saveToken(token);

  return res.status(200).json({ token });
}
