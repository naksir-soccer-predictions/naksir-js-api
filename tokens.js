// lib/tokens.js

const tokens = new Map();

export function saveToken(token) {
  tokens.set(token, {
    createdAt: Date.now(),
    expiresIn: 3600000 // 1h u ms
  });
}

export function isValidToken(token) {
  if (!tokens.has(token)) return false;
  const { createdAt, expiresIn } = tokens.get(token);
  return Date.now() - createdAt < expiresIn;
}