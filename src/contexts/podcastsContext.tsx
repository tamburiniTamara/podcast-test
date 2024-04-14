import { createContext, useState } from 'react';
import { PodcastObject } from '../interfaces/podcastsDataModel';

export type PodcastContextIf = {
  podcastsData: PodcastObject[];
  setPodcastsData: React.Dispatch<React.SetStateAction<PodcastObject[]>>;
};

export const PodcastsDataContext = createContext<PodcastContextIf | undefined>(
  undefined
);

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

  return (
    <PodcastsDataContext.Provider value={value}>
      {children}
    </PodcastsDataContext.Provider>
  );
};
