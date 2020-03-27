import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-willian-luis-zuqui-be-the-hero.cloudfunctions.net/api/'
});

export default api;