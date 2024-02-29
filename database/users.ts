// import { cache } from 'react';
// import { sql } from './connect';

export type User = {
  id: number;
  email: string;
};

export type UserWithPasswordHash = User & {
  passwordHash: string;
};

// export const getUserByEmailInsecure = cache(async (email: string) => {
//   const [user] = await sql<User[]>`
//     SELECT
//       id,
//       email
//     FROM
//       users
//     WHERE
//       email = ${email.toLowerCase()}
//   `;
//   return user;
// });

// export const getUserWithPasswordHashByEmailInsecure = cache(
//   async (email: string) => {
//     const [user] = await sql<UserWithPasswordHash[]>`
//       SELECT
//         *
//       FROM
//         users
//       WHERE
//         email = ${email.toLowerCase()}
//     `;
//     return user;
//   },
// );

// export const createUserInsecure = cache(
//   async (email: string, passwordHash: string) => {
//     const [user] = await sql<User[]>`
//       INSERT INTO
//         users (email, password_hash)
//       VALUES
//         (
//           ${email.toLowerCase()},
//           ${passwordHash}
//         )
//       RETURNING
//         id,
//         email
//     `;
//     return user;
//   },
// );
