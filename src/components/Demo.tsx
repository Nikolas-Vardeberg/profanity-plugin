'use client'

{/*import { checkProfanity } from '@/actions'
import { useMutation } from '@tanstack/react-query' */}

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Demo = () => {
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
   
    const handleSubmit = async (event) => {
       event.preventDefault();
       setError(null); // Reset error state
   
       try {
         const res = await fetch('https://profanity-api-demo.nikolaserkjempekull.workers.dev/', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ message: inputValue }),
         });
   
         if (!res.ok) {
           throw new Error('Network response was not ok');
         }
   
         const data = await res.json();
         setResponse(data);
       } catch (error) {
         console.error('There was a problem with your fetch operation:', error);
         setError(error);
       }
    };
   
    const renderProfanityMessage = (score) => {
       if (score > 0.95) {
         return <span>🚨🚨😱😱 OH GOD, VERY BIG PROFANITY DETECTED!! 🚨🚨😱😱 </span>;
       } else if (score > 0.9) {
         return <span>🚨😱 BIG PROFANITY DETECTED!! 🚨😱 </span>;
       } else if (score > 0.88) {
         return <span>🚨 PROFANITY DETECTED!! 🚨 </span>;
       } else if (score >= 0.85) {
         return <span>😱 PRETTY SURE THIS IS A PROFANITY 😱</span>;
       } else if (score < 0.85) {
         return <span>Crispy clean input, no profanities :)) 👍👍</span>;
       }
       return null;
    };

  return (
    <div className='flex flex-col gap-5 items-center'>
      <div className='relative w-full rounded-xl mt-12 bg-gray-900/5 p-4 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <span className='inline-flex items-center rounded-md bg-zinc-700 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-blue-400/20'>
              POST
            </span>
            <div className='h-[20px] w-px bg-zinc-300' />
            <p className='break-all'>https://stopbanning.no</p>
          </div>
        </div>
        <div className='relative flex flex-col sm:flex-row items-center gap-2 mt-6 h-full sm:h-9'>
          <Input
            className='bg-white h-9'
            value={inputValue}
            onChange={({ target }) => {
              setInputValue(target.value);
            }}
            placeholder='definitly not profanity'
          />
          <Button
            className='h-9 w-full sm:w-fit'
            onClick={handleSubmit}
          >
            Profanity check
          </Button>
        </div>

        <div className='h-32 mt-4 rounded-lg border-2 border-dashed border-zinc-300 text-sm flex items-center justify-center'>
          {response ? (
            <div className='flex flex-col items-center text-center'>
              <p className='font-bold'>
                {renderProfanityMessage(response.score)}
              </p>

              <p className='text-sm text-zinc-700'>
                score (higher is worse): {response.score.toFixed(3)}
              </p>
            </div>
          ) : (
            <p className='text-zinc-700'>Results will be shown here</p>
          )}
        </div>

        {error && (
          <p className='text-red-600 text-sm mt-2'>
            <span className='font-semibold'>Error:</span> {error}
          </p>
        )}
      </div>
    </div>
  )
}

export default Demo