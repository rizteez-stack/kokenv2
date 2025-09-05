
import React from 'react';
import { Rank } from '../types';
import { RANK_VISUALS } from '../constants';

interface RankVisualizerProps {
  currentRank: Rank;
  progressPercentage: number;
  justRankedUp: boolean;
}

const RankVisualizer: React.FC<RankVisualizerProps> = ({ currentRank, progressPercentage, justRankedUp }) => {
  const visualData = RANK_VISUALS[currentRank];
  const { name, Icon, color, shadowColor } = visualData;
  const circumference = 2 * Math.PI * 55; // Circle radius is 55
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div className="sticky top-0 z-10 flex flex-col items-center p-4 bg-gray-900/50 backdrop-blur-md rounded-b-2xl md:rounded-2xl shadow-lg">
      <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
        {/* Progress Circle */}
        <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="55"
            stroke="currentColor"
            strokeWidth="5"
            className="text-slate-700"
            fill="transparent"
          />
          <circle
            cx="60"
            cy="60"
            r="55"
            stroke="currentColor"
            strokeWidth="5"
            className={color}
            fill="transparent"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              transition: 'stroke-dashoffset 0.5s ease-out',
            }}
          />
        </svg>

        {/* Rank Icon */}
        <div className={`relative w-3/4 h-3/4 ${color}`}>
            <Icon className={`w-full h-full transition-all duration-500 ${justRankedUp ? 'animate-pulse scale-125' : 'scale-100'} drop-shadow-lg ${shadowColor.replace('shadow-', 'drop-shadow-')}`}/>
             {justRankedUp && (
                <div className={`absolute inset-0 ${color} rounded-full animate-ping`}></div>
            )}
        </div>
      </div>
      <h2 className={`mt-4 text-3xl md:text-4xl font-orbitron font-bold ${color} transition-colors duration-500`}>
        {name}
      </h2>
      <p className="text-slate-300 text-lg">{Math.round(progressPercentage)}%</p>
      {justRankedUp && (
         <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 animate-bounce">
            LİG YÜKSELDİ!
         </p>
      )}
    </div>
  );
};

export default RankVisualizer;
