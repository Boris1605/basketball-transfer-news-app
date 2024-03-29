import Link from 'next/link';
import { getTeamsInsecure } from '../../database/teamsInsecure';

export const metadata = {
  title: 'Teams page',
  description: 'Teams page',
};

export default async function TeamsPage() {
  const teams = await getTeamsInsecure();

  return (
    <div>
      <div className="max-w-md rounded-lg overflow-hidden shadow-2xl p-6 border m-10 bg-white">
        <h1>NBA Teams:</h1>
        <br />
        {teams.map((team) => {
          return (
            <div key={`teams-${team.id}`}>
              <Link href={`/teams/${team.id}`}>
                <div className="flex items-center mb-2">
                  <img
                    className="mr-2"
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
    </div>
  );
}
