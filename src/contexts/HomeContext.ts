import { createContext } from 'react';

import type { ZennArticle } from '@/@types/zenn';

export type HomeContextType = {
  zennArticles: ZennArticle[];
};

export const HomeContext = createContext<HomeContextType | undefined>(undefined);
