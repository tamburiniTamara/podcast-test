import { usePodcastsData } from './usePodcastsData';

export function useGetPodcast(id: string) {
  const { podcastsData } = usePodcastsData();

  return podcastsData.filter((podcast) => podcast.id === id)[0];
}
