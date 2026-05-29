const axios = require("axios");

const fetchGitHubProfile = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = fetchGitHubProfile;