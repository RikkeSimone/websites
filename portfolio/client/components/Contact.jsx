import React from 'react'
import emailjs from 'emailjs-com'
import swal from 'sweetalert'

export default function Contact () {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_vmo6kel', e.target, 'user_hQ17gs7uFMylKIJedkqox')
      .then(() => {
        swal({
          title: "Thank you!",
          text: "I will get back to you soon!",
          icon: "success",
          button: "Awesome"
        })
  })
}
        return (
        <div className='contact-container' id="contact">
          <div className="spacer">
            <img className="spacerimg" src="../../images/spacer4.jpg" />
          </div>
          <div className="contactcontent">
          <div className="contactme">
            <h2>Check me out...</h2>
            <a target="_blank" href="https://github.com/RikkeSimone"><img className='github' src={'/images/github.png'} /></a>
            <a target="_blank" href="https://www.linkedin.com/in/rsjorgensen/"><img className='linkedin' src={'/images/linkedin.png'} /></a>
          </div>
          <form className="contactform" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <div className="field">
            <input type="text" name="user_name" className="input" placeholder=" Name?" />
            </div>
            <div className="field">
            <input type="text" name="user_number" className="input" placeholder=" Contact Number?"/>
            </div>
            <div className="field">
            <input type="email" name="user_email" className="input" placeholder=" Email?"/>
            </div><br></br>
            <div className="field">
            <textarea name="message" className="inputmsg" placeholder=" How can I help?"></textarea>
            </div><br></br> 
            <button className="contactbutton" type="submit" value="Send"><h3>Submit</h3></button>
        </form>
      </div>
      </div>
      )
    }