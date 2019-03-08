import axios from 'axios';
import env from '../env';
const axios = axios.create({
    baseUrl : env.api_url
});