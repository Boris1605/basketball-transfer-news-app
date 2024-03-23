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

  // 4. If user exists, render the page
  return (
    <div>
      <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-2xl p-6 border m-10">
        <h1>{user.email}'s Profile</h1>
        <br />
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            {/* static avatar */}
            <img src="../../images/avatar/avatar1.webp" alt="avatar" />
          </div>
        </div>
        {/* <p>Favorite Team's</p> */}
      </div>
    </div>
  );
}
