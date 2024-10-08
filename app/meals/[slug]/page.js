import React from 'react';

import styles from './page.module.css';
import { getMeal } from '@/lib/meals';
import Image from 'next/image';

function MealDetails({ params }) {
  console.log(params.slug);
  const meal = getMeal(params.slug);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.alt} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>meal.creator</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={styles.main}>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        />
      </main>
    </>
  );
}

export default MealDetails;
