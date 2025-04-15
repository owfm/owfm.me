import cn from 'classnames'
import NextLink from 'next/link'

import styles from './index.module.css'

type Props = {
  external?: boolean
  href: string
  children: React.ReactNode
  className?: string
  underline?: boolean
  gray?: boolean
}

const Link = ({
  external,
  href,
  children,
  className = '',
  underline = false,
  gray = false,
  ...props
}: Props) => {
  const c = cn(className, styles.reset, {
    [styles.gray]: gray,
    [styles.underline]: underline,
  })

  return (
    <>
      <NextLink
        className={c}
        href={href}
        target={external ? '_blank' : '_self'}
        {...props}
      >
        {children}
      </NextLink>
    </>
  )
}

export default Link
