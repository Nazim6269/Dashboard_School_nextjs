import Link from 'next/link';

const features = [
  {
    title: 'Student Management',
    description: 'Track student records, attendance, grades, and progress all in one place.',
    icon: '🎓',
  },
  {
    title: 'Teacher Portal',
    description: 'Manage classes, assignments, schedules, and communicate with parents.',
    icon: '👩‍🏫',
  },
  {
    title: 'Attendance Tracking',
    description: 'Real-time attendance monitoring with automated parent notifications.',
    icon: '📋',
  },
  {
    title: 'Grade Management',
    description: 'Record and analyze student performance with detailed grade reports.',
    icon: '📊',
  },
  {
    title: 'Fee Management',
    description: 'Streamline fee collection, payment tracking, and financial reporting.',
    icon: '💰',
  },
  {
    title: 'Communication Hub',
    description: 'Seamless messaging between teachers, students, and parents.',
    icon: '💬',
  },
];

const stats = [
  { value: '1,200+', label: 'Students' },
  { value: '85+', label: 'Teachers' },
  { value: '30+', label: 'Classes' },
  { value: '98%', label: 'Pass Rate' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 lg:px-20 py-4 shadow-sm sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏫</span>
          <span className="text-xl font-bold text-gray-800">SunSchool</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#stats" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#cta" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <Link
          href="/login"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          Login
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="px-6 lg:px-20 py-20 flex flex-col lg:flex-row items-center gap-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="flex-1 space-y-6">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            School Management Made Simple
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Manage Your School{' '}
            <span className="text-blue-600">Efficiently</span> &{' '}
            <span className="text-purple-600">Effectively</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
            A comprehensive platform for administrators, teachers, students, and parents.
            Streamline operations, track performance, and enhance communication.
          </p>
          <div className="flex gap-4">
            <Link
              href="/login"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-3 border border-gray-100">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">🎓</div>
            <h3 className="font-semibold text-gray-800">Students</h3>
            <p className="text-sm text-gray-500">1,200+ enrolled</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-3 border border-gray-100 mt-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">👩‍🏫</div>
            <h3 className="font-semibold text-gray-800">Teachers</h3>
            <p className="text-sm text-gray-500">85+ active</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-3 border border-gray-100">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">📋</div>
            <h3 className="font-semibold text-gray-800">Classes</h3>
            <p className="text-sm text-gray-500">30+ running</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-3 border border-gray-100 mt-6">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-xl">🏆</div>
            <h3 className="font-semibold text-gray-800">Results</h3>
            <p className="text-sm text-gray-500">98% pass rate</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="px-6 lg:px-20 py-16 bg-gray-900">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl lg:text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-400 mt-1 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 lg:px-20 py-20">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Features
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Everything You Need</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Powerful tools designed to simplify school administration and improve learning outcomes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-blue-100 transition-all group cursor-default"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-800 text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="px-6 lg:px-20 py-20 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Transform Your School?
          </h2>
          <p className="text-blue-100 text-lg">
            Join hundreds of schools already using SunSchool to manage their operations efficiently.
          </p>
          <Link
            href="/login"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Start Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-20 py-8 bg-gray-900 text-gray-400 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🏫</span>
          <span className="font-semibold text-white">SunSchool</span>
        </div>
        <p>&copy; 2026 SunSchool. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
      </footer>
    </div>
  );
}
