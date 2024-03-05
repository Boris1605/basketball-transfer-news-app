import { logout } from './actions';

export default function LogoutButton() {
  const handleLogout = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await logout();
  };
  return (
    <form>
      <button
        className="logoutButton"
        formAction={logout}
        onClick={handleLogout}
      >
        Logout
      </button>
    </form>
  );
}
