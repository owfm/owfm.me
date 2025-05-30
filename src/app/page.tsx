import Bio from '../components/bio'
import Page from '../components/page'
import Posts from '../components/posts-list'
import getPosts from '../lib/get-posts'

export default async function Main() {
  const posts = getPosts()
  return (
    <Page description="Ollie Mansell CV">
      <article>
        <Bio />
        <Posts posts={posts} />
      </article>
    </Page>
  )
}
