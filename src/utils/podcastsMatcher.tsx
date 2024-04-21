import { PodcastObject } from '../interfaces/podcastsDataModel';

export function podcastsMatcher(podcast: PodcastObject, searchString: string) {
  const { title, author } = podcast;
  const lowerCaseSearchString = searchString.toLowerCase();
  return (
    title.toLowerCase().includes(lowerCaseSearchString) ||
    author.toLowerCase().includes(lowerCaseSearchString)
  );
}
