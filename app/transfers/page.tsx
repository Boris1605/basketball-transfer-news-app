'use client';

import { useEffect, useState } from 'react';
// import { getTransfers } from '../../database/transfers';
import { getTransfers } from '../../database/transfers';
import TransferForm, { Transfer } from './TransferForm';
import TransferList from './TransferList';

// export const metadata = {
//   title: 'Transfer page',
//   description: 'Transfer page',
// };

export default function TransfersPage() {
  const [transfers, setTransfers] = useState<Transfer[]>([]);
  // useEffect(() => {
  //   const fetchTransfers = async () => {
  //     const transfers = await getTransfers();
  //     setTransfers(transfers);
  //   };
  //   fetchTransfers();
  // }, []);

  console.log(transfers);
  console.log('pera');

  return (
    <main>
      <div className="rounded-lg overflow-hidden shadow-2xl p-6 border m-10">
        Transfers:
        <TransferForm
          // ternary if loggedin show else hide
          onTransferAdded={(transfer: Transfer) =>
            setTransfers([...transfers, transfer])
          }
        />
        <br />
        <div>
          <TransferList transfers={transfers} />
        </div>
      </div>
    </main>
  );
}
