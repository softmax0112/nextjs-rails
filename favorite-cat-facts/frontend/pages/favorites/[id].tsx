import useSWR from 'swr'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react';

import Header from '../../components/header';
import { IQuote } from './index';

interface IQuoteFull extends IQuote {
  created_at: string;
  updated_at: string;
}

const FavoriteQuote: FC<IQuoteFull> = ({ favorite }) => {
  console.log("C>>", favorite)
  const {id, ...rest} = favorite;

  return (
    <section className='box-border w-screen h-screen'>
      <section className='flex flex-col w-full h-full p-4 space-x-3 bg-green-400 border border-gray-300 border-solid rounded-lg'>
        <Header />
        <h1>Quote Favorites -- Select</h1>
        <h2>Post: #{id}</h2>
        {Object.entries(rest).map(([k, v]) => (
          <section className='flex flex-row'>
            <div>{k}</div>
            <div>{v}</div>
          </section>
        ))}
      </section>
    </section> 
  )
}

export async function getServerSideProps(context) {
  // const { data } = useSWR('http://localhost:3000' + context.resolvedUrl, fetcher)
  const data = await fetch('http://backend:3000' + context.resolvedUrl, {
    headers: {
      "Accept": "application/json"
    },
  });
  const favorite = await data.json()
  console.log('S>> ', favorite)

  return { props: favorite };
}

export default FavoriteQuote 
