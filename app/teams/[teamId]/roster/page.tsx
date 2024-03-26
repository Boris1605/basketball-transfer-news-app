import GoBack from '../../../components/GoBack';

export const metadata = {
  title: 'Roster page',
  description: 'Roster page',
};

export default function RosterPage() {
  return (
    <div>
      <div className="rounded-lg overflow-hidden shadow-2xl p-6 border m-10 bg-white">
        <div>Coming soon..</div>
        {/* <Link href={`/teams/${team.id}`}>Return to Team Page</Link> */}
        <GoBack />
      </div>
    </div>
  );
}
