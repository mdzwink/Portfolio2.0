import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [webService, setWebService] = useState(false)
  const [imageryService, setImageryService] = useState(false)
  const [otherService, setOtherService] = useState(false)
  
  return (
    <form action="#" className="contact-form">
      <label>Send me a message below or <br/> email me @ mdzwink@gmail.com</label>
      <input type="text" placeholder='name' value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
      <p>'What services are you looking for?'</p>
      <input type="checkbox" id='web-service' name='web-service' value={webService}  onChange={e => setWebService(e.target.value)} />
      <label>'Website'</label>
      <input type="checkbox" id='imagery-service' name='imagery-service' value={imageryService} onChange={e => setImageryService(e.target.value)} />
      <label>'Photography/Vidiography'</label>
      <input type="checkbox" id='other-service' name='other-service' value={otherService} onChange={e => setOtherService(e.target.value)} />
      <label>'Other'</label>
      <button>Submit</button>
    </form>
  )
}

export default ContactForm;