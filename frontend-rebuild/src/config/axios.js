import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    'User-Key': import.meta.env.VITE_APP_SECRET_KEY
  }
})