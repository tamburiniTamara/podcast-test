import { createContext, useState } from 'react';
import { PodcastObject } from '../interfaces/podcastsDataModel';

export type AppContextType = {
  podcastsData: PodcastObject[];
  setPodcastsData: React.Dispatch<React.SetStateAction<PodcastObject[]>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const PodcastsDataProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [podcastsData, setPodcastsData] = useState<PodcastObject[]>([]);

  const value = {
    podcastsData,
    setPodcastsData
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
