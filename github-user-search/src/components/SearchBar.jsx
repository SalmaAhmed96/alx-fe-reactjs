import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        placeholder="Search GitHub user"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded-md w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
