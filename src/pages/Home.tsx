import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [description, setDescription] = useState('');

  const handleDateChange = (e) => setDate(e.target.value);
  const handleHoursChange = (e) => setHours(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
      <div className="text-center">
        <form className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Time Sheet</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input type="date" className="w-full mt-1 p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Hours Worked</label>
            <input type="number" className="w-full mt-1 p-2 border rounded" placeholder="Enter hours" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea className="w-full mt-1 p-2 border rounded" placeholder="Enter description"></textarea>
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            <button type="reset" className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
          </div>
        </form>
        <h1 className="text-4xl font-bold text-white mb-4">pop</h1>
        <p className="text-slate-400">Your project is ready! Start editing in the chat.</p>
        <p className="text-slate-500 mt-4 text-sm">
          Note: Use <code className="bg-slate-700 px-2 py-1 rounded">Link</code> from react-router-dom for navigation, not <code className="bg-slate-700 px-2 py-1 rounded">a</code> tags.
        </p>
      </div>
    </div>
  )
}
