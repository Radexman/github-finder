import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';
import PropTypes from 'prop-types';

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get single user
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      method: 'GET',
      'User-Agent': 'request',
      Authorization: 'token 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',
    });

    if (response.status === 404) {
      window.location = './notfound';
    } else {
      const data = await response.json();

      dispatch({
        type: 'GET_USER',
        payload: data,
      });
    }
  };

  // Get user repos
  const getUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    });

    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        method: 'GET',
        'User-Agent': 'request',
        Authorization: 'token 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',
      },
    );

    const data = await response.json();

    dispatch({
      type: 'GET_REPOS',
      payload: data,
    });
  };

  // Clear users from state
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  // Set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        getUser,
        getUserRepos,
        clearUsers,
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
