import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          Your data knows <br /> what’s next.
        </Heading>
        <p className={styles.heroSubtitle}>
          Stop guessing what features your app-customers want. Let data tell you
          on RavenLens. The AI-driven apps improvement platform.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="https://ravenlens.io#early-access">
            Get Early Access
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.secondaryButton)}
            to="https://ravenlens.io#features">
            See features
          </Link>
        </div>
        <div style={{marginTop: '1rem'}}>
          <Link
            className={clsx('button button--secondary button--lg', styles.apiButton)}
            to="/docs/intro">
            Check API
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Stop guessing what features your app-customers want. Let data tell you on RavenLens.">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
