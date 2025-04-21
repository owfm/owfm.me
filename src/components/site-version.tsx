import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SiteVersion() {
  const { version } = require('../../package.json')
  return (
    <div className="text-sm text-center p-0 m-0 px-1">
      <Button asChild variant="outline" className="">
        <Link href="https://github.com/owfm/owfm.me" target="__blank">
          <span className="text-sm text-center p-0 m-0">v{version}</span>
        </Link>
      </Button>
    </div>
  )
}
