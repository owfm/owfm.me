import { Post } from '../../lib/get-posts'
import Link from '../link'

import styles from './navigation.module.css'

type Props = {
  previous: Post
  next: Post
}

const Previous = ({ previous, next }: Props) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.previous}>
        {previous && (
          <Link href={`/${previous.slug}`} gray>
            <div className={styles.title}>← {previous.title}</div>
          </Link>
        )}
      </div>

      <div className={styles.next}>
        {next && (
          <Link href={`/${next.slug}`} gray>
            <div className={styles.title}>{next.title} →</div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Previous
