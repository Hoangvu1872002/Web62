import React, { useContext, useState } from 'react'
import contactContext from '../../contexts/ContactContext/ContactContext'
import ContactCart from '../ContactCard/ContactCart'

const ContactList = () => {
  const ctxContact = useContext(contactContext)
  const [search, setSearch] = useState('')

  const filterContacts = ctxContact.contacts.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div>
      <input
      type="text"
      value={search}
      onChange={(event)=> setSearch(event.target.value)}
      />
      {filterContacts.map((item)=>(
        <ContactCart key ={item.id} card={item}/>
      ))}
    </div>
  )
}

export default ContactList
