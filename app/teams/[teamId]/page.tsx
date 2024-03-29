import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTeamInsecure } from '../../../database/teamsInsecure';

type Props = {
  params: {
    teamId: number;
  };
};

export async function generateMetadata(props: Props) {
  const team = await getTeamInsecure(props.params.teamId);
  return {
    title: team?.fullName,
  };
}

export default async function TeamPage(props: Props) {
  // Fetch team data
  const team = await getTeamInsecure(Number(props.params.teamId));

  // If team data is not found, return a 404 page
  if (!team) {
    notFound();
  }

  return (
    <div className="h-screen">
      <div className="max-w-lg rounded-lg overflow-hidden shadow-2xl p-6 border m-10 bg-white">
        <Image
          // className="w-full"
          src={`/images/teamlogos/${team.name.toLowerCase()}.webp`}
          alt={team.name}
          width={100}
          height={100}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <h1>{team.fullName} Team Page</h1>
          </div>
          <div className="text-gray-700 text-base">
            <p>City: {team.city}</p>
            <p>Conference: {team.conference}</p>
            <Link href={`/teams/${team.id}/roster`}>
              Roster(Coming soon...)
            </Link>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2" />
      </div>
    </div>
  );
}
