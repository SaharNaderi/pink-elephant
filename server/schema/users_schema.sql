DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    role VARCHAR(50) NOT NULL,
    nationality VARCHAR(50) DEFAULT 'Unknown',
    location VARCHAR(100) NOT NULL,
    soft_skills VARCHAR(200) DEFAULT 'Not specified',
    hard_skills VARCHAR(200) DEFAULT 'Not specified',
    mobile VARCHAR(20) DEFAULT 'N/A',
    email VARCHAR(100) NOT NULL,
    linkedin VARCHAR(100) DEFAULT 'Not specified',
    youtube VARCHAR(100) DEFAULT 'Not specified',
    description VARCHAR(255) NOT NULL,
    hobbies VARCHAR(200) DEFAULT 'None'
);



