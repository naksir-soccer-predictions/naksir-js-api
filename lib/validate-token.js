// api/validate-token.js
import { isValidToken } from '../tokens.js';

export default function handler(req, res) {
  const { token } = req.query;

  if (!token || !isValidToken(token)) {
    return res.status(401).json({ valid: false });
  }

  return res.status(200).json({ valid: true });
}