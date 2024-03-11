## Basketball News and Transfer App

This was my final Project during a Bootcamp based in Vienna, Austria.

## About the project 📚

It's a Basketball News and Transfer App built using Next.js.

# Features

- User authentication and authorization
- Favourite feature where users can follow their favourite teams
- Users can add transfers to the database

## Planning:

- Visualize Landing page using Figma
- Database schema design using [DrawSQL](https://drawsql.app/teams/basketball-app/diagrams/basketball-app)

## Technologies Used

- JavaScript
- TypeScript
- Tailwind
- Next.js
- PostgreSQL
- RESTfull API
- Jest (for testing)
- Playwright (for testing)
- Fly.io (for deployment)

## Screenshots 📸

## Setup Instructions 💻

1. Clone the repository

```bash
git clone https://github.com/Boris1605/basketball-transfer-news-app.git
cd basketball-transfer-news-app

```

2. Install dependencies using

```bash
pnpm install
```

Open the next.config.js file and add the following inside the {} after nextConfig =:

```javascript
experimental: {
  typedRoutes: true,
}
```

3. Setup postgres database

4. Create file .env in the project root directory and paste the followinf, changing to your own usename, password and databse:

```
PGHOST= localhost
PGUSERNAME=<your username>
PGPASSWORD=<your password>
PGDATABASE=<your database name>
```

5. The run the following queries, with a database name, username and password of your own.

```sql
CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
\connect <database name>;
CREATE SCHEMA <user name> AUTHORIZATION <user name>;
```

Quit psql using the following command:

```bash
\q
```

6. Connect to postgres database:

On Linux, you will also need to create a Linux system user with a name matching the user name you used in the database. It will prompt you to create a password for the user - choose the same password as for the database above.

```bash
sudo adduser <user name>
```

Once you're ready to use the new user, reconnect using the following command.

#### Windows and macOS:

```bash
psql -U <user name> <database name>
```

#### Linux:

```bash
sudo -u <user name> psql -U <user name> <database name>
```

7. Run application

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

## Deployment Instructions (Deploy to Fly.io) 🚀

1. Sign up on Fly.io and verify your email.
2. On the Fly.io dashboard page, click on the "Add a payment method" link at the top right of the page and follow the instructions (you will not be charged).
3. On the Fly.io Tokens page, generate a new Fly.io access token named "GitHub Actions Deploy Token" and copy it from the text box that appears - it will only be shown once.
4. In your GitHub repo under Settings → Secrets → Actions, click the "New repository secret" button at the top right of the page and create a new token with the name `FLY_API_TOKEN` and the token you copied as the secret.
5. On the command line, open the Fly.io login page in your browser using the following command:
   Enter your credentials in the browser window that appears and then click on the link "Try Fly.io for free". Switch back to the terminal - it should now show a message like "successfully logged in as <your email>".
6. Create an app, specifying the name using only lowercase letters and dashes:
7. Create the Fly.io config files as demonstrated in the lecture (also available in the Next.js example repo).
8. Change your `ley.config.js` as in the lecture: add ssl config for Vercel.
9. Change your `util/config.js` as in the lecture: alias Vercel database environment variables.
10. Change your `next.config.js` as in the lecture: disable linting and type checking on build, since this happens earlier in the GitHub Actions deploy workflow.
11. Add database credentials using Fly.io secrets, randomly generating the database name, username, and password:

```bash
flyctl secrets set PGHOST=localhost PGDATABASE=$(openssl rand -hex 16) PGUSERNAME=$(openssl rand -hex 16) PGPASSWORD=$(openssl rand -base64 32)
```

12. If your app needs any additional environment variables such as API keys, also add them to the secrets using the following pattern:

```bash
flyctl secrets set <secret name>=<secret value>
```

13. Create a 1GB volume for the PostgreSQL database in the Bucharest region (slower region IDs: Amsterdam ams or Warsaw waw):

```bash
flyctl volumes create postgres --size 1 --region otp
```

14. Deploy the app - this will result in an error message in the logs and a hanging server:

```bash
flyctl deploy
```

15. SSH into the Fly.io machine and set up PostgreSQL:

```bash
# Connect to the Fly.io machine to run commands
flyctl ssh console --app <app name>
# Create PostgreSQL directories, incl. data directory
mkdir -p /postgres-volume/run/postgresql/data
# Change ownership of directories to postgres user
chown -R postgres:postgres /postgres-volume/run/postgresql
# Allow database setup script to be executed
chmod +x /app/scripts/alpine-postgresql-setup-and-start.sh
# Create database cluster, start PostgreSQL, create a database and user
su postgres -c "/app/scripts/alpine-postgresql-setup-and-start.sh"
```

16. Deploy the app again:

```bash
flyctl deploy
```

17. You may receive a "failed to fetch an image or build from source" error during deployment:

```bash
Error failed to fetch an image or build from source: error building: executor failed running [/bin/sh -c yarn build]: exit code: 1
```

18. Deploys may fail for a number of reasons, to find the real error message you will need to scroll up in the logs and find the first line that looks like an error.
