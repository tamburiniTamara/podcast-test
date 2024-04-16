import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailPodcast } from '../services/fetchDetailPodcast';
import { DetailPodcastObject } from '../interfaces/detailPodcastModel';
import { useGetPodcast } from '../hooks/useGetPodcast';
import PodcastAside from '../components/PodcastAside';
import EpisodesList from '../components/EpisodesList';

export default function Podcast() {
  const { podcastId } = useParams<{ podcastId: string }>();
  const podcastData = podcastId && useGetPodcast(podcastId);
  const [detailPodcast, setDetailPodcast] = useState<
    DetailPodcastObject | undefined
  >();

  useEffect(() => {
    fetchDetailPodcast(podcastId!).then(
      (data) => data && setDetailPodcast(data)
    );
  }, [podcastId]);

  return (
    <section className="sectionContainer podcastContiner flex gap-20">
      {podcastData && <PodcastAside data={podcastData} />}
      {detailPodcast?.podcastEpisodes && podcastId && (
        <EpisodesList data={detailPodcast} podcastId={podcastId} />
      )}
    </section>
  );
}
