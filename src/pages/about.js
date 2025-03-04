import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">About Us</h1>
      <p className="mt-2 text-gray-700">This is a basic Next.js website with Tailwind CSS.</p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">Go Back</Link>
    </div>
  );
}
