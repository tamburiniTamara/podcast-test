import { useEffect, useState } from 'react';
import { DetailPodcastObject } from '../interfaces/detailPodcastModel';
import { useGetDetailPodcast } from './useGetDetailPodcast';

export function useGetEpisode(podcastId: string, episodeId: string) {
  const [detailPodcast, setDetailPodcast] = useState<
    DetailPodcastObject | undefined
  >();

  useEffect(() => {
    setDetailPodcast(useGetDetailPodcast(podcastId));
  }, [podcastId]);

  const episode = detailPodcast?.podcastEpisodes?.filter(
    (episode) => episode.id.toString() === episodeId.toString()
  )[0];

  return episode;
}
