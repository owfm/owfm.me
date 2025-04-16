import Page from '../src/components/page'
import Posts from '../src/components/posts-list'
import getPosts from '../src/lib/get-posts'

export default async function Main() {
  const posts = getPosts()
  return (
    <Page description="Ollie Mansell CV">
      <article>
        <Posts posts={posts} />
      </article>
    </Page>
  )
}
