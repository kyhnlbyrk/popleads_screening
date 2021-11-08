import styles from './Library.module.css';
import { LoadingIcon, UpButton, DownButton } from './Icons';
import React from 'react';


const Book = ({ title, author, publicationYear }) => {
  return (
    <div className={styles.book}>
      <h2 className={styles.bookTitle}>{title}</h2>
      <p className={styles.bookDescription}>Published by <strong>{author}</strong> in <em>{publicationYear}</em></p>
    </div>
  );
}

const Library = () => {

  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.sort}>
          <span className={styles.sortLabel}>Sort by publication year</span>
          <span>
            <UpButton
              className={styles.arrow}
            />
            <DownButton
              className={styles.arrow}
            />
          </span>
        </div>

        <input
          type="search"
          id="search"
          placeholder="Search books..."
          className={styles.search}
        />
      </header>
      <main>
        <h1>Book library</h1>
        {isLoading ?
          <LoadingIcon />
          :
          //Bu divi silin ve burada render ediniz!
          <div></div>
        }
      </main>
    </div>
  );
};

export default Library;