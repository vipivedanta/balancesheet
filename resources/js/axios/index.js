import axios from 'axios';
import env from '../env';
const axiosObject = axios.create({
    baseURL : env.api_url,
    data : {},
    headers: {
        'Content-Type': 'application/json'
      }
});

export default axiosObject;