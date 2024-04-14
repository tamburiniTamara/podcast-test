import { useEffect, useState } from 'react';
import Search from '../components/Search';
import SearchBar from '../components/SearchBar';
import ThumbPodcast from '../components/ThumbPodcast';
import { usePodcastsData } from '../hooks/usePodcastsData';
import { PodcastObject } from '../interfaces/podcastsDataModel';

export default function Main() {
  const { podcastsData } = usePodcastsData();
  const [filteredPodcasts, setFilteredPodcasts] = useState<PodcastObject[]>([]);

  useEffect(() => {
    setFilteredPodcasts(podcastsData);
  }, [podcastsData]);

  return (
    <>
      <SearchBar>
        <span>{filteredPodcasts.length}</span>
        <Search setFilteredPodcasts={setFilteredPodcasts} />
      </SearchBar>
      <section>
        {filteredPodcasts.map((podcast, key) => (
          <ThumbPodcast key={podcast?.id ?? key} podcast={podcast} />
        ))}
      </section>
    </>
  );
}
