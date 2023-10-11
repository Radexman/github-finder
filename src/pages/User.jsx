import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';

const User = () => {
  const { getUser, user, isLoading } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_name,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='mx-auto mb-36 w-full text-slate-100 lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-outline btn-sm'>
            Back to search
          </Link>
        </div>

        <div className='mb-8 grid grid-cols-1 md:grid-cols-3 md:gap-8 lg:grid-cols-3 xl:grid-cols-3'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='card image-full rounded-lg shadow-sm'>
              <figure>
                <img src={avatar_url} alt={`${avatar_url}'s profile picture`} />
              </figure>
              <div className='card-body justify-end'>
                <h2 className='card-title mb-0 text-slate-100'>{name}</h2>
                <p className='flex-grow-0 text-slate-100'>{login}</p>
              </div>
            </div>
          </div>

          <div className='col-span-2 text-slate-100'>
            <div className='mb-6'>
              <h1 className='card-title text-3xl'>
                {name}
                <div className='badge badge-success ml-2 mr-1'>{type}</div>
                {hireable && (
                  <div className='badge badge-info mx-1'>Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className='card-actions mt-4'>
                <a
                  href={html_url}
                  target='_blank'
                  className='btn btn-primary btn-sm'
                  rel='noreferrer'
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
