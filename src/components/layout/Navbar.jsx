import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar mb-12 bg-neutral text-slate-100 shadow-lg'>
      <div className='container mx-auto'>
        <div className='mx-2 flex-none px-2'>
          <FaGithub className='inline pr-3 text-4xl' />
          <Link to='/' className='align-middle text-lg font-bold'>
            {title}
          </Link>
        </div>
        <div className='mx-2 flex-1 px-2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-sm rounded-sm'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-sm'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
