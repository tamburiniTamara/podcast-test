import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import ThumbPodcast from '../components/ThumbPodcast';
import { useAppContext } from '../hooks/useAppContext';
import { PodcastObject } from '../interfaces/podcastsDataModel';
import { useIsLoading } from '../hooks/useIsLoading';

export default function Main() {
  const { podcastsData } = useAppContext();
  const [filteredPodcasts, setFilteredPodcasts] = useState<PodcastObject[]>([]);

  useIsLoading(podcastsData?.length > 0);

  useEffect(() => {
    setFilteredPodcasts(podcastsData);
  }, [podcastsData]);

  return (
    <>
      <SearchBar
        podcastsCount={filteredPodcasts.length}
        setFilteredPodcasts={setFilteredPodcasts}
      />
      <section className="thumbPodcastContainer sectionContainer">
        {filteredPodcasts.map((podcast, key) => (
          <ThumbPodcast key={podcast?.id ?? key} podcast={podcast} />
        ))}
      </section>
    </>
  );
}
