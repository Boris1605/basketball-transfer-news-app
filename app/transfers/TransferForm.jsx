'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function TransferForm() {
  const [player, setPlayer] = useState('');
  const [currentTeam, setCurrentTeam] = useState('');
  const [newTeam, setNewTeam] = useState('');

  const router = useRouter();

  return (
    <form>
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
      >
        Confirm Transfer
      </button>
    </form>
  );
}
