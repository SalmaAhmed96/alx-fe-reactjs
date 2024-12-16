import { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ username, location, repos });
  };

  return (
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
        value={repos}
        onChange={(e) => setRepos(e.target.value)}
        className="border p-2 rounded-md w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-2 w-full">
        Search
      </button>
    </form>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
