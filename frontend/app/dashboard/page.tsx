'use client';
import { useEffect, useState } from 'react';
import api from '../../lib/axios';
import GoalCard from '../../components/GoalCard';

export default function Dashboard() {
  const [goals, setGoals] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [usersRes, goalsRes] = await Promise.all([
          api.get('/goals/users'),
          api.get('/goals/user/emp1')
        ]);
        
        setUsers(usersRes.data);
        setGoals(goalsRes.data);
        setError(null);
      } catch (err: any) {
        console.error(err);
        setError("Cannot connect to backend. Make sure FastAPI is running on port 8000");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading portal...</div>;
  if (error) return <div className="p-10 text-red-500 text-center">{error}</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Welcome, Rahul Sharma</h1>
          <p className="text-gray-500">Engineering • Employee</p>
        </div>
        <button 
          onClick={() => window.location.href = '/goals/new'}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium"
        >
          + New Goal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-sm text-gray-500">Overall Progress</h3>
          <p className="text-5xl font-bold mt-2 text-green-600">68%</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-sm text-gray-500">Goals This Quarter</h3>
          <p className="text-5xl font-bold mt-2">{goals.length}</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-sm text-gray-500">Team Members</h3>
          <p className="text-5xl font-bold mt-2">{users.length}</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6">My Goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.length > 0 ? (
          goals.map((goal) => <GoalCard key={goal.id} goal={goal} />)
        ) : (
          <p>No goals found. Create your first goal!</p>
        )}
      </div>
    </div>
  );
}