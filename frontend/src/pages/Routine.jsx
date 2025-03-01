import { useState } from "react";

const Routine = () => {
  const [tasks, setTasks] = useState([
    { id: 1, time: "07:00 AM", task: "Morning Meditation" },
    { id: 2, time: "08:00 AM", task: "Workout" },
    { id: 3, time: "09:00 AM", task: "Office Work" },
  ]);

  const [newTask, setNewTask] = useState({ time: "", task: "" });

  const addTask = () => {
    if (!newTask.time || !newTask.task) return;
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
    setNewTask({ time: "", task: "" });
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Your Daily Routine</h1>

      {/* Routine List */}
      <div className="max-w-xl mx-auto bg-white p-4 rounded-lg shadow-md">
        {tasks.map((task) => (
          <div key={task.id} className="flex justify-between items-center p-2 border-b">
            <span className="text-lg font-medium">{task.time} - {task.task}</span>
            <button onClick={() => deleteTask(task.id)} className="text-red-500">✖</button>
          </div>
        ))}
      </div>

      {/* Add New Task */}
      <div className="max-w-xl mx-auto mt-4 bg-white p-4 rounded-lg shadow-md">
        <input
          type="time"
          value={newTask.time}
          onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
          className="p-2 border rounded mr-2"
        />
        <input
          type="text"
          placeholder="Enter Task"
          value={newTask.task}
          onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
          className="p-2 border rounded mr-2"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Routine;
