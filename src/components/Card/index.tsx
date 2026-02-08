import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

interface CardProps {
  title: string;
  description: string;
  to: string;
}

export default function Card({title, description, to}: CardProps): JSX.Element {
  return (
    <div className={clsx('col col--6 margin-bottom--lg')}>
      <Link className={clsx('card padding--lg', styles.cardContainer)} to={to}>
        <h2 className={clsx('text--truncate', styles.cardTitle)} title={title}>
          📄️ {title}
        </h2>
        <p
          className={clsx('text--truncate', styles.cardDescription)}
          title={description}>
          {description}
        </p>
      </Link>
    </div>
  );
}
