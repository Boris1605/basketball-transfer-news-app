'use client';

import { useState } from 'react';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister() {
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),

      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = response.json();
  }

  return (
    <form>
      {/* <form onSubmit={async (event) = await handleRegister()}> */}
      <label>
        Email
        <input type="email" onChange={(event) => setEmail(event.currentTarget.value)} />
      </label>
      <label>
        Password
        <input
          type="password"
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
      </label>
      <button>Register</button>
    </form>
  );
}
