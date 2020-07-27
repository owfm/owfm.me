import styles from './bio.module.css'

export default () => {
  return (
    <div className={styles.layout}>
      <hr className={styles.horizontal} />
      <div className={styles.container}>
        <img src={'./profile-pic.jpg'} alt={`Ollie Mansell`} />
        <div>
          <h1>Fullstack Javascript, Node and Python Engineer</h1>
          <h3>
            Currently looking for new EdTech opportunities in London. <br />
          </h3>
        </div>
      </div>
      <hr className={styles.horizontal} />
    </div>
  )
}
