import { PodcastObject } from '../interfaces/podcastsDataModel';

export default function PodcastAside({ data }: { data: PodcastObject }) {
  const { id, image, title, author, description } = data;
  return (
    <aside className="asidePodcast card flex flex-fd-c gap-10">
      <img className="asideImage" src={image} alt={`Podcast ${title} image`} />
      <section className="asideSection">
        <h3>{title}</h3>
        <i>by: {author}</i>
      </section>
      <section className="asideSection">
        <h3>Description</h3>
        <p>{description}</p>
      </section>
    </aside>
  );
}
