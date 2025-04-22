import SiteInfoTable from '@/components/site-info-table'
import Page from '../../components/page'

const About = () => {
  const { version } = require('../../../package.json')
  return (
    <Page>
      <div className="flex flex-col gap-16">
        <SiteInfoTable />
        <section>
          <p>
            This site is forked from Dan Abramov's brilliant{' '}
            <strong>
              <a href="https://www.whatthefuck.is">
                https://www.whatthefuck.is.
              </a>
            </strong>
          </p>
          <p>
            You can find his project on github{' '}
            <a href="https://github.com/gaearon/whatthefuck.is">
              <strong>here</strong>
            </a>{' '}
            and you can find mine{' '}
            <a href="https://github.com/owfm/olliemansellcouk">
              <strong>here.</strong> I have rewritten the majority of the code
              while migrating it to Typscript and Next 15, keeping the original
              design.
            </a>
          </p>{' '}
        </section>
        <section>
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
        </section>
      </div>
    </Page>
  )
}

export default About
