import { Post } from '../../lib/get-posts'
import { TextEntry } from '../entry/text'
import styles from './index.module.css'

type Props = {
  posts: Array<Post>
}

const Posts = ({ posts }: Props) => {
  return (
    <>
      <ul className={styles.container}>
        {posts
          .sort((a, b) => a.order - b.order)
          .map((post) => {
            return (
              <TextEntry
                key={`post-item-${post.slug}`}
                href={post.slug}
                category={post.category as any}
                title={`${post.title}`}
              />
            )
          })}
      </ul>
    </>
  )
}

export default Posts
