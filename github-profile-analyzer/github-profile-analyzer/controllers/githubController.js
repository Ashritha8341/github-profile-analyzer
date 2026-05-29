const fetchGitHubProfile = require("../services/githubService");
const db = require("../config/db");

const analyzeProfile = async (req, res) => {
  try {
    const username = req.params.username;

    const profile = await fetchGitHubProfile(username);

    const sql = `
      INSERT INTO profiles
      (github_id, username, name, bio, public_repos, followers, following, profile_url, avatar_url, account_created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      profile.id,
      profile.login,
      profile.name,
      profile.bio,
      profile.public_repos,
      profile.followers,
      profile.following,
      profile.html_url,
      profile.avatar_url,
      new Date(profile.created_at)
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        return res.status(500).json({
          error: err
        });
      }

      res.json({
        message: "Profile analyzed and stored successfully",
        profile
      });
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const getAllProfiles = (req, res) => {
  const sql = "SELECT * FROM profiles";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(results);
  });
};

const getSingleProfile = (req, res) => {
  const username = req.params.username;

  const sql = "SELECT * FROM profiles WHERE username = ?";

  db.query(sql, [username], (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(results);
  });
};

module.exports = {
  analyzeProfile,
  getAllProfiles,
  getSingleProfile
};