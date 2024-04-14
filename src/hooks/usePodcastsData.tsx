import { useContext } from 'react';
import { PodcastsDataContext } from '../contexts/podcastsContext';

export function usePodcastsData() {
  const context = useContext(PodcastsDataContext);

  if (!context) {
    throw new Error('Error in usePodcastsData hook');
  }
  return context;
}
