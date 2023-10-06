import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;
// const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      method: 'GET',
      //   headers: {
      //     Authorization: `token ${GITHUB_TOKEN}`,
      //   },
    });

    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        users,
        isLoading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

GithubProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GithubContext;
