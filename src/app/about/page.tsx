import Page from '../../components/page'

const About = () => {
  return (
    <Page>
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
          <strong>here.</strong> I have rewritten the majority of the code while migrating it to Typscript and Next 15. I do love the original design though.
        </a>
      </p>

        {' '}
        <h3>2025 Todo List</h3>
        <ul className=''>
          <li>Upgrade to Next.js 15 App Router ✅</li>
          <li>Migrate to Bun ✅</li>
          <li>Releases via Github actions / vercel CLI ✅</li>
          <li>Migrate CSS Modules => Tailwind / Shadcn 🟧</li>
          <li>Refresh design 🟥</li>
          <li>Add reading list 🟥</li>
        </ul>
    </Page>
  )
}

export default About
