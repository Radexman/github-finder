import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const RepoList = ({ repos }) => {
  return (
    <div className='card rounded-lg bg-base-100 shadow-lg'>
      <div className='card-body'>
        <h2 className='card-title my-4 -ml-6 text-3xl font-bold'>
          Latest Repositories
        </h2>
      </div>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
