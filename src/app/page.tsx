import Page from '../components/page'
import Posts from '../components/posts-list'
import getPosts from '../lib/get-posts'

export default async function Main() {
  const posts = getPosts()
  console.log('on main with ' + posts.length + ' posts')
  return (
    <Page description="Ollie Mansell CV">
      <article>
        <Posts posts={posts} />
      </article>
    </Page>
  )
}
