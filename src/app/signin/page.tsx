'use client';

import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
       <button
      onClick={() => signIn('google')}
      className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-all text-sm font-medium text-gray-700"
    >
      <FcGoogle className="text-lg" />
      Sign in with Google
    </button>
    </div>
  );
}
