import { createContext, useContext, useState } from 'react';
import { PodcastObject } from '../interfaces/podcastsDataModel';

export type AppContextType = {
  podcastsData: PodcastObject[];
  setPodcastsData: React.Dispatch<React.SetStateAction<PodcastObject[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const PodcastsDataProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [podcastsData, setPodcastsData] = useState<PodcastObject[]>([]);
  const [loading, setLoading] = useState(false);

  const value = {
    podcastsData,
    setPodcastsData,
    loading,
    setLoading
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
