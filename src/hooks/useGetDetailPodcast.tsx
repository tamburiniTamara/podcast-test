import { useStoragePodcast } from './useStoragePodcast';
import { fetchDetailPodcast } from '../services/fetchDetailPodcast';
import moment from 'moment';

export function useGetDetailPodcast(podcastId: string) {
  const storedPodcast = podcastId && useStoragePodcast(podcastId);

  if (!storedPodcast && podcastId) {
    fetchDetailPodcast(podcastId!)
      .then((data) => {
        localStorage.setItem(`podcast-${podcastId}`, JSON.stringify(data));
        localStorage.setItem(`timestamp-${podcastId}`, moment().toISOString());
        return data;
      })
      .catch((error) => console.error('Error loading detail podcast:', error));
  }
  return storedPodcast;
}
