import { cache } from 'react';
import { sql } from './connect';
import { Team } from '../migrations/00002-createTableTeams';

export const getTeamsInsecure = cache(async () => {
  const teams = await sql<Team[]>`
    SELECT
      teams.*
    FROM
      teams
  `;
  return teams;
});
