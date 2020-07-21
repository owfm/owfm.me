import Link from '@components/link'
import styles from './footer.module.css'

const Footer = ({ slug }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <Link href="mailto:hi@olliemansell.co.uk" external gray>
            email
          </Link>
          <Link href="https://github.com/owfm" external gray>
            github
          </Link>
          <Link href="https://medium.com/@oliverwfmansell" external gray>
            medium
          </Link>
        </div>
        {/* <Link href="/feed.xml" external gray>
          rss
        </Link> */}
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
