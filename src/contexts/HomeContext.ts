import { createContext } from 'react';

import type { ZennArticle } from '@/@types/zenn';
import type { Data } from '@/@types/data';

export type HomeContextType = {
  data: {
    zenn: ZennArticle[];
    works: Data[];
    musics: Data[];
  };
};

export const HomeContext = createContext<HomeContextType | undefined>(undefined);
