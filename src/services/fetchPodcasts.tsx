import { PodcastObject } from '../interfaces/podcastsDataModel';
import { formatPodcastObject } from '../mappers/podcastMapper';

export async function fetchPodcasts() {
  try {
    const response = await fetch(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
    );
    const data = await response.json();

    return data?.feed?.entry?.map((podcast: PodcastObject) =>
      formatPodcastObject(podcast)
    );
  } catch (error) {
    console.log('Error fetching the podcasts: ', error);
    return null;
  }
}
