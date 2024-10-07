import React from 'react';

import styles from './loading.module.css';

function MealsLoadingPage() {
  return <p className={styles.loading}>fetching meals...</p>;
}

export default MealsLoadingPage;
