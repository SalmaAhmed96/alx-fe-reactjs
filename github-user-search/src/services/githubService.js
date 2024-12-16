import axios from 'axios';

const API_URL = 'https://api.github.com/search/users';
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchUserData = async ({ username, location, repos }) => {
  try {
    let query = username ? `user:${username}` : '';
    if (location) query += ` location:${location}`;
    if (repos) query += ` repos:>=${repos}`;

    const response = await axios.get(`${API_URL}?q=${query}`, {
      headers: {
        Authorization: `token ${API_KEY}`,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
