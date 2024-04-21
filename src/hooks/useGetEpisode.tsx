import { useGetDetailPodcast } from './useGetDetailPodcast';

export function useGetEpisode(podcastId: string, episodeId: string) {
  const detailPodcast = useGetDetailPodcast(podcastId);

  const episode =
    detailPodcast &&
    detailPodcast.podcastEpisodes?.filter(
      (episode) => episode.id.toString() === episodeId.toString()
    )[0];

  return episode;
}
