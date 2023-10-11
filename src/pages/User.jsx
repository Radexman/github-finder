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
    twitter_username,
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
      <div className='mx-auto mb-36 w-full text-slate-100 lg:w-11/12'>
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
              <h1 className='card-title mb-3 text-2xl md:text-3xl'>
                {name}
                <div className='badge badge-success ml-2 mr-1'>{type}</div>
                {hireable && (
                  <div className='badge badge-info mx-1'>Hireable</div>
                )}
              </h1>
              <p>
                {bio
                  ? bio
                  : 'I’m a mysterious individual who has yet to fill out my bio. One thing’s for certain: I love writing code!'}
              </p>
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

            <div className='stats stats-vertical w-full rounded-lg bg-base-100 text-slate-100 shadow-md shadow-blue-900/90 md:stats-horizontal'>
              {location && (
                <div className='stat'>
                  <div className='text-md stat-title'>Location</div>
                  <div className='stat-value text-lg'>{location}</div>
                </div>
              )}
              {blog && (
                <div className='stat'>
                  <div className='text-md stat-title'>Website</div>
                  <div className='stat-value text-lg'>
                    <a href={blog} target='_blank' rel='noreferrer'>
                      {`${blog.slice(0, 30)}...`}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className='stat'>
                  <div className='text-md stat-title'>Twitter</div>
                  <div className='stat-value text-lg'>
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='stats stats-vertical mb-4 w-full rounded-lg bg-base-100 py-5 text-slate-100 shadow-md shadow-blue-900/90 lg:stats-horizontal'>
          <div className='stat'>
            <div className='stat-figure text-primary'>
              <FaUsers className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Followers</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {followers}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-primary'>
              <FaUserFriends className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Following</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {following}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-primary'>
              <FaCodepen className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Public Repos</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {public_repos}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-primary'>
              <FaStore className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Public Gists</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {public_gists}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
