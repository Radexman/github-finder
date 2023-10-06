import { useState, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_GITHUB_URL}/users`,
      {
        method: 'GET',
        // headers: {
        //   Authorization: `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
        // },
      },
    );

    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };

  if (!isLoading) {
    return (
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;
