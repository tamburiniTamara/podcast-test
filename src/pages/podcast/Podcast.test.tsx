import { render, screen } from '@testing-library/react';
import { AppContext, AppContextType } from '../../contexts/AppContext';
import Podcast from './Podcast';
import * as router from 'react-router-dom';
import { podcastsDataMock } from '../../utils/mocks/PodcastsDataMock';
import {
  LoadingContext,
  LoadingContextType
} from '../../contexts/LoadingContext';
import { detailPodcastDataMock } from '../../utils/mocks/DetailPodcastDataMock';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}));

jest.mock('../../hooks/useGetPodcast', () => ({
  useGetPodcast: jest.fn()
}));

jest.mock('../../hooks/useGetDetailPodcast', () => ({
  useGetDetailPodcast: jest.fn()
}));

function renderComponent(
  podcastsData: AppContextType,
  loading: LoadingContextType
) {
  return render(
    <router.MemoryRouter>
      <AppContext.Provider value={podcastsData}>
        <LoadingContext.Provider value={loading}>
          <Podcast />
        </LoadingContext.Provider>
      </AppContext.Provider>
    </router.MemoryRouter>
  );
}
describe('Podcast component test', () => {
  beforeEach(() => {
    jest.spyOn(router, 'useParams').mockReturnValue({ podcastId: 'podcastId' });
  });

  it('renders PodcastAside when podcastData is available', async () => {
    const mockUseGetPodcast = jest.fn(() => podcastsDataMock);
    require('../../hooks/useGetPodcast').useGetPodcast.mockImplementation(
      mockUseGetPodcast
    );

    renderComponent(
      { podcastsData: [podcastsDataMock], setPodcastsData: jest.fn() },
      { loading: true, setLoading: jest.fn() }
    );

    expect(
      await screen.getByText('The Joe Budden Podcast')
    ).toBeInTheDocument();
  });

  it('renders EpisodesList when detailPodcast is available', async () => {
    const mockUseGetDetailPodcast = jest.fn(() => detailPodcastDataMock);
    require('../../hooks/useGetDetailPodcast').useGetDetailPodcast.mockImplementation(
      mockUseGetDetailPodcast
    );

    renderComponent(
      { podcastsData: [podcastsDataMock], setPodcastsData: jest.fn() },
      { loading: true, setLoading: jest.fn() }
    );

    expect(await screen.getByText('Episodes: 1')).toBeInTheDocument();
  });
});
