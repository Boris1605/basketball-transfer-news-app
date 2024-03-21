import { cache } from 'react';
import { Transfer } from '../migrations/00004-createTableTransfers';
import { sql } from './connect';

export const getTransfers = cache(async () => {
  const transfers = await sql<Transfer[]>`
    SELECT
      transfers.*
    FROM
      transfers
  `;
  return transfers;
});

type Transfers = {
  player: string;
  currentTeam: string;
  newTeam: string;
};

export const createTransfer = cache(
  async (player: string, currentTeam: string, newTeam: string) => {
    const [transfer] = await sql<Transfers[]>`
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
