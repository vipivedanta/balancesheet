import axios from 'axios';
import env from '../env';
import store from '../store';

const axiosObject = axios.create({
    baseURL : env.api_url,
    data : {},
    headers: {
        'Content-Type': 'application/json'
      }
});

axiosObject.interceptors.request.use(config => {
  store.dispatch('updateLoader',true);
  return config
})

// before a response is returned stop loader
axiosObject.interceptors.response.use( response => {
  store.dispatch('updateLoader',false);
  return response
})

export default axiosObject;