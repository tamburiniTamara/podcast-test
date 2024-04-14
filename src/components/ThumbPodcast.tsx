import { Link } from 'react-router-dom';
import { PodcastObject } from '../interfaces/podcastsDataModel';

export default function ThumbPodcast({ podcast }: { podcast: PodcastObject }) {
  const { id, image, title, author } = podcast;
  return (
    <Link to={`/podcast/${id}`}>
      <figure>
        <img src={image} alt={`Podcast ${title} image`} />
        <figcaption>
          <h4>{title}</h4>
          <p>Author: {author}</p>
        </figcaption>
      </figure>
    </Link>
  );
}
