import Link from 'next/link'
import FlashingGreenDot from './flashing-green-dot'
import { Table, TableBody, TableCell, TableRow } from './ui/table'

export default function SiteInfoTable() {
  const { version } = require('../../package.json')

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Stage</TableCell>
          <TableCell>
            <FlashingGreenDot />
            {process.env.VERCEL_ENV ?? 'DEV'}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Version</TableCell>
          <TableCell>{version}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Commit</TableCell>
          <TableCell>
            <Link
              href={`https://www.github.com/owfm/${process.env.VERCEL_GIT_REPO_SLUG}/commit/${process.env.VERCEL_GIT_COMMIT_SHA}`}
            >
              {process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7)}
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
