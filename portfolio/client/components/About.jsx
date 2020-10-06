import React, { Component } from 'react'

class About extends Component {
    state = {}
    render () {
        return <div className='about-container' id="about">
          <div className="aboutall">
          <div className="aboutcontent">
            <h2>HELLO THERE</h2><br></br>
            <p>Welcome to not only my online portfolio, but also my wee online playground!</p><br></br>

             <p>My name is Rikke and I am a trained full stack developer. Web development has been an interest 
              of mine for years, which finally pushed me to transition into tech this year, 
              turning my web development hobby into a full time career. 
              </p><br></br>
            
            <p>Commended for being approachable and caring within a team environment, as well as being extremely 
              forward thinking and always developing new ideas, I aim towards providing web development solutions which 
              benefit my clients and colleagues alike.
            </p> <br></br>
            
            <p>I am always seeking new challenges and interesting web development projects to work on so feel free to contact me with any queries you might have. Whether if you're an employer seeking 
              a long term permanent developer or just in who is in dire need of a website, I am here to help.</p>
             </div> 

             <div className="skills">

              <h3>SKILLSET INCLUDES</h3> <br></br>
            <ul>
              <li>Git/GitHub</li>
              <li>HTML5/CSS3</li>
              <li>JavaScript</li>
              <li>Node.js, Express.js</li>
              <li>React.js/Redux/Redux Thunk</li>
              <li>RESTful JSON API’s.</li>
              <li>Jest/manual testing/Cypress E2E automated testing tool</li>
              <li>Microsoft Office</li>
            </ul>  
          </div>
          </div>
      </div>
    } 
}

export default About