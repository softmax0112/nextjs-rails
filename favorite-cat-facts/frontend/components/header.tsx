import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <header className='space-x-8 text-lg text-blue-400 bg-slate-700'>
      <Link href='/'>
        Home
      </Link>
      <Link href='/favorites'>
        Favorites
      </Link>
    </header>
  )
}

export default Header