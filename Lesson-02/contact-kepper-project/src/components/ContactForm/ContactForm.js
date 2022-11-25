import React, { useContext, useState } from 'react'
import { PERSONAL, PROFESSIONAL } from '../../configs/constants'
import contactContext from '../../contexts/ContactContext/ContactContext'
import { initialValues } from '../../pages/HomePage/HomePage'

// const initialValues = {
//   name: "",
//   email: "",
//   phone: "",
//   type: ""
// }
const ContactForm = (props) => {

  const {onAddContact, contactForm, setContactForm}=props
  const ctxContact = useContext(contactContext)

  // const [contactForm, setContactForm] = useState(initialValues)

  const { name, email, phone, type } = contactForm
  const onChangeHandler =(event)=>{
    const value = event.target.value
    const name = event.target.name

    setContactForm(
      {
        ...contactForm, [name]:value
      }
    )
  }

  const onSubmitHandler = (event)=>{
    event.preventDefault()
    // console.log(contactForm)
    // ctxContact.contacts.forEach(item => {
    //   if(item.id===contactForm.id){
    //     setContactForm()
    //   }
    // });

    onAddContact(contactForm)
    setContactForm(initialValues)
  }

  const isDisabledSubmitButton =!name || !email || !phone || !type 

  return (
    <div className='contact-form-wrapper'>
      <h4 className='text-center'>Add Contact</h4>
      <form onSubmit={onSubmitHandler} action="POST">
        <div className="mb-3">

          <div className="mb-3">
            <label htmlFor="name" className="form-label">fullname</label>
            <input className="form-control" id="name" name="name" value={name} onChange={onChangeHandler} />
          </div>

          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={email} onChange={onChangeHandler} />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input className="form-control" id="phone" name="phone" value={phone} onChange={onChangeHandler} />
        </div>

        <p>Contact type</p>

        <div className='mb-3'>
          <div className='d-flex'>
            <div className="form-check me-3">
              <input className="form-check-input" type="radio" name="type" id="personalType" value={PERSONAL}
                onChange={onChangeHandler}
                checked={type === PERSONAL} />
              <label className="form-check-label" htmlFor="personalType">
                personal
              </label>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="radio" name="type" id="professionalType" value={PROFESSIONAL}
              onChange={onChangeHandler}
              checked={type === PROFESSIONAL} />
              <label className="form-check-label" htmlFor="professionalType">
                professional
              </label>
            </div>
          </div>

        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={isDisabledSubmitButton}>Submit</button>
      </form>
    </div>

  )
}

export default ContactForm
