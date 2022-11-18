import React, { useEffect, useState } from 'react'

const QuoteFavorites = () => {
  const [quotes, setQuotes] = useState<string[]>([]);
  useEffect(() => {
    fetch('https://localhost:3000/api/favorites')
    .then((res) => res.json() )
    .then((res) => setQuotes(res) )
  }, [])
  

  return (
    <section className='box-border w-screen h-screen'>
      <section className='flex flex-col w-full h-full p-4 space-x-3 bg-green-400 border border-gray-300 border-solid rounded-lg'>
        <h1>QuoteFavorites</h1>
        <ul className='p-2 bg-white border-black rounded border-border-solid'>
          {quotes.map((q, i) => (
            <li className='flex border border-solid border-black/60'>
              <h3>{q}</h3>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default QuoteFavorites