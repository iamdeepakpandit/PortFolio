import Link from 'next/link'
import React from 'react'

const Me = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h2 className='font-mono text-2xl sm:text-3xl text-center text-cyan-50 mb-8'>
        More about me
      </h2>
      <div className='font-mono text-sm sm:text-base text-slate-300 space-y-6'>
        <p>
          I am a full stack developer based in Ghaziabad, pursuing a Bachelor of Computer Application (BCA).
          I am focused more on learning backend infrastructure, web3, and genai.
        </p>
        <p>
          Dreaming up ideas and making them come true is where my passion lies.
        </p>
        <p>
          I am a Casual Runner 🏃and Fitness Seeker. 
        </p>
        <p>
          Outside of programming, i enjoy doing Rapping, singing, and writing.
        </p>
      </div>
      <style >{`
        .glow-effect {
          text-shadow: 0 0 4px rgba(34, 211, 238, 0.6);
        }
        .glow-effect:hover {
          text-shadow: 0 0 8px rgba(34, 211, 238, 0.8);
        }
      `}</style>
    </div>
  )
}

export default Me;
