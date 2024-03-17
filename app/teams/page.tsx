// import Image from 'next/image';
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
      <h1>NBA Teams:</h1>
      <div className="rounded-lg overflow-hidden shadow-2xl p-6 border m-10">
        {teams.map((team) => {
          return (
            <div key={`teams-${team.id}`}>
              <Link href={`/teams/${team.id}`}>
                <div className="flex items-center">
                  <img
                    src={`images/teamlogos/${team.name.toLowerCase()}.webp`}
                    width={20}
                    height={20}
                    alt={team.name}
                  />
                  <div className="font-medium">{team.fullName}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {/* <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Full Name</th>
              <th>City</th>
              <th>Conference</th>
              <th>Division</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{`${team.id}`}</th>
              <td>{`${team.fullName}`}</td>
              <td>{`${team.city}`}</td>
              <td>{`${team.conference}`}</td>
              <td>{`${team.division}`}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>City</th>
              <th>Conference</th>
              <th>Division</th>
            </tr>
          </tfoot>
        </table>
      </div> */}
    </main>
  );
}
