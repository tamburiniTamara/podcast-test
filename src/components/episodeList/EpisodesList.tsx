import './EpisodeList.css';
import { Link } from 'react-router-dom';
import { DetailPodcastObject } from '../../interfaces/detailPodcastModel';

export default function EpisodesList({
  podcastId,
  data
}: {
  podcastId: string;
  data: DetailPodcastObject;
}) {
  const { podcastEpisodes, episodesCount } = data;

  return (
    <section className="episodeListContainer">
      <div className="counter card">Episodes: {episodesCount}</div>
      <ul role="table" className="card episodesList">
        <li className="titleCol col">
          <span className="episodeTitle">Title</span>
          <span className="episodeData">Date</span>
          <span className="episodeData">Duration</span>
        </li>
        {podcastEpisodes ? (
          podcastEpisodes.map((episode) => {
            const { id, title, date, duration } = episode;
            return (
              <li key={id} className="episodeCol col">
                <Link
                  className="flex"
                  to={`/podcast/${podcastId}/episode/${id}`}
                >
                  <span className="episodeTitle">{title}</span>
                  <span className="episodeData">{date.toString()}</span>
                  <span className="episodeData">{duration.toString()}</span>
                </Link>
              </li>
            );
          })
        ) : (
          <h2>There are no episodes available</h2>
        )}
      </ul>
    </section>
  );
}
