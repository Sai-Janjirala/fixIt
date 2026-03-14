import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ShieldCheck, Zap, BarChart3, ChevronRight } from 'lucide-react';
import Navbar from '../components/shared/Navbar';
import { AuthContext } from '../context/AuthContext';

const Landing = () => {
  const { user, loading } = useContext(AuthContext);

  if (!loading && user) {
    return <Navigate to={user.role === 'admin' ? '/admin/dashboard' : '/dashboard'} replace />;
  }

  const features = [
    {
      name: 'Lightning Fast Reports',
      description: 'Submit maintenance requests in seconds. Our streamlined form ensures you provide exactly what maintenance teams need.',
      icon: Zap,
    },
    {
      name: 'Real-time Tracking',
      description: 'Watch your request move from pending to resolved with our intuitive timeline view. No more guessing when it will be fixed.',
      icon: BarChart3,
    },
    {
      name: 'Secure & Reliable',
      description: 'Role-based access ensures students only see their requests while wardens manage the entire block securely.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar toggleSidebar={() => {}} />

      <main>
        {/* Hero section */}
        <div className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#8b5cf6] opacity-20 dark:opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>
          
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-6">
                Hostel maintenance, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">simplified.</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 mb-10">
                FixIt is the modern approach to tracking and resolving hostel room issues. 
                Say goodbye to paper slips and unread emails. Submit, track, and get it resolved.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/signup"
                  className="rounded-lg bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 hover:-translate-y-0.5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Get started
                </Link>
                <Link
                  to="/login"
                  className="group flex items-center text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
                >
                  Login to your account <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="py-24 sm:py-32 bg-gray-50 dark:bg-slate-800/30 border-t border-gray-100 dark:border-gray-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-500">Track everything</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Everything you need to get things fixed
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Whether you're a student with a broken desk or an admin managing an entire block,
                FixIt provides the tools to streamline the entire maintenance lifecycle.
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                        <feature.icon className="h-6 w-6 text-blue-500" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
