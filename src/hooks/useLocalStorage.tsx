import { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import { PodcastsDataContext } from '../contexts/podcastsContext';

// TODO
export function useLocalStorage() {
  const context = useContext(PodcastsDataContext);

  if (!context) {
    throw new Error('Error in usePodcastsData hook');
  }
  return context;
}
