import { Link } from 'react-router-dom';
import { useLoadingContext } from '../hooks/useLoadingContext';

export default function Header() {
  const { loading } = useLoadingContext();

  return (
    <header className="header sectionContainer">
      <Link to={'/'}> Podcaster</Link>
      {loading && <div className="loader" />}
    </header>
  );
}
