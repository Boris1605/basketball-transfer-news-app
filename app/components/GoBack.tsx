'use client';

import { useRouter } from 'next/navigation';

export default function GoBack() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      Click here to go back!
    </button>
  );
}
