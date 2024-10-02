import styles from './footerStyles.module.css';

function footer() {
  return ( 
    <section id="footer" className={styles.container}>
        <p>&copy; 2024 Yonis Abdulahi<br />
    ALL rights reserved.
        </p>
    </section>
  );
}

export default footer