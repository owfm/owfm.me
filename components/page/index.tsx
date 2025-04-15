import Footer from '../footer'
import Header from '../header'
import styles from './index.module.css'

type Props = {
  header?: boolean
  footer?: boolean
  slug?: string
  title?: string
  description?: string
  image?: string
  showSlug?: boolean
  children?: React.ReactNode
}

const Page = ({ slug, title, showSlug = true, children }: Props) => {
  return (
    <div className={styles.wrapper}>
      {showSlug && (
        <Header
          slug={showSlug && (slug || '')}
          title={(showSlug && title) || ''}
        />
      )}
      <main className={styles.main}>{children}</main>
      <Footer slug={slug || ''} />
    </div>
  )
}

export default Page
