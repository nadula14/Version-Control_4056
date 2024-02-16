import React from 'react';
import styles from './Frame.module.css';

function Frame() {
  return (
    <div className={styles.frameParent}>
      <div className={styles.vectorWrapper}>
        <img className={styles.frameChild} alt="" src="Rectangle 4.png" />
      </div>
      <div className={styles.frameItem} />
      <div className={styles.freeRoamSl}>FREE ROAM SL</div>
      <div className={styles.welcomeToFreeContainer}>
        <p className={styles.yourAdventureStarts}>
          Welcome to Free Roam SL, your ultimate travel companion for exploring the captivating island paradise of Sri Lanka. From pristine beaches and lush green landscapes to ancient temples and vibrant markets, we are here to be your guide, unlocking the secrets and wonders that this remarkable destination has to offer. Whether you're an adventurer seeking thrilling experiences, a history enthusiast delving into the island's rich heritage, or simply someone yearning for relaxation in breathtaking surroundings, Free Roam SL is your doorway to unforgettable journeys. Join us as we navigate through the hidden gems, local flavors, and inspiring destinations that make Sri Lanka a dream destination for every traveler.
        </p>
        <p className={styles.yourAdventureStarts}>Your adventure starts here !!.</p>
      </div>
      <img className={styles.frameInner} alt="" src="Rectangle 8.svg" />
      <div className={styles.startRoaming}>START ROAMING</div>
    </div>
  );
}

export default Frame;
