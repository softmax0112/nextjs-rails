import type { NextPage } from 'next'
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [fact, setFact] = useState<string[] | undefined>(undefined);
  const [catPicture, setCatPicture] = useState<any | undefined>(undefined);
  const controller = new AbortController();

  function onClick() {
    fetch("https://meowfacts.herokuapp.com")
    .then(res => res.json())
    .then(res => {
      setFact(res.data[0])
    })
  }

  function addToFaves() {
    fetch("https://localhost:3000/api/favorites", {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fact)
    })
    .then(res => res.statusText)
    .catch(err => console.log({result: 'failure', message: err}));
  }

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
    .then(res => res.json())
    .then(data => {
      setFact(data.data[0])
    })

  }, [])

  useEffect(() => {
    fetch("https://cataas.com/cat")
    .then(res => res.blob())
    .then(res => {
      const imageObjURL = URL.createObjectURL(res);
      setCatPicture(imageObjURL)
    })
  }, [])
  
  return (
    <section className='box-border w-screen h-screen bg-red-200'>
      <section className='flex flex-col items-center justify-center'>
        <img width={400} height={400} src={catPicture} /> 
        <blockquote>{fact}</blockquote>
        <section>
          <button type='reset' onClick={onClick}>Get new quote</button>
          <button type='submit' onClick={addToFaves}>
            {"Add to "}
            <Link
              href='/favorites'
            >
              favorites
            </Link>
          </button>
        </section>
      </section>

    </section>
    
  )
}

export default Home
