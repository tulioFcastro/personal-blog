const axios = require('axios');

const localAxios = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export default localAxios;
