import Select from 'react-select';

type TeamDropdownProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const teams = [
  {
    id: 1,
    conference: 'East',
    division: 'Southeast',
    city: 'Atlanta',
    name: 'Hawks',
    fullName: 'Atlanta Hawks',
    abbreviation: 'ATL',
  },
  {
    id: 2,
    conference: 'East',
    division: 'Atlantic',
    city: 'Boston',
    name: 'Celtics',
    fullName: 'Boston Celtics',
    abbreviation: 'BOS',
  },
  {
    id: 3,
    conference: 'East',
    division: 'Atlantic',
    city: 'Brooklyn',
    name: 'Nets',
    fullName: 'Brooklyn Nets',
    abbreviation: 'BKN',
  },
  {
    id: 4,
    conference: 'East',
    division: 'Southeast',
    city: 'Charlotte',
    name: 'Hornets',
    fullName: 'Charlotte Hornets',
    abbreviation: 'CHA',
  },
  {
    id: 5,
    conference: 'East',
    division: 'Central',
    city: 'Chicago',
    name: 'Bulls',
    fullName: 'Chicago Bulls',
    abbreviation: 'CHI',
  },
  {
    id: 6,
    conference: 'East',
    division: 'Central',
    city: 'Cleveland',
    name: 'Cavaliers',
    fullName: 'Cleveland Cavaliers',
    abbreviation: 'CLE',
  },
  {
    id: 7,
    conference: 'West',
    division: 'Southwest',
    city: 'Dallas',
    name: 'Mavericks',
    fullName: 'Dallas Mavericks',
    abbreviation: 'DAL',
  },
  {
    id: 8,
    conference: 'West',
    division: 'Northwest',
    city: 'Denver',
    name: 'Nuggets',
    fullName: 'Denver Nuggets',
    abbreviation: 'DEN',
  },
  {
    id: 9,
    conference: 'East',
    division: 'Central',
    city: 'Detroit',
    name: 'Pistons',
    fullName: 'Detroit Pistons',
    abbreviation: 'DET',
  },
  {
    id: 10,
    conference: 'West',
    division: 'Pacific',
    city: 'Golden State',
    name: 'Warriors',
    fullName: 'Golden State Warriors',
    abbreviation: 'GSW',
  },
  {
    id: 11,
    conference: 'West',
    division: 'Southwest',
    city: 'Houston',
    name: 'Rockets',
    fullName: 'Houston Rockets',
    abbreviation: 'HOU',
  },
  {
    id: 12,
    conference: 'East',
    division: 'Central',
    city: 'Indiana',
    name: 'Pacers',
    fullName: 'Indiana Pacers',
    abbreviation: 'IND',
  },
  {
    id: 13,
    conference: 'West',
    division: 'Pacific',
    city: 'Los Angeles',
    name: 'Clippers',
    fullName: 'Los Angeles Clippers',
    abbreviation: 'LAC',
  },
  {
    id: 14,
    conference: 'West',
    division: 'Pacific',
    city: 'Los Angeles',
    name: 'Lakers',
    fullName: 'Los Angeles Lakers',
    abbreviation: 'LAL',
  },
  {
    id: 15,
    conference: 'West',
    division: 'Southwest',
    city: 'Memphis',
    name: 'Grizzlies',
    fullName: 'Memphis Grizzlies',
    abbreviation: 'MEM',
  },
  {
    id: 16,
    conference: 'East',
    division: 'Southeast',
    city: 'Miami',
    name: 'Heat',
    fullName: 'Miami Heat',
    abbreviation: 'MIA',
  },
  {
    id: 17,
    conference: 'East',
    division: 'Central',
    city: 'Milwaukee',
    name: 'Bucks',
    fullName: 'Milwaukee Bucks',
    abbreviation: 'MIL',
  },
  {
    id: 18,
    conference: 'West',
    division: 'Northwest',
    city: 'Minnesota',
    name: 'Timberwolves',
    fullName: 'Minnesota Timberwolves',
    abbreviation: 'MIN',
  },
  {
    id: 19,
    conference: 'West',
    division: 'Southwest',
    city: 'New Orleans',
    name: 'Pelicans',
    fullName: 'New Orleans Pelicans',
    abbreviation: 'NOP',
  },
  {
    id: 20,
    conference: 'East',
    division: 'Atlantic',
    city: 'New York',
    name: 'Knicks',
    fullName: 'New York Knicks',
    abbreviation: 'NYK',
  },
  {
    id: 21,
    conference: 'West',
    division: 'Northwest',
    city: 'Oklahoma City',
    name: 'Thunder',
    fullName: 'Oklahoma City Thunder',
    abbreviation: 'OKC',
  },
  {
    id: 22,
    conference: 'East',
    division: 'Southeast',
    city: 'Orlando',
    name: 'Magic',
    fullName: 'Orlando Magic',
    abbreviation: 'ORL',
  },
  {
    id: 23,
    conference: 'East',
    division: 'Atlantic',
    city: 'Philadelphia',
    name: '76ers',
    fullName: 'Philadelphia 76ers',
    abbreviation: 'PHI',
  },
  {
    id: 24,
    conference: 'West',
    division: 'Pacific',
    city: 'Phoenix',
    name: 'Suns',
    fullName: 'Phoenix Suns',
    abbreviation: 'PHX',
  },
  {
    id: 25,
    conference: 'West',
    division: 'Northwest',
    city: 'Portland',
    name: 'Trail Blazers',
    fullName: 'Portland Trail Blazers',
    abbreviation: 'POR',
  },
  {
    id: 26,
    conference: 'West',
    division: 'Pacific',
    city: 'Sacramento',
    name: 'Kings',
    fullName: 'Sacramento Kings',
    abbreviation: 'SAC',
  },
  {
    id: 27,
    conference: 'West',
    division: 'Southwest',
    city: 'San Antonio',
    name: 'Spurs',
    fullName: 'San Antonio Spurs',
    abbreviation: 'SAS',
  },
  {
    id: 28,
    conference: 'East',
    division: 'Atlantic',
    city: 'Toronto',
    name: 'Raptors',
    fullName: 'Toronto Raptors',
    abbreviation: 'TOR',
  },
  {
    id: 29,
    conference: 'West',
    division: 'Northwest',
    city: 'Utah',
    name: 'Jazz',
    fullName: 'Utah Jazz',
    abbreviation: 'UTA',
  },
  {
    id: 30,
    conference: 'East',
    division: 'Southeast',
    city: 'Washington',
    name: 'Wizards',
    fullName: 'Washington Wizards',
    abbreviation: 'WAS',
  },
  // {
  //   id: 31
  //   name: 'Free Agent'
  // }
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: '210px', // Adjust width as needed
    height: '48px',
  }),
  menu: (provided, state) => ({
    ...provided,
    zIndex: 9999, // Adjust z-index as needed
    position: 'absolute',
    minHeight: '300px',
  }),
};

export default function TeamDropdown({ value, onChange }: TeamDropdownProps) {
  const options = teams?.map((team) => ({
    value: team.id,
    label: `${team.fullName} (${team.abbreviation})`,
  }));

  return (
    <Select
      styles={customStyles}
      options={options}
      placeholder="Select a team..."
      value={value}
      onChange={onChange}
    />
  );
}
