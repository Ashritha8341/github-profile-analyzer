CREATE TABLE profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    github_id BIGINT,
    username VARCHAR(255),
    name VARCHAR(255),
    bio TEXT,
    public_repos INT,
    followers INT,
    following INT,
    profile_url VARCHAR(500),
    avatar_url VARCHAR(500),
    account_created_at DATETIME,
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);