import moment from 'moment';

export function formatDetailPodcastObject(podcast) {
  const podcastInfo = podcast.results.shift();
  const podcastEpisodes = podcast.results.map((episode) => {
    return {
      id: episode.trackId,
      title: episode.trackName,
      date: moment(episode.releaseDate).format('DD/M/YYYY'),
      duration: moment(episode.trackTimeMillis).format('hh:mm:ss'),
      url: episode.episodeUrl,
      description: episode.description
    };
  });

  return {
    detailImage: podcastInfo?.artworkUrl600 ?? null,
    episodesCount: podcastInfo?.trackCount,
    podcastEpisodes
  };
}
