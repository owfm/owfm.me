'use client'
import Link from 'next/link'
import { useMounted } from '../../lib/use-mounted'

import useTheme from '../../lib/theme'
import Moon from '../icons/moon'
import Sun from '../icons/sun'
import styles from './header.module.css'

const Header = ({ slug, title }: { slug: string; title: string }) => {
  const isMounted = useMounted()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <span>
          <Link
            href="/"
            aria-label="Navigate Home"
            className={slug ? styles.home : styles.slug}
          >
            ollie mansell
          </Link>
          <span className={styles.tagline}>
            &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;{'  '}
            {slug ? (
              <b>
                <span style={{ color: 'var(--accent)' }}>{title}</span>
              </b>
            ) : (
              <>CV&nbsp;</>
            )}
          </span>
        </span>
        <button
          className={styles.command}
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {isMounted &&
            (theme === 'light' ? (
              <Moon color="var(--fg)" size={30} key="icon-light" />
            ) : (
              <Sun color="var(--fg)" size={30} key="icon-dark" />
            ))}
        </button>
      </div>
    </nav>
  )
}

export default Header
