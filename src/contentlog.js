import React from 'react';
import styles from './Content.module.css';

function logIn() {
  return (
    <div className={styles.content}>
      <img className={styles.istockphoto1213337080612x612Icon} alt="" src="istockphoto-1213337080-612x612 1.png" />
      <div className={styles.form}>
        <div className={styles.actionButtons}>
          <div className={styles.haveAnAccountContainer}>
            <span>
              <span>Already have an account?</span>
              <span className={styles.span}>{' '}</span>
            </span>
            <span className={styles.logIn}>Log in</span>
          </div>
          <div className={styles.btnCreateaccount}>
            <div className={styles.createAccount}>Create Account</div>
          </div>
        </div>
        <div className={styles.passwordInput}>
          <div className={styles.password}>Password</div>
          <div className={styles.passwordinp}>
            <div className={styles.input3} />
            <div className={styles.enterYourPassword1}>Enter your Password</div>
          </div>
        </div>
        <div className={styles.emailInput}>
          <div className={styles.email}>Email</div>
          <div className={styles.emailinp}>
            <div className={styles.input4} />
            <div className={styles.enterYourEmail1}>Enter your Email here</div>
          </div>
        </div>
        <div className={styles.fullnameInput}>
          <div className={styles.fullName}>Full Name</div>
          <div className={styles.nameinp}>
            <div className={styles.input5} />
            <div className={styles.enterYourFull1}>Enter your full name here</div>
          </div>
        </div>
      </div>
      <div className={styles.innerImg11} />
      <div className={styles.title}>Sign Up</div>
      <img className={styles.contentChild} alt="" src="Rectangle 9.png" />
    </div>
  );
}

export default logIn;
