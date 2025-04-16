import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { z } from 'zod'

const FrontMatterSchema = z.object({
  title: z.string(),
  slug: z.string(),
  category: z.string(),
  order: z.number(),
})

const PostSchema = z.object({
  title: z.string(),
  slug: z.string(),
  category: z.string(),
  body: z.string(),
  order: z.number(),
})
export type Post = z.infer<typeof PostSchema>

const MatterParseSchema = z.object({
  data: FrontMatterSchema,
  content: z.string(),
})

export default () => {
  let dir
  try {
    dir = fs.readdirSync('./posts/')
  } catch (err) {
    // No posts yet
    return []
  }
  const posts = dir
    .filter((file) => path.extname(file) === '.md')
    .map((file) => {
      const postContent = fs.readFileSync(`./posts/${file}`, 'utf8')
      const { data, content } = MatterParseSchema.parse(matter(postContent))

      return PostSchema.parse({
        ...data,
        body: content,
        title: data.title.replace(' ', ' '),
      })
    })
    .filter(Boolean)
    .sort((a, b) => a.order - b.order)

  return posts
}
