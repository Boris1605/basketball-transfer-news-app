import { cookies } from 'next/headers';
import { getValidSession } from '../../database/sessions';
import { getTransfers } from '../../database/transfers';
import TransferForm from './TransferForm';
import TransferList from './TransferList';

export const metadata = {
  title: 'Transfer page',
  description: 'Transfer page',
};

export default async function TransfersPage() {
  const transfers = await getTransfers();

  transfers.reverse();
  const sessionTokenCookie = cookies().get('sessionToken');
  const session =
    sessionTokenCookie && (await getValidSession(sessionTokenCookie.value));
  if (!session) {
    return (
      <main>
        <div className="rounded-lg shadow-2xl p-6 border m-10 bg-white">
          <br />
          <div>
            <TransferList transfers={transfers} />
          </div>
        </div>
      </main>
    );
  }
  return (
    <div>
      <div className="rounded-lg shadow-2xl p-6 border m-10 bg-white">
        <TransferForm />
        <br />
        <div>
          <TransferList transfers={transfers} />
        </div>
      </div>
    </div>
  );
}
