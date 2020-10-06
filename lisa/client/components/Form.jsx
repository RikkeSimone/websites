import React from 'react'
import emailjs from 'emailjs-com'
import swal from 'sweetalert'

export default function Contact () {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_IheyscHX', e.target, 'user_hQ17gs7uFMylKIJedkqox')
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
      <div className="contactcontainer">
          <h2>Contact Pawsome Pack Adventures</h2>
          <div className="contactform">
          <form className="contactform" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <div className="field">
            <input type="text" name="user_name" className="input" placeholder=" What's your name?" />
            </div>
            <div className="field">
            <input type="text" name="user_number" className="input" placeholder=" What number can I contact you on?"/>
            </div>
            <div className="field">
            <input type="email" name="user_email" className="input" placeholder=" Which email can I reply to?"/>
            </div>
            <div className="field">
            <textarea name="message" className="inputmsg" placeholder=" How can I help?"></textarea>
            </div>
            <button className="menubutton" type="submit" value="Send">Submit</button>
        </form>
        </div>
    </div>
  )
}