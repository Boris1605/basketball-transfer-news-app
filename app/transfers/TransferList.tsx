export default function TransferList({ transfers }) {
  return (
    <div>
      <h2>Recently added Transfers:</h2>
      <br />
      <ul>
        {transfers.map((transfer, index) => (
          <li key={index}>
            <span className="font-bold">{transfer.player}</span> - From{' '}
            <span className="font-bold">{transfer.currentTeam}</span> to{' '}
            <span className="font-bold">{transfer.newTeam}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
