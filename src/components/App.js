// create your App component here
import React, { useEffect, useState } from 'react'

export default function App() {
    const [randomDog, setRandomDog] = useState(null)
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((r) => r.json())
        .then((data)=> {
            setRandomDog(data.message)
        })
    },[])
  return (
    <div>
        <p>Here's a Mutina</p>
       <img src= {randomDog} alt='Random dog'/>
    </div>
  )
}
