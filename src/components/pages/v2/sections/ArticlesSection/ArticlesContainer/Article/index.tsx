import { IconZenn } from '@/components/icons/Zenn';
import styles from '@/components/pages/v2/sections/ArticlesSection/ArticlesContainer/Article/index.module.css';
import { formatYYMMDD } from '@/components/utils/date';

import type { ZennArticle } from '@/@types/zenn';
import type { FC } from 'react';

type Props = {
  zennArticle: ZennArticle;
};

export const Article: FC<Props> = ({ zennArticle }) => {
  return (
    <a
      className={styles.article}
      href={`https://zenn.dev/${zennArticle.path}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className={styles.thumbnail}>
        <span className={styles.logo}>
          <IconZenn width={24} height={24} />
        </span>

        <span className={styles.emoji}>{zennArticle.emoji}</span>
      </div>
      <div className={styles.body}>
        <p className={styles.title}>{zennArticle.title}</p>
        <div className={styles.meta}>
          <span>{formatYYMMDD(new Date(zennArticle.published_at))}</span>
          <span>{`♡ ${zennArticle.liked_count}`}</span>
        </div>
      </div>
    </a>
  );
};
