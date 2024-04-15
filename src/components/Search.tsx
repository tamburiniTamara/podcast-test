import { PodcastObject } from '../interfaces/podcastsDataModel';
import { podcastsMatcher } from '../utils/podcastsMatcher';

interface Props {
  setFilteredPodcasts: React.Dispatch<React.SetStateAction<PodcastObject[]>>;
}

export default function Search({ setFilteredPodcasts }: Props) {
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
    <input
      type="text"
      placeholder="Search podcasts"
      onChange={(e) => handleChange(e.target.value)}
      className="search"
    />
  );
}
