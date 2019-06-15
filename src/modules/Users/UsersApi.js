import axios from 'axios';

const baseURL = 'https://api.github.com';

const api = axios.create({
  baseURL,
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }
});

export function getUsers(fromId = '1') {
  return api.get(`/users?since=${fromId}`);
}
