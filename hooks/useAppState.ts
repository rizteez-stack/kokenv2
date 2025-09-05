
import { useState, useEffect, useCallback } from 'react';
import { Rank } from '../types';
import { CATEGORIES_DATA } from '../constants';

const APP_STATE_KEY = 'kokenSistemiAppState';

interface AppState {
  completedTasks: Record<string, boolean>;
  currentRank: Rank;
}

const getInitialState = (): AppState => {
  try {
    const item = window.localStorage.getItem(APP_STATE_KEY);
    if (item) {
      const parsed = JSON.parse(item);
      // Basic validation
      if (typeof parsed.currentRank === 'number' && typeof parsed.completedTasks === 'object') {
        return parsed;
      }
    }
  } catch (error) {
    console.error("Error reading from localStorage", error);
  }
  return {
    completedTasks: {},
    currentRank: Rank.Demir,
  };
};

export const useAppState = () => {
  const [appState, setAppState] = useState<AppState>(getInitialState);
  const [justRankedUp, setJustRankedUp] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(APP_STATE_KEY, JSON.stringify(appState));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [appState]);

  const checkForRankUp = useCallback(() => {
    const { currentRank, completedTasks } = appState;
    if (currentRank === Rank.Challenger) return;

    const tasksForCurrentRank = CATEGORIES_DATA.flatMap(category => 
        category.ranks[currentRank]?.tasks || []
    );

    const allTasksCompleted = tasksForCurrentRank.every(task => completedTasks[task.id]);

    if (allTasksCompleted) {
      setAppState(prev => ({
        ...prev,
        currentRank: prev.currentRank + 1
      }));
      setJustRankedUp(true);
      setTimeout(() => setJustRankedUp(false), 2000); // Reset after animation duration
    }
  }, [appState]);

  const toggleTask = (taskId: string) => {
    setAppState(prev => {
      const newCompletedTasks = { ...prev.completedTasks };
      if (newCompletedTasks[taskId]) {
        delete newCompletedTasks[taskId];
      } else {
        newCompletedTasks[taskId] = true;
      }
      return { ...prev, completedTasks: newCompletedTasks };
    });
  };

  useEffect(() => {
    checkForRankUp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState.completedTasks]);

  const { currentRank, completedTasks } = appState;
  
  const tasksForCurrentRank = CATEGORIES_DATA.flatMap(category => 
      category.ranks[currentRank]?.tasks || []
  );

  const completedTasksForCurrentRank = tasksForCurrentRank.filter(task => completedTasks[task.id]);

  const progressPercentage = tasksForCurrentRank.length > 0
    ? (completedTasksForCurrentRank.length / tasksForCurrentRank.length) * 100
    : 0;

  return {
    currentRank,
    completedTasks,
    toggleTask,
    progressPercentage,
    justRankedUp
  };
};
