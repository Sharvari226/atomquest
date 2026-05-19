'use client';

export default function GoalCard({ goal }: { goal: any }) {
  const progress = goal.target > 0 ? Math.min(Math.round((goal.actual / goal.target) * 100), 100) : 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">{goal.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{goal.thrust_area}</p>
        </div>
        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
          {goal.status}
        </span>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="mt-4 text-sm">
        <p><strong>Target:</strong> {goal.target} {goal.uom}</p>
        <p><strong>Achieved:</strong> {goal.actual} {goal.uom}</p>
      </div>
    </div>
  );
}