import { useAppContext } from './useAppContext';

export function useGetPodcast(id: string) {
  const { podcastsData } = useAppContext();

  return podcastsData.filter((podcast) => podcast.id === id)[0];
}
