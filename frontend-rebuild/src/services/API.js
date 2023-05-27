import axios from '../config/axios';

const APIService = {
  getImages() {
    return axios.get('/images');
  }
}

export default APIService;