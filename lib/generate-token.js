// api/generate-token.js
import { saveToken } from '../lib/tokens.js'
import crypto from 'crypto'

export default function handler(req, res) {
  // Generišemo siguran random token
  const token = crypto.randomBytes(16).toString('hex')

  // Čuvamo ga u memoriju sa vremenskim istekom
  saveToken(token)

  // Vraćamo token kao JSON
  res.status(200).json({ token })
}