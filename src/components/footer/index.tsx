import Link from '../link'

const Footer = () => {
  const { version } = require('../../../package.json')

  return (
    <footer className="flex gap-4 items-center px-4 mx-auto mt-auto w-full ">
      <Link href="mailto:hi@olliemansell.co.uk" external gray>
        contact
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
      <Link className="ml-auto" href="/about" gray>
        v{version}
      </Link>
    </footer>
  )
}

export default Footer
