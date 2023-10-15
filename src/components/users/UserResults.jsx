import { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const UserResults = () => {
  const { users, isLoading, clearUsers } = useContext(GithubContext);
  const { users, isLoading, dispatch } = useContext(GithubContext);

  if (!isLoading) {
    return (
@@ -13,7 +13,7 @@ const UserResults = () => {
          <div className='mb-8 flex flex-col items-center justify-center gap-6 md:flex-row'>
            <h2 className='text-3xl font-bold text-slate-50'>Search Results</h2>
            <button
              onClick={clearUsers}
              onClick={() => dispatch({ type: 'CLEAR_USERS' })}
              className='btn btn-primary btn-sm w-full md:w-20'
            >
              Clear

            </button>
          </div>
        )}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;
