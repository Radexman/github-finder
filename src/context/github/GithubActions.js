const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;

// Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    method: 'GET',
    'User-Agent': 'request',
    Authorization: 'token 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',
  });

  const { items } = await response.json();

  return items;
};
