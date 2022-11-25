import React, {useState, useEffect} from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import contactContext from '../../contexts/ContactContext/ContactContext'


const contactData = [
    {
      id: 1,
      name: "Jill Johnson",
      email: "jill@gmail.com",
      phone: "111-111-1111",
      type: "personal",
    },
    {
      id: 2,
      name: "Sara Watson",
      email: "sara@gmail.com",
      phone: "222-222-2222",
      type: "personal",
    },
    {
      id: 3,
      name: "Harry White",
      email: "harry@gmail.com",
      phone: "333-333-3333",
      type: "professional",
    }
]

export const initialValues = {
  name: "",
  email: "",
  phone: "",
  type: ""
}

const HomePage = () => {
    const [contacts, setconstacts] = useState([])
    const [contactForm, setContactForm] = useState(initialValues)


    useEffect(()=>{
        setconstacts(contactData)
    },[])

    const onAddContact =((contact)=>{
     const index = contacts.findIndex((item)=> item.id===contact.id)
     if(index >= 0){
      const newContact = [...contacts]
      newContact.splice(index, 1, contact)
      setconstacts(newContact)
     }
      setconstacts((prev)=>[...prev, {...contact, id: new Date().toDateString()}])
    })
  return (
   <contactContext.Provider value={{contacts, setContactForm}}>
    <div className='row'>
        <div className='col-12 col-md-6'>
            <ContactForm onAddContact={onAddContact} contactForm={contactForm} setContactForm={setContactForm}/>
        </div>

        <div className='col-12 col-md-6'>
            <ContactList />
        </div>
    </div>
   </contactContext.Provider>
  )
}

export default HomePage
