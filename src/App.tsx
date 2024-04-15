import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import Podcast from './pages/Podcast';
import PodcastEpisode from './pages/PodcastEpisode';
import { useEffect } from 'react';
import { fetchPodcasts } from './services/podcasts/fetchPodcasts';
import { usePodcastsData } from './hooks/usePodcastsData';
import moment from 'moment';
// import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const { setPodcastsData } = usePodcastsData();

  useEffect(() => {
    const localPodcasts = localStorage?.getItem('podcasts');
    const localTimestamp = localStorage?.getItem('timestamp');

    // TODO move to custom hook useLocalStorage
    const hasLocalStorageData =
      localPodcasts !== null && localTimestamp !== null;
    const hours = 24;
    const now = moment();
    const up24hours =
      hasLocalStorageData && now.diff(moment(localTimestamp), 'hours') > hours;

    if (!hasLocalStorageData || up24hours) {
      fetchPodcasts().then((data) => {
        setPodcastsData(data);
        localStorage.setItem('podcasts', JSON.stringify(data));
        localStorage.setItem('timestamp', moment().toISOString());
      });
    } else {
      setPodcastsData(JSON.parse(localPodcasts));
    }
  }, []);

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
