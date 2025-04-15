import styles from './bio.module.css'

export default function Bio() {
  return (
    <div className={styles.layout}>
      <hr className={styles.horizontal} />
      <div className={styles.container}>
        <img src={'./profile-pic.jpg'} alt={`Ollie Mansell`} />
        <div>
          <h1>Trading | Full Stack JS/TS | Python</h1>
          <h3>
            Currently in the precious metals front office @{' '}
            <a
              className={styles.link}
              target="_blank"
              href="https://www.stonex.com/"
            >
              <strong>StoneX</strong>
            </a>
            .
            <br />
          </h3>
        </div>
      </div>
      <hr className={styles.horizontal} />
    </div>
  )
}
