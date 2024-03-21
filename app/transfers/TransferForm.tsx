'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import Dropdown from 'react-dropdown';

export type Transfer = {
  player: string;
  currentTeam: string;
  newTeam: string;
};

// type Props = {
//   onTransferAdded: (transfer: Transfer) => void;
// };

export default function TransferForm() {
  const [player, setPlayer] = useState('');
  const [currentTeam, setCurrentTeam] = useState('');
  const [newTeam, setNewTeam] = useState('');

  const router = useRouter();

  const addTransfer = async (newTransfer: Transfer) => {
    try {
      const response = await fetch('api/transfers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransfer),
      });
      console.log(response);
      // onTransferAdded(newTransfer);
      // if (response.ok) {
      //   setTransfers([...transfers, newTransfer]);
      // } else {
      //   console.log('Failed to add transfer');
      // }
      router.refresh();
    } catch (error) {
      console.log('Failed to add transfer:', error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addTransfer({ player, currentTeam, newTeam });
    // Clear form fields after submission
    setPlayer('');
    setCurrentTeam('');
    setNewTeam('');
  };

  //   const [transfers, setTransfers] = useState<Transfer[]>([]);
  // useEffect(() => {
  //   const fetchTransfers = async () => {
  //     const transfers = await getTransfers();
  //     setTransfers(transfers);
  //   };
  //   fetchTransfers();
  // }, []);
  // console.log(transfers);

  return (
    <form onSubmit={handleSubmit} className="flex flex-row space-x-4">
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
          // make dropdown
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

        className="btn btn-active"
      >
        Confirm Transfer
      </button>
    </form>
  );
}
