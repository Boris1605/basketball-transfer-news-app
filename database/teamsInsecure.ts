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

export const getTeamInsecure = cache(async (id: number) => {
  const [team] = await sql<Team[]>`
  SELECT
    *
  FROM
    teams
  WHERE
    id = ${id}
  `;

  return team;
})
