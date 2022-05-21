import styles from './bio.module.css'

export default () => {
  return (
    <div className={styles.layout}>
      <hr className={styles.horizontal} />
      <div className={styles.container}>
        <img src={'./profile-pic.jpg'} alt={`Ollie Mansell`} />
        <div>
          <h1>Full Stack JS/TS</h1>
          <h3>
            Currently on the metals front-office development team at{' '}
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
