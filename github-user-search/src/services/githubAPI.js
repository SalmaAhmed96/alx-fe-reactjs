import axios from 'axios';

const API_URL = 'https://api.github.com';
const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

const getUser = async (username) => {
  const response = await axios.get(`${API_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${API_KEY}`,
    },
  });
  return response.data;
};

export default getUser;
