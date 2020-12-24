import axios from 'axios';

export default axios.create({
  baseURL: process.env.PREACT_APP_NODE_ENV === 'development' ? process.env.PREACT_APP_DEV_SERVER_URL : process.env.PREACT_APP_PROD_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    'User-Key': process.env.PREACT_APP_SECRET_KEY
  }
})