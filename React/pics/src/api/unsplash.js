import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Mct6ugIjIwjqnoGV1a_dSvkG5ZDgLcmxDXt32xjQ4R0',
  },
});
