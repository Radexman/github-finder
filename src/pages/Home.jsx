import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';

const Home = () => {
  return (
    <>
      <div className='space-y-10 pb-20 text-center text-slate-50 md:text-left'>
        <h1 className='text-6xl font-bold'>Github Finder</h1>
        <p className='max-w-xl text-2xl font-light'>
          Search and browse Github users, see their private profiles, account
          statistics, list of recent repositories and followers.
        </p>
        <UserSearch />
      </div>
      <UserResults />
    </>
  );
};

export default Home;
