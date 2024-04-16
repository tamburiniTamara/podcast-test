import moment from 'moment';

export interface DetailPodcastObject {
  detailImage: string;
  episodesCount: number;
  podcastEpisodes?: EpisodePodcastObject[];
}

export interface EpisodePodcastObject {
  id: string;
  title: string;
  date: moment.Moment;
  duration: moment.Moment;
  url: string;
  description: string;
}
