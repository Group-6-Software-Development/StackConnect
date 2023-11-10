# Backend

## Sign-in page

- Frontend sends the user's username and password to the backend.
- The backend checks if the password matches the one in the database.
- The backend returns true if the password is a match, and false if the password doesn't match.

## Register page

- Frontend sends email, password, and account type to the backend.
- The backend checks if the data already exists in the database.
- If the data exists, the backend returns false to the frontend.
- If the data doesn't exist, the backend saves the data to the database and sends true to the frontend.

## Search page & Jobs page

- Frontend sends the search parameter to the backend, which checks the database for entries that match the search parameters.

## Developer user profile page and employee user profile page

- Frontend fetches user profile data from the backend, which in turn fetches data from the database.
- On save, the website sends data back to the backend to be saved into the database.

## Create JobPost page

- Frontend sends JobPost info to the backend, which in turn saves it to the database.

## Worker seeker page

- Frontend fetches required data from the backend, which in turn fetches the data from the database.
