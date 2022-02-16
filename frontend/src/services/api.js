import axios from 'axios'; 

export function authApi() {
  const api = axios.create({
    baseURL: 'http://localhost:8000/api/auth',
});

return api;
}

export function authApiWithToken() {
  const api = axios.create({
    baseURL: 'http://localhost:8000/api/auth',
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('money_api_token')}`,
    },
  });
  
  return api;
}

export function transactionApi() {
  const api = axios.create({
    baseURL: 'http://localhost:8000/api/transaction',
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('money_api_token')}`,
    },
  });

  return api;
}

