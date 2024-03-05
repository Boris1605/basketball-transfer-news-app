import { Sql } from 'postgres';
import { z } from 'zod';

export type Team = {
  id: number;
  conference: string;
  division: string;
  city: string;
  name: string;
  fullName: string;
};

export const teamSchema = z.object({
  id: z.number(),
  conference: z.string(),
  division: z.string(),
  city: z.string(),
  name: z.string(),
  fullName: z.string(),
});

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE teams (
      id integer NOT NULL,
      conference varchar(50) NOT NULL,
      division varchar(50) NOT NULL,
      city varchar(50) NOT NULL,
      name varchar(50) NOT NULL,
      full_name varchar(80) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE teams`;
}
