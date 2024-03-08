import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUser } from '../../../database/users';

type Props = {
  params: {
    id: string;
    email: string;
  };
};

export default async function UserProfilePage(props: Props) {
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
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          {/* static avatar */}
          <img src="../../images/avatar/avatar1.webp" alt="avatar" />
        </div>
      </div>
      <h2>{props.params.email}'s Profile</h2>
    </div>
  );
}
