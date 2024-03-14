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
      <label>
        Player
        <input
          placeholder="Player"
          value={player}
          onChange={(event) => setPlayer(event.currentTarget.value)}
          required
        />
      </label>
      <label>
        Current Team
        <input
          placeholder="Current Team"
          value={currentTeam}
          onChange={(event) => setCurrentTeam(event.currentTarget.value)}
          required
        />
      </label>
      <label>
        New Team
        <input
          placeholder="Player"
          value={newTeam}
          onChange={(event) => setNewTeam(event.currentTarget.value)}
          required
        />
      </label>
      <button
        type="button"
        onClick={() => {
          router.refresh();
        }}>Confirm Transfer</button>
    </form>
  );
}
