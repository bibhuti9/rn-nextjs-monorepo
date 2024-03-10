export const getGithubUsers = async () => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=react&per_page=5&page=1`
  );
  return response.json();
};
