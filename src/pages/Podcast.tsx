import { useParams } from 'react-router-dom';

export default function Podcast() {
  const { podcastId } = useParams<{ podcastId: string }>();

  return <>Podcast {podcastId}</>;
}
