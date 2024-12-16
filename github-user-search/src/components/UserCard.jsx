import PropTypes from 'prop-types';

const UserCard = ({ user }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mb-4" />
      <h2 className="text-xl font-bold">{user.login}</h2>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        View Profile
      </a>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    bio: PropTypes.string,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
