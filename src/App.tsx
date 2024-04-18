import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import Podcast from './pages/Podcast';
import PodcastEpisode from './pages/PodcastEpisode';
import { useEffect } from 'react';
import { fetchPodcasts } from './services/fetchPodcasts';
import { useAppContext } from './hooks/useAppContext';
import moment from 'moment';
import { storagePodcasts } from './utils/storagePodcasts';

function App() {
  const { setPodcastsData } = useAppContext();
  const storedPodcasts = storagePodcasts();

  useEffect(() => {
    if (!storedPodcasts) {
      fetchPodcasts().then((data) => {
        setPodcastsData(data);
        localStorage.setItem('podcasts', JSON.stringify(data));
        localStorage.setItem('timestamp', moment().toISOString());
      });
    } else {
      setPodcastsData(storedPodcasts);
    }
  }, [storedPodcasts]);

  return (
    <>
      <Header />
      <main className="App container">
        <Routes>
          <Route index path="/" element={<Main />} />
          <Route path="/podcast/:podcastId">
            <Route index element={<Podcast />} />
            <Route path="episode/:episodeId" element={<PodcastEpisode />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
