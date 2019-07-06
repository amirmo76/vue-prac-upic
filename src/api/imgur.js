const CLIENT_ID = '5dfa4cbe866d943';
const ROOT_URL = 'https://api.imgur.com';

import qs from 'qs';
import axios from 'axios';

export default {
  login() {
    const query_string = {
      client_id: CLIENT_ID,
      response_type: 'token'
    }
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(query_string)}`
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  uploadImages(token, images) {
    const promises = Array.from(images).map(img => {
      const formData = new FormData();
      formData.append('image', img);
      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    });

    return Promise.all(promises);
  }
}