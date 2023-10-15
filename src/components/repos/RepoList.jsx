import PropTypes from 'prop-types';

const RepoList = ({ repos }) => {
  return (
    <div className='card rounded-lg bg-base-100 shadow-lg'>
      <div className='card-body'>
        <h2 className='card-title mx-auto my-4 text-3xl font-bold'>
          Latest Repositories
        </h2>
      </div>
      {repos.map((repo, index) => (
        <h3 key={index}>{repo.name}</h3>
      ))}
    </div>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
