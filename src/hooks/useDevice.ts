import { useCallback, useEffect, useState } from 'react';

const query = '(max-width: 1024px)';

type UseDeviceReturns = {
  isSp: boolean;
};

export const useDevice = (): UseDeviceReturns => {
  const [mediaQuery, setMediaQuery] = useState<MediaQueryList | undefined>(undefined);

  // MEMO: deepな変更は検知しないので再pushする必要がある
  const handleListener = useCallback(() => setMediaQuery(window.matchMedia(query)), []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (typeof mediaQuery === 'undefined') {
      setMediaQuery(window.matchMedia(query));
    }
  }, [handleListener, mediaQuery]);

  useEffect(() => {
    mediaQuery?.addEventListener('change', handleListener);

    return () => mediaQuery?.removeEventListener('change', handleListener);
  }, [mediaQuery, handleListener]);

  return {
    isSp: mediaQuery?.matches || false,
  };
};
