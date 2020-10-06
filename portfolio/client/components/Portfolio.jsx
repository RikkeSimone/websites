import React from 'react'

const Portfolio = () => {
        return (
        <div className='portfolio-container' id="portfolio">
          <div className="spacer">
            <img className="spacerimg" src="../../images/spacer1.jpg" />
          </div>

              <div className="content1">
                <div className="portinfo">
                <h3>Pawsome Pack Adventures</h3>
                <div className="portimgeffect">
                <img className="portfolioimg" src="../../images/portfolio/pawsomepackadventures.jpg" />
                </div><br></br>
                <p>A website for a pack walking business</p><br></br>
                <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, Node.js, React, Redux, EmailJS, SweetAlert, Cypress (E2E testing), Webpack</p>
                <br></br>
                <a target="_blank" href="http://pawsomepackadventures.co.nz"><button className="portfoliobutton">Website</button></a>
                <a target="_blank" href="https://github.com/RikkeSimone/pawsome-pack-adventures"><button className="portfoliobutton">GitHub Repo</button></a>
                <a target="_blank" href="https://github.com/RikkeSimone/pawsome-pack-adventures/projects/1"><button className="portfoliobutton">Kanban</button></a>
                </div>
            </div>
            
            <div className="content2">
            <div className="portinfo">
                <h3>Kiwi Roadies</h3>
                <div className="portimgeffect">
                <img className="portfolioimg" src="../../images/portfolio/kiwiroadies-front.jpg" />
                </div><br></br>
                <p>An interactive roadtrip planner</p><br></br>
                <p><strong>Tech Stack:</strong> JavaScript, Node.js, Bootstrap, React, Redux, Redux Thunk, 
                  Cypress (E2E testing), Heroku, Express, Superagent, Jest, React Map GL, D3, Webpack, GitHub Actions, MapBox, Proj4</p>
                  <br></br>
                  <a target="_blank" href="https://kiwiroadies.herokuapp.com/"><button className="portfoliobutton2">Website</button></a>
                  <a target="_blank" href="https://github.com/RikkeSimone/Kiwi-Roadies"><button className="portfoliobutton2">GitHub Repo</button></a>
                  <a target="_blank" href="https://github.com/matai-2020/Kiwi-Roadies/projects/1"><button className="portfoliobutton2">Kanban</button></a>
                  </div>
            </div>
            </div>
        )}

export default Portfolio