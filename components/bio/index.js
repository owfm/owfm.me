import styles from './bio.module.css'

export default () => {
  return (
    <div className={styles.layout}>
      <hr className={styles.horizontal} />
      <div className={styles.container}>
        <img src={'./profile-pic.jpg'} alt={`Ollie Mansell`} />
        <div>
          <span>Fullstack Javascript, Node and Python Engineer</span>
          <br />
          <p>Currently looking for new opportunities</p>
        </div>
      </div>
      <hr className={styles.horizontal} />
    </div>
  )
}
