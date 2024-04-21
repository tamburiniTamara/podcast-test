import { useParams } from 'react-router-dom';
import { useGetPodcast } from '../../hooks/useGetPodcast';
import PodcastAside from '../../components/podcastAside/PodcastAside';
import EpisodesList from '../../components/episodeList/EpisodesList';
import { useGetDetailPodcast } from '../../hooks/useGetDetailPodcast';
import { useIsLoading } from '../../hooks/useIsLoading';

export default function Podcast() {
  const { podcastId } = useParams<{ podcastId: string }>();
  const podcastData = useGetPodcast(podcastId ?? '');
  const detailPodcast = useGetDetailPodcast(podcastId ?? '');
  const isLoading = (detailPodcast?.podcastEpisodes?.length || 0) > 0;

  useIsLoading(isLoading);

  return (
    <section className="sectionContainer flex gap-60">
      {podcastData && <PodcastAside data={podcastData} />}
      {detailPodcast && podcastId && (
        <EpisodesList data={detailPodcast} podcastId={podcastId} />
      )}
    </section>
  );
}
