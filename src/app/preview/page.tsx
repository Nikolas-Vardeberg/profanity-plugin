"use client"

import Demo from "@/components/Demo";
import { useState } from "react";


const page = () => {
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState(null);
   
    const handleSubmit = async (event) => {
       event.preventDefault();
   
       try {
         const res = await fetch('https://vector.profanity.dev', {
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

    return(
        <div>
            <Demo />
        </div>
    )
}

export default page