import axios from 'axios';

export default axios.create({
  headers: {
    'Content-Type': 'application/json',
    'User-Key': import.meta.env.VITE_APP_SECRET_KEY
  }
})