import { storagePodcasts } from '../utils/storagePodcasts';
import { fetchDetailPodcast } from '../services/fetchDetailPodcast';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { DetailPodcastObject } from '../interfaces/detailPodcastModel';

export function useGetDetailPodcast(
  podcastId: string
): DetailPodcastObject | undefined {
  const [data, setData] = useState<DetailPodcastObject | undefined>();
  const storedPodcast = storagePodcasts(podcastId);

  useEffect(() => {
    if (!storedPodcast && podcastId) {
      fetchDetailPodcast(podcastId!)
        .then((data) => {
          localStorage.setItem(`podcast-${podcastId}`, JSON.stringify(data));
          localStorage.setItem(
            `timestamp-${podcastId}`,
            moment().toISOString()
          );
          return setData(data);
        })
        .catch((error) =>
          console.error('Error loading detail podcast:', error)
        );
    }
    return setData(storedPodcast);
  }, []);
  return data;
}
