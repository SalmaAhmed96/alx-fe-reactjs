import { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUserData = async ({ username, location, minRepos }) => {
    setLoading(true);
    setError('');
    try {
      let query = username ? `${username}` : '';
      if (location) query += `+location:${location}`;
      if (minRepos) query += `+repos:>=${minRepos}`;

      const response = await axios.get(`https://api.github.com/search/users?q=${query}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
        },
      });

      if (response.data.items.length === 0) {
        setError("Looks like we can't find the user");
      } else {
        setUsers(response.data.items);
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError("Looks like we can't find the user");
      setUsers([]);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchUserData({ username, location, minRepos });
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-4 space-y-4">
        <input
          type="text"
          placeholder="Search GitHub user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-2 w-full">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="space-y-4">
        {users.map(user => (
          <div key={user.id} className="border p-4 rounded-md shadow-md">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mb-4" />
            <h2 className="text-xl font-bold">{user.login}</h2>
            <p>{user.location}</p>
            <p>Repositories: {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
