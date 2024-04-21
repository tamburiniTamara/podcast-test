import { Link } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

export default function Header() {
  const { loading } = useAppContext();

  return (
    <header className="header sectionContainer">
      <Link to={'/'}> Podcaster</Link>
      {loading && <div className="loader" />}
    </header>
  );
}
