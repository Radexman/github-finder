import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';

const UserSearch = () => {
  const { searchUsers } = useContext(GithubContext);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      window.alert('Please enter somthing');
    } else {
      searchUsers(text);
    }
    setText('');
  };

  return (
    <div className='mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='input input-lg w-full bg-gray-200 pr-40 text-black'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='btn btn-primary btn-lg absolute right-0 top-0 w-36 rounded-l-none'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSearch;