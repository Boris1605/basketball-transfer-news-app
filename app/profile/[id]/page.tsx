import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUser } from '../../../database/users';

export default async function UserProfilePage() {
  // 1. Check if the sessionToken cookie exists
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. Query the current user with the sessionToken
  const user = sessionTokenCookie && (await getUser(sessionTokenCookie.value));

  // 3. If user doesn't exist, redirect to login page
  if (!user) {
    redirect('/login');
  }

  console.log(user);

  // 4. If user exists, render the page
  return (
    <div className="h-screen">
      <div className="max-w-[48rem] mx-auto rounded-lg shadow-2xl p-7 border m-10 bg-white space-x-4">
        <h1>{user.email}'s Profile</h1>
        <br />
        <div className="flex">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-2 mr-3">
              {/* static avatar */}
              <img src="../../images/avatar/avatar1.webp" alt="avatar" />
            </div>
          </div>
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
              <div className="stat-title">Transfers added</div>
              <div className="stat-value">2</div>
            </div>

            <div className="stat">
              <div className="stat-title">Account since</div>
              <div className="stat-value">26.03.24</div>
            </div>
            <div className="stat">
              <div className="stat-title">Favorite Team</div>
              <div className="stat-value">-</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
