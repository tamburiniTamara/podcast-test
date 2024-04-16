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
        <span className="badge">{filteredPodcasts.length}</span>
        <Search setFilteredPodcasts={setFilteredPodcasts} />
      </SearchBar>
      <section className="thumbPodcastContainer sectionContainer">
        {filteredPodcasts.map((podcast, key) => (
          <ThumbPodcast key={podcast?.id ?? key} podcast={podcast} />
        ))}
      </section>
    </>
  );
}
