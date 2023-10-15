import styles from './MainNavigation.module.css'

function MainNavigation () {
  return (
    <header className={styles.header}>
      <div className={styles.title}>Missing Person Status Tracker</div>
    </header>
  );
}

export default MainNavigation;