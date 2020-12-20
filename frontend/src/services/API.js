import axios from '../config/axios';

const config = {
  onUploadProgress: function (progressEvent) {
    console.log('Upload progress');
  },
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}

export default {
  uploadImages: (data) => {
    const headers = {
      'Content-Type': 'multipart/form-data'
    };
    return axios.post('/upload', data, { headers });
  },
  getImages: () => {
    return axios.get('/images');
  },
  deleteImage: (image) => {
    return axios.delete(`/images/${image}`)
  }
};