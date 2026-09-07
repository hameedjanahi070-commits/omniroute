import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: '📊' },
    { name: 'Calculator', path: '/calculator', icon: '🔢' },
    { name: 'Food Logger', path: '/logger', icon: '📝' },
    { name: 'Tips', path: '/tips', icon: '💡' },
    { name: 'Meal Plan', path: '/mealplan', icon: '📋' },
    { name: 'Exercise', path: '/exercise', icon: '🏃' },
  ];

  return (
    <div className="flex min-h-screen bg-[#0f0f0f] text-[#e0e0e0]">
      <aside className="w-60 bg-[#1a1a2e] fixed top-0 left-0 h-screen hidden md:flex flex-col border-r border-[#ffffff08]">
        <div className="p-7">
            <h1 className="text-lg font-bold text-white">CalorieTracker</h1>
        </div>
        <nav className="flex-1 px-3 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className={`flex items-center gap-3.5 p-3 rounded-lg text-sm font-medium transition-all ${router.pathname === item.path ? 'bg-gradient-to-r from-teal-500/15 to-blue-500/10 text-teal-400 font-semibold' : 'text-[#888] hover:bg-[#ffffff08] hover:text-[#e0e0e0]'}`}>
              <span className="text-xl w-6 text-center">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-[#ffffff08] text-xs text-[#888] text-center">CalorieTracker SaaS</div>
      </aside>

      <main className="flex-1 md:ml-60 p-6 md:p-8 pb-24">
        {children}
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1a1a2e] border-t border-[#ffffff10] p-2 flex justify-around">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className={`flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] ${router.pathname === item.path ? 'text-teal-400' : 'text-[#888]'}`}>
              <span className="text-xl">{item.icon}</span>
              {item.name.split(' ')[0]}
            </Link>
          ))}
      </nav>
    </div>
  );
};

export default Layout;
