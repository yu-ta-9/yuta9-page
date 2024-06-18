import { Article } from '@/components/pages/v2/sections/ArticlesSection/ArticlesContainer/Article';
import styles from '@/components/pages/v2/sections/ArticlesSection/ArticlesContainer/index.module.css';

import type { ZennArticle } from '@/@types/zenn';
import type { FC } from 'react';

type Props = {
  zennArticles: ZennArticle[];
  label: string;
  noArticlesLabel: string;
};

export const ArticlesContainer: FC<Props> = ({ zennArticles, label, noArticlesLabel }) => {
  return (
    <div className={styles.articlesContainer}>
      <p className={styles.description}>{label}</p>

      {zennArticles.length === 0 && <p className={styles.noArticles}>{noArticlesLabel}</p>}

      {zennArticles.length !== 0 && (
        <ul className={styles.articleList}>
          {zennArticles.map((zennArticle) => (
            <li key={zennArticle.id} className={styles.article}>
              <Article zennArticle={zennArticle} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
