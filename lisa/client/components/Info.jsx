import React, {useState} from 'react'

//data
import packs from '../../server/data/packs'
import members from '../../server/data/members'

const Info = () => {

  const [readMore, setReadMore]= useState(false)

  const pack = 
  packs.map(pack => {
    return (
      <div className="packcontainer">
        <p><strong>{pack.day}</strong></p>
        <p><strong>Pick up:</strong> {pack.time}</p>
        <p><strong>Available spots:</strong> {pack.availability}</p>
        <p><strong>Pups who attend:</strong> {pack.membersnum}</p>
        </div>
        )})

  const extraContent =
  members.map(member => {
            return (
                <div className='showContainer'>
                <img className='memberimg' src={member.image}/>
                <p><strong>{member.name}</strong></p>
                <p> Joined us in {member.joined}</p>
                <p><strong>Days {member.name} come along:</strong> 
                <p>{member.day}</p></p>
                <p><strong>Favorite activity:</strong> {member.activity} </p>
                </div>
            )
        })

  const linkName = readMore?'Click here to close << ':'Click here to meet the pack >> '


  return (
    <>
    <div className='infocontainer'>
        <h2>The packs and prices</h2>
        <p>
          The current price is no more than <strong>$20 per walk of roughly 45 minutes</strong>. This includes pick up and drop off.
        </p>

        <p>
          We currently service Beach Haven, Birkdale, Glenfield, Hillcrest, Birkenhead and Northcote Point.
        </p>
            
        <p>
          If you feel none of the current pack options quite match or there's no available spots, please do get in touch
          and I can see if there's a possibility to meet your requirements. 
        </p>

        <p>
          {pack} 
          <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
          {readMore && extraContent}  
        </p>
    </div>
    </>
  )
}

export default Info
