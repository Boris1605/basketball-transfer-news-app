import { cache } from 'react';
import { sql } from './connect';

export const getTransfers = cache(async () => {
  const transfers = await sql<Transfers[]>`
    SELECT
      transfers.*
    FROM
      transfers
  `;
  return transfers;
});

export const createTransfer = cache(
  async (player: string, currentTeam: string, newTeam: string) => {
    const [transfer] = await sql<Transfer[]>`
      INSERT INTO
        transfers (
          player,
          current_team,
          new_team
        )
      VALUES
        (
          ${player},
          ${currentTeam},
          ${newTeam}
        )
      RETURNING
        player,
        current_team,
        new_team
    `;
    return transfer;
  },
);
