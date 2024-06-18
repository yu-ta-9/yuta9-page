import { useContext } from 'react';

import { HomeContext } from '@/contexts/HomeContext';

import type { HomeContextType } from '@/contexts/HomeContext';

export const useHomeContext = (): HomeContextType => {
  const value = useContext(HomeContext);
  if (value === undefined) throw new Error('No value in HomeContext');

  return {
    ...value,
  };
};
