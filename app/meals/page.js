import React from 'react';

import styles from './page.module.css';
import Link from 'next/link';
import { MealsGrid } from '@/components';
import { getMeals } from '@/lib/meals';

function Meals() {
  const meals = getMeals();

  return (
    <>
      <header className={styles.header}>
        <h1>
          delicious meals, created
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It&apos;s easy and
          fun
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}

export default Meals;
