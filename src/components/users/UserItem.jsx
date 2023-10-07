import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user }) => {
  const { login, avatar_url } = user;
  return (
    <div className='side card compact bg-base-100 text-slate-50 shadow-lg'>
      <div className='card-body flex-row items-center space-x-4'>
        <div>
          <div className='avatar'>
            <div className='h-14 w-14 rounded-full shadow'>
              <img src={avatar_url} alt={`${login}'s profile picture`} />
            </div>
          </div>
        </div>
        <div>
          <h3 className='card-title'>{login}</h3>
          <Link
            to={`/users/${login}`}
            className='text-base-content text-opacity-40'
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
