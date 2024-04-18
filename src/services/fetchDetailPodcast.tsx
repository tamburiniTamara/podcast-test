import { formatDetailPodcastObject } from '../mappers/detailPodcastMapper';

export async function fetchDetailPodcast(id: string) {
  try {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
      )}`
    );
    const data = await response.json();

    const podcastParsed = JSON.parse(data?.contents);
    return formatDetailPodcastObject(podcastParsed);
  } catch (error) {
    console.log('Error fetching the details podcast: ', error);
    return undefined;
  }
}
