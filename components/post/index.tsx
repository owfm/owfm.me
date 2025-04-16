import type { Post } from '../../lib/get-posts'
import Page from '../page'
import Navigation from './navigation'

type Props = {
  title: string
  slug: string
  html: string
  previous: Post
  next: Post
}

const Post = ({ title, slug, html, previous, next }: Props) => {
  return (
    <Page slug={slug} title={title}>
      <article
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />

      <Navigation previous={previous} next={next} />
    </Page>
  )
}

export default Post
