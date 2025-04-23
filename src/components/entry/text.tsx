'use client'

import cn from 'classnames'
import { memo } from 'react'

import Link from '../link'
import styles from './text.module.css'

type Props = {
  title: string
  href: string
}

export const PageLink = memo(({ title, href }: Props) => {
  return (
    <li className={cn(styles.item)}>
      <Link href={href} className={styles.link}>
        <span className={cn(styles.title, 'clamp')}>{title}</span>
      </Link>
    </li>
  )
})
