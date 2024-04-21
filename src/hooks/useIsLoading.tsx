import { useEffect } from 'react';
import { useAppContext } from './useAppContext';

export function useIsLoading(difference: boolean) {
  const appContext = useAppContext();

  useEffect(() => {
    const isLoaded = difference;
    appContext?.setLoading(!isLoaded);
  }, [difference]);
}
