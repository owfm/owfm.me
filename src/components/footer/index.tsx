import Link from '../link'
import styles from './footer.module.css'

const Footer = ({ slug }: { slug: string }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <Link href="mailto:hi@olliemansell.co.uk" external gray>
            email
          </Link>
          <Link href="https://www.x.com/afewwilliams" external gray>
            @afewwilliams
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
          <Link href="/about" gray>
            about
          </Link>
        </div>
      </footer>
    </>
  )
}

export default Footer
