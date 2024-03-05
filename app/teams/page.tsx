import Link from 'next/link';
import { getTeamsInsecure } from '../../database/teamsInsecure';

export const metadata = {
  title: 'Teams page',
  description: 'Teams page',
};

export default async function TeamsPage() {
  const teams = await getTeamsInsecure();

  return (
    <main>
      <div>Teams</div>
      <div>
        {' '}
        {teams.map((team) => {
          return (
            <div key={`teams-${team.id}`}>
              <Link href={`/teams/${team.id}`}>
                <div>{team.fullName}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
