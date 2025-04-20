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
          <strong>here.</strong>

          <p>
            In 2025, this fork was migrated to Next v15 and I am migrating away
            from CSS modules to use tailwindcss.
          </p>
        </a>
      </p>
    </Page>
  )
}

export default About
