import 'server-only';
import { getTeamsInsecure } from '../../database/teamsInsecure';

type TeamDropdownProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function TeamDropdown({ value, onChange }: TeamDropdownProps) {
  const teams = getTeamsInsecure(); // Fetch teams data directly

  return (
    <select
      value={value}
      onChange={onChange}
      required
      className="input input-bordered w-full max-w-xs"
    >
      <option value="">Select Team</option>
      {teams.map((team, index) => (
        <option key={index} value={team}>
          {team}
        </option>
      ))}
    </select>
  );
}
