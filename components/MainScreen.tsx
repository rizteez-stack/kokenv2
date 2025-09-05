import React from 'react';
import { useAppState } from '../hooks/useAppState.ts';
import { CATEGORIES_DATA } from '../constants.ts';
import CategoryCard from './CategoryCard.tsx';
import RankVisualizer from './RankVisualizer.tsx';

const MainScreen: React.FC = () => {
  const { currentRank, completedTasks, toggleTask, progressPercentage, justRankedUp } = useAppState();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-3 md:gap-8">
        <div className="md:col-span-1 mb-8 md:mb-0">
          <RankVisualizer currentRank={currentRank} progressPercentage={progressPercentage} justRankedUp={justRankedUp} />
        </div>
        <div className="md:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CATEGORIES_DATA.map((category) => (
            <CategoryCard
              key={category.id}
              categoryName={category.name}
              tasks={category.ranks[currentRank]?.tasks || []}
              completedTasks={completedTasks}
              onToggleTask={toggleTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;