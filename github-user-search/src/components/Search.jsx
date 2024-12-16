import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError("Looks like we can't find the user");
      setUser(null);
    }
    setLoading(false);
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
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-2 w-full">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div className="border p-4 rounded-md shadow-md">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mb-4" />
          <h2 className="text-xl font-bold">{user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
