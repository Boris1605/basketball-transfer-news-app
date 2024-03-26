import { cache } from 'react';
import { sql } from './connect';

export type User = {
  id: number;
  email: string;
};

export type UserWithPasswordHash = User & {
  passwordHash: string;
};

export const getUser = cache(async (token: string) => {
  const [user] = await sql<Pick<User, 'id', 'email'>[]>`
    SELECT
      users.id,
      users.email
    FROM
      users
      INNER JOIN sessions ON (
        sessions.token = ${token}
        AND sessions.user_id = users.id
        AND sessions.expiry_timestamp > now()
      )
  `;
  return user;
});

export const getUserByEmailInsecure = cache(async (email: string) => {
  const [user] = await sql<User[]>`
    SELECT
      id,
      email
    FROM
      users
    WHERE
      email = ${email.toLowerCase()}
  `;
  return user;
});

export const getUserWithPasswordHashByEmailInsecure = cache(
  async (email: string) => {
    const [user] = await sql<UserWithPasswordHash[]>`
      SELECT
        *
      FROM
        users
      WHERE
        email = ${email.toLowerCase()}
    `;
    return user;
  },
);

export const createUserInsecure = cache(
  async (email: string, passwordHash: string) => {
    const [user] = await sql<User[]>`
      INSERT INTO
        users (email, password_hash)
      VALUES
        (
          ${email.toLowerCase()},
          ${passwordHash}
        )
      RETURNING
        id,
        email
    `;
    return user;
  },
);
