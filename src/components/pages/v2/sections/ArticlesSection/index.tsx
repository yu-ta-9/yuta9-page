import { useTranslation } from 'next-i18next';
import { useMemo, type FC } from 'react';

import { ArticlesContainer } from '@/components/pages/v2/sections/ArticlesSection/ArticlesContainer';
import styles from '@/components/pages/v2/sections/ArticlesSection/index.module.css';
import { useHomeContext } from '@/hooks/useHomeContext';

export const ArticlesSection: FC = () => {
  const { t } = useTranslation('common');

  const { zennArticles } = useHomeContext();

  const recentZennArticles = useMemo(() => zennArticles.slice(0, 3), [zennArticles]);
  const moreLikedZennArticles = useMemo(
    () =>
      zennArticles
        .filter((zennArticle) => zennArticle.liked_count > 0)
        .sort((a, b) => (a.liked_count > b.liked_count ? -1 : 1))
        .slice(0, 3),
    [zennArticles],
  );

  return (
    <div className={styles.sectionArticles}>
      <ArticlesContainer
        zennArticles={recentZennArticles}
        label={t('articles.recent.label')}
        noArticlesLabel={t('articles.recent.noArticles')}
      />

      <ArticlesContainer
        zennArticles={moreLikedZennArticles}
        label={t('articles.orderByLikes.label')}
        noArticlesLabel={t('articles.orderByLikes.noArticles')}
      />
    </div>
  );
};
