'use client';

// import { useRouter } from 'next/navigation';
import { useState } from 'react';

type TransferFormProps = {
  onSubmit: (newTransfer: Transfer) => void;
};

export type Transfer = {
  player: String;
  currentTeam: String;
  newTeam: String;
};

export default function TransferForm({ onSubmit }: TransferFormProps) {
  const [player, setPlayer] = useState('');
  const [currentTeam, setCurrentTeam] = useState('');
  const [newTeam, setNewTeam] = useState('');

  // const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ player, currentTeam, newTeam });
    // Clear form fields after submission
    setPlayer('');
    setCurrentTeam('');
    setNewTeam('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Player Name"
          value={player}
          onChange={(event) => setPlayer(event.currentTarget.value)}
          required
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <br />
      <div>
        <input
          placeholder="Current Team"
          value={currentTeam}
          onChange={(event) => setCurrentTeam(event.currentTarget.value)}
          required
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <br />
      <div>
        <input
          placeholder="New Team"
          value={newTeam}
          onChange={(event) => setNewTeam(event.currentTarget.value)}
          required
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <br />
      <button
        // type="button"
        // onClick={async () => {
        //   await router.refresh();
        // }}
        type="submit"
        className="btn btn-active"
      >
        Confirm Transfer
      </button>
    </form>
  );
}
