import './SearchBar.css';
import { PodcastObject } from '../../interfaces/podcastsDataModel';
import { podcastsMatcher } from '../../utils/podcastsMatcher';

interface Props {
  podcastsCount: number;
  setFilteredPodcasts: React.Dispatch<React.SetStateAction<PodcastObject[]>>;
}

export default function SearchBar({
  podcastsCount,
  setFilteredPodcasts
}: Props) {
  const handleChange = (searchString: string) => {
    const localPodcasts = localStorage.getItem('podcasts');
    const podcasts: PodcastObject[] = localPodcasts
      ? JSON.parse(localPodcasts)
      : [];
    const filteredPodcasts = podcasts.filter((podcast) =>
      podcastsMatcher(podcast, searchString)
    );

    setFilteredPodcasts(filteredPodcasts);
  };
  return (
    <section className="flex flex-jc-e flex-ai-c gap-5">
      <span className="badge">{podcastsCount}</span>

      <input
        type="text"
        placeholder="Search podcasts"
        onChange={(e) => handleChange(e.target.value)}
        className="search"
      />
    </section>
  );
}
