import axios from 'axios';

export default axios.create({
  baseURL: process.env.PREACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    'User-Key': process.env.PREACT_APP_SECRET_KEY
  }
})