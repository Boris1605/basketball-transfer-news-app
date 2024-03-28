'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getSafeReturnToPath } from '../../../util/validation';
import ErrorMessage from '../../ErrorMessage';
import { LoginResponseBodyPost } from '../api/login/route';

type Props = { returnTo?: string | string[] };

export default function LoginForm(props: Props) {
  // State variables to hold email, password, and errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  // Function to handle login submission
  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Send login request to the server
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),

      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Parse the response
    const data: LoginResponseBodyPost = await response.json();

    // Handle errors, if any
    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    // This is not the secure way of doing returnTo
    // router.push(`/profile/${data.user.email}`);
    // if (props.returnTo) {
    //   console.log('Checks Return to: ', props.returnTo);
    //   router.push(props.returnTo);
    // }

    // Redirect to the user's profile page after successful login
    router.push(
      getSafeReturnToPath(props.returnTo) || `/profile/${data.user.email}`,
    );

    router.refresh();
  }

  return (
    <div className="h-screen">
      <form
        onSubmit={async (event) => await handleLogin(event)}
        className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-2xl p-6 border m-10 bg-white"
      >
        <h1 className="font-bold text-center">Login to your Account</h1>
        <br />
        <div className="input input-bordered flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            value={email}
            className="grow"
            placeholder="Email"
            required
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </div>
        <br />
        <div className="input input-bordered flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            placeholder="Password"
            className="grow"
            required
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </div>
        <br />
        <div className="text-center">
          <button className="btn btn-active">Login</button>
        </div>
        <br />
        <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
          Don't have an account?{' '}
          <a
            href="/register"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Register here
          </a>
        </p>

        {errors.map((error) => (
          <div className="error" key={`error-${error.message}`}>
            <ErrorMessage>{error.message}</ErrorMessage>
          </div>
        ))}
      </form>
    </div>
  );
}
