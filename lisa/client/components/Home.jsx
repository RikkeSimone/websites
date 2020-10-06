import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <>
    <div className='homecontainer'>
        <h2>Come and join Pawsome Pack Adventures!</h2>
        <p>For just $20 per walk your pup can be a part of the pack if you live in 
          Beach Haven, Birkdale, Glenfield, Hillcrest, Birkenhead or Northcote Point.</p>
        <img className='packlisa' src={'/images/packlisa.jpg'} />
        <div className='lisainfo'>
          {/* <img className='lisa' src={'/images/lisa.png'} /> */}
        <p>Kia Ora! My name is Lisa and I'm a professional dog walker. 
          Incorporating my love for dogs, fitness and the outdoors, 
          I offer beach and bush pack adventures. 
          I have many years of experience with dogs and pack walking,
          and love being able to allow dogs the experience to socialise, 
          run free and play within a pack situation.
        </p>
        </div>
        
    </div>
    </>
  )
}

export default Home
