import { useParams } from 'react-router-dom';
import { useGetPodcast } from '../../../hooks/useGetPodcast';
import { useGetEpisode } from '../../../hooks/useGetEpisode';
import PodcastAside from '../../../components/podcastAside/PodcastAside';
import EpisodeCard from '../../../components/episodeCard/EpisodeCard';

export default function PodcastEpisode() {
  const { podcastId, episodeId } = useParams<{
    podcastId: string;
    episodeId: string;
  }>();
  const podcastData = useGetPodcast(podcastId ?? '');
  const episodeData = useGetEpisode(podcastId ?? '', episodeId ?? '');

  return (
    <section className="sectionContainer flex gap-60">
      {podcastData && <PodcastAside data={podcastData} />}
      {episodeData && <EpisodeCard episodeData={episodeData} />}
    </section>
  );
}
