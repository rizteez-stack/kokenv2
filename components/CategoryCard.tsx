
import React from 'react';
import { Task } from '../types';

interface CategoryCardProps {
  categoryName: string;
  tasks: Task[];
  completedTasks: Record<string, boolean>;
  onToggleTask: (taskId: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ categoryName, tasks, completedTasks, onToggleTask }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 text-center text-slate-400">
        Bu lig için tüm görevler tamamlandı!
      </div>
    );
  }

  const completedCount = tasks.filter(task => completedTasks[task.id]).length;
  const progress = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0;

  return (
    <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 md:p-6 flex flex-col h-full shadow-lg border border-slate-700">
      <h3 className="text-xl md:text-2xl font-bold font-orbitron text-cyan-300 mb-4">{categoryName}</h3>
      
      {/* Progress Bar */}
      <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4">
        <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}></div>
      </div>

      <ul className="space-y-3 overflow-y-auto flex-grow pr-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center">
            <label className="flex items-center cursor-pointer w-full text-slate-300 hover:text-white transition-colors duration-200">
              <input
                type="checkbox"
                checked={!!completedTasks[task.id]}
                onChange={() => onToggleTask(task.id)}
                className="hidden peer"
              />
              <span className="w-6 h-6 inline-block mr-3 border-2 border-slate-500 rounded-md peer-checked:bg-cyan-500 peer-checked:border-cyan-500 transition-all duration-300 relative flex-shrink-0">
                 <svg className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </span>
              <span className={`flex-1 ${completedTasks[task.id] ? 'line-through text-slate-500' : ''} transition-all duration-300`}>
                {task.description}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryCard;
