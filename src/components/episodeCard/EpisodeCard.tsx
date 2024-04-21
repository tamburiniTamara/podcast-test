import './EpisodeCard.css';
import { Interweave } from 'interweave';
import { EmailMatcher, UrlMatcher } from 'interweave-autolink';
import { EpisodePodcastObject } from '../../interfaces/detailPodcastModel';

export default function EpisodeCard({
  episodeData
}: {
  episodeData: EpisodePodcastObject;
}) {
  const { title, url, description } = episodeData;

  return (
    <section className="card episodeCard">
      <h3>{title}</h3>
      {description && (
        <Interweave
          newWindow={true}
          matchers={[new EmailMatcher('email'), new UrlMatcher('url')]}
          noWrap
          content={description}
        />
      )}
      <audio className="podcastAudio" controls>
        <source src={url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
}
