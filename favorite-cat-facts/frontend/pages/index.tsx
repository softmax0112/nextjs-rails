import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Header from '../components/header';

const Home: NextPage = () => {
  const [fact, setFact] = useState<string | undefined>(undefined);
  const [catPicture, setCatPicture] = useState<any | undefined>(undefined);
  const [currentSaved, setCurrentSaved] = useState<boolean>(false);
  console.log(fact)
  
  function onClick() {
    fetch("https://meowfacts.herokuapp.com")
    .then(res => res.json())
    .then(res => {
      setFact(res.data[0])
      setCurrentSaved(false)
    })
  }

  function addToFaves() {
    const fetchJson = {};
    fetchJson.quote = fact;
    fetch("http://localhost:3000/favorites", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(fetchJson)
    })
    .then(res => {
      setCurrentSaved(true)
      console.log(res)
      return res.statusText
    })
    .catch(err => console.log({result: 'failure', message: err}));
  }

  // how to get most recent record to delete??
  function removeFromFaves() {
    fetch("http://localhost:3000/favorites", {
      method: 'DELETE',
      headers: {
        "Accept": "application/json"
      },
    })
    .then(res => {
      setCurrentSaved(false)
      return res.statusText
    })
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
      <Header />
      <section className='flex flex-col items-center justify-center p-20'>
        <img width={400} height={400} src={catPicture} /> 
        <blockquote>{fact}</blockquote>
        <section className='w-full mt-5 text-base'>
          <button 
            type='reset' 
            onClick={onClick}
            className='border border-black border-solid rounded-lg'
          >
            Get new quote
          </button>
          <button type='submit' 
            onClick={
              currentSaved
              ? removeFromFaves
              : addToFaves
            }
            className='border border-black border-solid rounded-lg'
          >
            {currentSaved ? 'Remove Favorite' : 'Favorite'}
          </button>
        </section>
      </section>
    </section>
  )
}

export default Home
