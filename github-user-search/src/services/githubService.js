import axios from 'axios';

const API_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
