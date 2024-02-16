import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.css';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '3rem',
  fontStyle: 'italic',
  fontWeight: 'bold',
  margin: '0',
};



export default function HomePage() {
  return (
    <div className='home-container' style={containerStyle}>
      <div style={headingStyle}>Free Roam SL</div>
      <p>
        Welcome to Free Roam SL, your ultimate travel companion for exploring the captivating island paradise of Sri Lanka.
        From pristine beaches and lush green landscapes to ancient temples and vibrant markets, we are here to be your guide,
        unlocking the secrets and wonders that this remarkable destination has to offer. Whether you're an adventurer seeking
        thrilling experiences, a history enthusiast delving into the island's rich heritage, or simply someone yearning for
        relaxation in breathtaking surroundings, Free Roam SL is your doorway to unforgettable journeys. Join us as we navigate
        through the hidden gems, local flavors, and inspiring destinations that make Sri Lanka a dream destination for every
        traveler.
      </p>
      <span>Your adventure </span><button>starts here!!</button>
      
    </div>
  );
}
