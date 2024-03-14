import TransferForm from './TransferForm';

export const metadata = {
  title: 'Transfer page',
  description: 'Transfer page',
};

export default function TransfersPage() {
  return (
    <main>
      <div>Transfers</div>
      <TransferForm />
    </main>
  );
}
