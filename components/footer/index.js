import Link from '@components/link'
import styles from './footer.module.css'

const Footer = ({ slug }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          {/* <span>ollie mansell</span> */}
          <Link href="mailto:hi@olliemansell.co.uk" external gray>
            email
          </Link>
          <Link href="https://github.com/owfm" external gray>
            github
          </Link>
          <Link href="https://medium.com/@oliverwfmansell" external gray>
            medium
          </Link>
          <Link href="https://www.codewars.com/users/owfm" external gray>
            codewars
          </Link>
        </div>
      </footer>
      {/* <footer className={styles.footer}>
        <div />
        Forked from Dan Abramov's whatthefuck.is
        <div />
      </footer> */}
    </>
  )
}

export default Footer
