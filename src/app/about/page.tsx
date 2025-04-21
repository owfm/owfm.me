import FlashingGreenDot from '@/components/flashing-green-dot'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Page from '../../components/page'

const About = () => {
  const { version } = require('../../../package.json')
  return (
    <Page>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
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
            <TableCell>{process.env.VERCEL_GIT_COMMIT_SHA}</TableCell>
          </TableRow>
        </TableBody>
      </Table>{' '}
      <p>
        This site is forked from Dan Abramov's brilliant{' '}
        <strong>
          <a href="https://www.whatthefuck.is">https://www.whatthefuck.is.</a>
        </strong>
      </p>
      <p>
        You can find his project on github{' '}
        <a href="https://github.com/gaearon/whatthefuck.is">
          <strong>here</strong>
        </a>{' '}
        and you can find mine{' '}
        <a href="https://github.com/owfm/olliemansellcouk">
          <strong>here.</strong> I have rewritten the majority of the code while
          migrating it to Typscript and Next 15, keeping the original design.
        </a>
      </p>{' '}
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        2025 Todo List
      </h3>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Upgrade to Next.js 15 App Router ✅</li>
        <li>Migrate to Bun ✅</li>
        <li>Releases via Github actions / vercel CLI ✅</li>
        <li>Migrate CSS Modules {'=>'} Tailwind / Shadcn 🟧</li>
        <li>Refresh design 🟥</li>
        <li>Add reading list 🟥</li>
      </ul>
    </Page>
  )
}

export default About
