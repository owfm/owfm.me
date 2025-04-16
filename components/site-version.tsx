import Link from 'next/link'

export default function SiteVersion() {
  const { version } = require('../../package.json')
  return (
    <div className="text-sm text-center font-mono p-0 m-0 border px-1">
      <Button
        asChild
        variant="outline"
        className="border-none shadow-none bg-background hover:bg-background"
      >
        <Link href="https://github.com/owfm/owfm.me" target="__blank">
          <span className="text-sm text-center font-mono p-0 m-0">
            v.{version}
          </span>
        </Link>
      </Button>
    </div>
  )
}
