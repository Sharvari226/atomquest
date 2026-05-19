'use client';   // ← This is the fix

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeRole, setActiveRole] = useState('employee');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-7xl font-bold tracking-tight mb-4">AtomQuest</h1>
          <p className="text-2xl text-gray-400">Intelligent Goal Setting & Performance Portal</p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {['employee', 'manager', 'admin'].map(role => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-8 py-3 rounded-2xl font-medium transition-all ${
                activeRole === role 
                  ? 'bg-white text-black scale-105' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/dashboard"
            className="inline-block bg-white text-black px-10 py-4 rounded-2xl text-xl font-semibold hover:bg-gray-200 transition-all"
          >
            Enter Portal →
          </Link>
        </div>
      </div>
    </div>
  );
}