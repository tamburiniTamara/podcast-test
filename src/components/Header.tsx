import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header sectionContainer">
      <Link to={'/'}> Podcaster</Link>
      <div className="loader" />
    </header>
  );
}
