import { Sql } from 'postgres';
import { z } from 'zod';

export type Transfer = {
  id: number;
  player: string;
  currentTeamId: string;
  newTeamId: string;
};

export const userSchema = z.object({
  player: z.string(),
  currentTeamId: z.string(),
  newTeamId: z.string(),
});

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE transfers (
      id integer PRIMARY key generated always AS identity,
      player varchar(80) NOT NULL UNIQUE,
      current_team_id integer NOT NULL,
      new_team_id integer NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE transfers `;
}
