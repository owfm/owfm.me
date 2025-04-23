import Post from '../../components/post'
import getPosts from '../../lib/get-posts'
import renderMarkdown from '../../lib/render-markdown'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let posts = getPosts()
  let thisPost = posts.find((p) => p.slug === slug)

  return {
    title: thisPost?.category,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!slug) return null

  const posts = getPosts()
  const postIndex = posts.findIndex((p) => p.slug === slug)

  if (postIndex === -1)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Page not found</h1>
      </div>
    )

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
