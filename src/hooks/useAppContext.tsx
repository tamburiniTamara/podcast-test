import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('Error in usePodcastsData hook');
  }
  return context;
}
