import { useEffect } from 'react';
import { useAppContext } from './useAppContext';

export function useIsLoading(difference: boolean) {
  const appContext = useAppContext();
  console.log('difference', difference);

  useEffect(() => {
    const isLoaded = difference;
    appContext?.setLoading(!isLoaded);
  }, [difference]);
}
