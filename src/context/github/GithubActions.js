const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;

// Get single user
export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    method: 'GET',
    'User-Agent': 'request',
    Authorization: 'token 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',
  });

  if (response.status === 404) {
    window.location = './notfound';
  } else {
    const data = await response.json();

    return data;
  }
};

// Get user repos
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    method: 'GET',
    'User-Agent': 'request',
    Authorization: 'token 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',
  });

  const data = await response.json();

  return data;
};
