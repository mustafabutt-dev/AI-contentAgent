'use client'
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Coming Soon!</h1>
      <Link href="/generate" style={{ color: 'blue' }}>Go back to Home</Link>
    </div>
  );
}