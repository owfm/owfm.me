import Post from '../../components/post'
import getPosts from '../../lib/get-posts'
import renderMarkdown from '../../lib/render-markdown'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const posts = getPosts()
  const postIndex = posts.findIndex((p) => p.slug === slug)
  const post = posts[postIndex]
  const { body, ...rest } = post

  return (
    <Post
      previous={posts[postIndex - 1] || null}
      next={posts[postIndex + 1]}
      html={await renderMarkdown(body)}
      {...rest}
    />
  )
}

export const generateStaticParams = async () => {
  const paths = getPosts().map((p) => ({ slug: `/${p.slug}` }))
  return paths
}
