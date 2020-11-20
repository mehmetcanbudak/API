import Link from 'next/link'

import style from './nav.module.css'

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a className={style.link}>Homepage</a>
      </Link>
      <Link href="/about">
        <a className={style.link}>About</a>
      </Link>
    </nav>
  )
}

export default Navigation
