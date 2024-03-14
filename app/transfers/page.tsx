import TransferForm from './TransferForm';

export const metadata = {
  title: 'Transfer page',
  description: 'Transfer page',
};

export default function TransfersPage() {
  return (
    <main>
      <div className="rounded-lg overflow-hidden shadow-2xl p-6 border m-10">
        Transfers:
        <TransferForm />
        <br />
        <div>
          <p>Recently added transfers:</p>
        </div>
      </div>
    </main>
  );
}
