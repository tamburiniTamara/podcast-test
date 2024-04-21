import { createContext, useState } from 'react';

export type LoadingContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined
);

export const LoadingProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);

  const value = {
    loading,
    setLoading
  };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
