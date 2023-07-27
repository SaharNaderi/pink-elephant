DROP TABLE IF EXISTS users;


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    role VARCHAR(50) NOT NULL,
    nationality VARCHAR(50),
    location VARCHAR(100) NOT NULL,
    soft_skills VARCHAR(200),
    hard_skills VARCHAR(200),
    mobile VARCHAR(20),
    email VARCHAR(100) NOT NULL,
    linkedin VARCHAR(100),
    youtube VARCHAR(100),
    description VARCHAR(500) NOT NULL,
    hobbies VARCHAR(200)
);



