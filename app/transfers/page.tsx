'use client';

import { useEffect, useState } from 'react';
import TransferForm, { Transfer } from './TransferForm';
// import TransferList from './TransferList';

// export const metadata = {
//   title: 'Transfer page',
//   description: 'Transfer page',
// };

export default function TransfersPage() {
  const [transfers, setTransfers] = useState<Transfer[]>([]);

  const addTransfer = async (newTransfer: Transfer) => {
    try {
      const response = await fetch('api/transfers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransfer),
      });
      if (response.ok) {
        setTransfers([...transfers, newTransfer]);
      } else {
        console.log('Failed to add transfer');
      }
    } catch (error) {
      console.log('Failed to add transfer:', error);
    }
  };

  const fetchTransfers = async () => {
    try {
      const response = await fetch('/api/transfers');
      if (response.ok) {
        const data = await response.json();
        setTransfers(data.transfers);
      } else {
        console.log('Failed to fetch transfers');
      }
    } catch (error) {
      console.log('Failed to fetch transfers:', error);
    }
  };

  useEffect(() => {
    fetchTransfers();
  }, []);

  return (
    <main>
      <div className="rounded-lg overflow-hidden shadow-2xl p-6 border m-10">
        Transfers:
        <TransferForm onSubmit={addTransfer} />
        <br />
        {/* <div>
          <TransferList transfers={transfers} />
        </div> */}
      </div>
    </main>
  );
}
