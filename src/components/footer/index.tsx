import Link from '../link'
import SiteVersion from '../site-version'

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-4 mx-auto mt-auto w-full">
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
      <SiteVersion />
    </footer>
  )
}

export default Footer
