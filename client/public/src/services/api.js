import axios from 'axios';

export async function createUser(username, email, password) {
  try {
    const response = await axios.post('/users', { username, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}
