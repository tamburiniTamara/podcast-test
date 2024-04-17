import { useParams } from 'react-router-dom';
import { useGetPodcast } from '../hooks/useGetPodcast';
import { useGetEpisode } from '../hooks/useGetEpisode';
import PodcastAside from '../components/PodcastAside';
import EpisodeCard from '../components/EpisodeCard';

export default function PodcastEpisode() {
  const { podcastId, episodeId } = useParams<{
    podcastId: string;
    episodeId: string;
  }>();
  const podcastData = podcastId && useGetPodcast(podcastId);
  const episodeData =
    podcastId && episodeId && useGetEpisode(podcastId, episodeId);

  return (
    <section className="sectionContainer podcastContiner flex gap-20">
      {podcastData && <PodcastAside data={podcastData} />}
      {episodeData && <EpisodeCard episodeData={episodeData} />}
    </section>
  );
}
