import styles from './bio.module.css'

export default () => {
  return (
    <div className={styles.layout}>
      <hr className={styles.horizontal} />
      <div className={styles.container}>
        <img src={'./profile-pic.jpg'} alt={`Ollie Mansell`} />
        <div>
          <h1>Full Stack Javascript, Node and Python Engineer</h1>
          <h3>
            Currently on the metals development team at <strong>StoneX</strong>.
            <br />
          </h3>
        </div>
      </div>
      <hr className={styles.horizontal} />
    </div>
  )
}
