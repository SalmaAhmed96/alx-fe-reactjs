import { useState } from 'react';
import Search from './components/Search';
import UserCard from './components/UserCard';
import { fetchUserData } from './services/githubService';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError('');
    try {
      const usersData = await fetchUserData(searchParams);
      setUsers(usersData);
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError("Looks like we can't find any users matching your criteria");
      setUsers([]);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="space-y-4">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
