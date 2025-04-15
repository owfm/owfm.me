'use client'

import cn from 'classnames'
import { memo, useState } from 'react'

import Link from '../link'
import styles from './text.module.css'

type Props = {
  title: string
  href: string
  category: keyof typeof categories
}

// prettier-ignore
const categories = {
  'profile': ' ',
  'education': ' ',
  'dev': ' ',
  'employment': ' ',
  'key skills': ' ',
  'culture': ' '
} as const

const request = ['🙋🏻', '🙋🏼', '🙋🏽', '🙋🏾', '🙋🏿']

export const TextEntry = memo(({ title, href, category }: Props) => {
  const [diceRoll] = useState(Math.random())
  const emoji = category
    ? categories[category]
    : request[Math.round(diceRoll * (request.length - 1))]
  return (
    <li className={cn(styles.item, !category && styles.request)}>
      <Link href={href} className={styles.link}>
        {emoji && (
          <span
            role="img"
            aria-label={category}
            title={category}
            className={styles.category}
          >
            {emoji}
          </span>
        )}
        <span className={cn(styles.title, 'clamp', !category && styles.new)}>
          {title}
        </span>
      </Link>
    </li>
  )
})
