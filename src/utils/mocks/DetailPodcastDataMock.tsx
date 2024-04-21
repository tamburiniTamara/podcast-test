import moment from 'moment';
import { DetailPodcastObject } from '../../interfaces/detailPodcastModel';

export const detailPodcastDataMock: DetailPodcastObject = {
  detailImage:
    'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
  episodesCount: 1,
  podcastEpisodes: [
    {
      id: '1000609059022',
      title: 'Episode 618 | "They Got Us"',
      date: moment('2022-01-01T10:00:00Z'),
      duration: moment('2022-01-01T10:00:00Z'),
      url: 'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_618.mp3?dest-id=2422538',
      description: 'test description'
    }
  ]
};
