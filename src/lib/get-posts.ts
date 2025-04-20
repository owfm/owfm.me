import { Dirent, readdirSync, readFileSync } from 'fs'
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
    dir = readdirSync(path.join(process.cwd(), 'src', 'md'), {
      withFileTypes: true,
    })

    console.log(dir)
  } catch (err) {
    console.error('Error reading directory:', err)
    return []
  }
  const posts = dir
    .filter((file: Dirent) => path.extname(file.name) === '.md')
    .map((file) => {
      const postContent = readFileSync(
        path.join(process.cwd(), 'src', 'md', file.name),
        'utf8',
      )
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
