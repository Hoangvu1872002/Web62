import React, { useContext } from 'react'
import contactContext from '../../contexts/ContactContext/ContactContext'
const ContactCart = ({ card}) => {
  const ctxContact = useContext(contactContext)
  return (
    <div>
      {card.name}
      <button onClick={()=> ctxContact.setContactForm(card)}>Edit</button>
      <button onClick={()=> console.log(card)}>Delete</button>
    </div>
  )
}

export default ContactCart
