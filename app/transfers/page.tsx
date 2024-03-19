// import { useEffect, useState } from 'react';
import { getTransfers } from '../../database/transfers';
import TransferForm, { Transfer } from './TransferForm';
import TransferList from './TransferList';

// export const metadata = {
//   title: 'Transfer page',
//   description: 'Transfer page',
// };

export default async function TransfersPage() {
  // const [transfers, setTransfers] = useState<Transfer[]>([]);

  const transfers = await getTransfers();
  console.log(transfers);

  return (
    <main>
      <div className="rounded-lg overflow-hidden shadow-2xl p-6 border m-10">
        Transfers:
        <TransferForm />
        <br />
        <div>
          <TransferList transfers={transfers} />
        </div>
      </div>
    </main>
  );
}
