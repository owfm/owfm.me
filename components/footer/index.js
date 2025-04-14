import Link from '@components/link'
import styles from './footer.module.css'

const Footer = ({ slug }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          {/* <span>ollie mansell</span> */}
          <Link legacyBehavior href="mailto:hi@olliemansell.co.uk" external gray>
            email
          </Link>
          <Link legacyBehavior href="https://github.com/owfm" external gray>
            github
          </Link>
          <Link legacyBehavior href="https://medium.com/@oliverwfmansell" external gray>
            medium
          </Link>
          <Link legacyBehavior href="https://www.codewars.com/users/owfm" external gray>
            codewars
          </Link>
          <Link legacyBehavior href="/about" gray>
            about
          </Link>
        </div>
      </footer>
    </>
  )
}

export default Footer
