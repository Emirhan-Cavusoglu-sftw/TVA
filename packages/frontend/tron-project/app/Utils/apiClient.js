// utils/apiClient.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://app.dynamic.xyz/api/v0',
  timeout: 10000, // İsteğin zaman aşımı süresi (10 saniye)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;