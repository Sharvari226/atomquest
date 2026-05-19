'use client';
import { useState } from 'react';
import GoalEditor from '../../../components/GoalEditor';
import api from '../../../lib/axios';

export default function NewGoal() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thrustArea, setThrustArea] = useState('');
  const [uom, setUom] = useState('NUMERIC');
  const [target, setTarget] = useState('');
  const [weightage, setWeightage] = useState(20);
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await api.post('/goals/', {
        title,
        description,
        content,
        thrust_area: thrustArea,
        uom,
        target: parseFloat(target),
        weightage: parseInt(weightage.toString()),
        employee_id: 'emp1'   // Demo employee
      });
      alert("Goal created successfully!");
      window.location.href = '/dashboard';
    } catch (error) {
      alert("Error creating goal");
    } finally {
      setLoading(false);
    }
  };

  const getAISuggestions = async () => {
    try {
      const res = await api.post('/goals/smart-suggestions?role=Software Engineer&department=Engineering');
      setSuggestions(res.data);
    } catch (e) {
      alert("AI Suggestion failed. Make sure LangChain is configured.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Create New Goal</h1>

      <button 
        onClick={getAISuggestions}
        className="mb-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl"
      >
        ✨ Get AI Smart Suggestions
      </button>

      <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <div>
          <label className="block text-sm font-medium mb-2">Goal Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
            placeholder="Increase quarterly sales by 25%"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label>Thrust Area</label>
            <select value={thrustArea} onChange={(e) => setThrustArea(e.target.value)} className="w-full border rounded-xl px-4 py-3">
              <option value="">Select Area</option>
              <option value="Revenue Growth">Revenue Growth</option>
              <option value="Customer Satisfaction">Customer Satisfaction</option>
              <option value="Process Improvement">Process Improvement</option>
              <option value="Innovation">Innovation</option>
            </select>
          </div>

          <div>
            <label>UoM</label>
            <select value={uom} onChange={(e) => setUom(e.target.value)} className="w-full border rounded-xl px-4 py-3">
              <option value="NUMERIC">Numeric</option>
              <option value="PERCENTAGE">Percentage</option>
              <option value="TIMELINE">Timeline</option>
              <option value="ZERO">Zero-based</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label>Target</label>
            <input type="number" value={target} onChange={(e) => setTarget(e.target.value)} className="w-full border rounded-xl px-4 py-3" />
          </div>
          <div>
            <label>Weightage (%)</label>
            <input type="number" value={weightage} onChange={(e) => setWeightage(parseInt(e.target.value))} className="w-full border rounded-xl px-4 py-3" min="10" max="100" />
          </div>
        </div>

        {/* Notion Style Editor */}
        <div>
          <label className="block text-sm font-medium mb-2">Detailed Description & Subtasks (with checkboxes)</label>
          <GoalEditor initialContent={content} onChange={setContent} />
        </div>

        <button 
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Creating Goal..." : "Submit Goal for Manager Approval"}
        </button>
      </div>
    </div>
  );
}