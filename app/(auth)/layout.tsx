import Link from 'next/link';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex items-center justify-center bg-[#F7F8FA] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <Link href="/" className="flex items-center justify-center gap-2">
          <span className="text-3xl">🏫</span>
          <span className="text-2xl font-bold text-gray-800">SunSchool</span>
        </Link>
        {children}
      </div>
    </div>
  );
}
