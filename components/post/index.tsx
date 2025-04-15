import type { Post } from '../../lib/get-posts'
import Page from '../page'
import Navigation from './navigation'

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

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
          __html: `${escapeHtml(html)}`,
        }}
      />

      <Navigation previous={previous} next={next} />
    </Page>
  )
}

export default Post
