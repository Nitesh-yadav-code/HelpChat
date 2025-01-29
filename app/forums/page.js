import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const topics = [
  {
    text: 'Java',
    img: '/maxresdefault.jpg',
    desc: 'Java is a high-level, class-basedg.',
    slug: 'java-discussion-new'
  },
  {
    text: 'Python',
    img: '/maxresdefault.jpg',
    desc: 'Python is an interpreted, an ereijw fdjjsfai .',
    slug: 'python-discussion-new'
  },
  {
    text: 'JavaScript',
    img: '/maxresdefault.jpg',
    desc: 'JavaScript, often a',
    slug: 'javascript-discussion-new'
  },
  {
    text: 'Ruby',
    img: '/maxresdefault.jpg',
    desc: 'Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.',
    slug: 'ruby-discussion-new'
  },
  {
    text: 'Lang',
    img: '/maxresdefault.jpg',
    desc: 'Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.',
    slug: 'lang-discussion-new'
  },
  {
    text: 'TEST',
    img: '/maxresdefault.jpg',
    desc: 'Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.',
    slug: 'test-discussion-new'
  },
  {
    text: 'Go',
    img: '/maxresdefault.jpg',
    desc: 'Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson.',
    slug: 'go-discussion-new'

  }
]
const Forum = () => {
  return (
    <div className='container w-full max-w-7xl  mx-auto my-10'>
      <h1 className='font-semibold text-5xl text-slate-700 gap-2 text-center mb-10'>Discussion Form</h1>
      <div className='flex flex-wrap  justify-center'>

        {topics.map((topic, index) => (
          <div key={index} className="card max-w-sm bg-white rounded overflow-hidden shadow-lg m-4">
            <Image src={topic.img} alt='Java' width={74} height={74} className='' />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{topic.text}</div>
              <p className='text-gray-700 text-base'>{topic.desc}</p>
              <Link href={`/forum/${topic.slug}`}>
              <Button className='  my-2 flex  mx-auto'>Discuss Now</Button>
              </Link>
            </div>
          </div>
        ))}


      </div>
    </div>
  )
}

export default Forum

{/* <div className='container w-full max-w-4xl mx-auto my-28'>
<h1 className='text-5xl text-center font-bold mb-10'>Discussion Forum</h1>
<div className='flex flex-wrap justify-center'>
  {topics.map((topic, index) => (
    <div key={index} className='max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white'>
      <Image src={topic.img} alt={topic.text} width={800} height={400} className='w-full' />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{topic.text}</div>
        <p className='text-gray-700 text-base'>{topic.desc}</p>
      </div>
    </div>
  ))}
</div>
</div> */}