import { useEffect } from 'react';
import { useLoadingContext } from './useLoadingContext';

export function useIsLoading(difference: boolean) {
  const loadingContext = useLoadingContext();

  useEffect(() => {
    const isLoaded = difference;
    loadingContext?.setLoading(!isLoaded);
  }, [difference]);
}
