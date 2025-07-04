async function fetchGitHubProfile(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('User not found');
    return await response.json();
  } catch (error) {
    console.error("GitHub API Error:", error);
    return null;
  }
}