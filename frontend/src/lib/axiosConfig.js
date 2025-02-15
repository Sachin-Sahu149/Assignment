import axios from 'axios'


const instance = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL:"https://assignment-jr49.onrender.com",
    withCredentials:true
  });

  export default instance;