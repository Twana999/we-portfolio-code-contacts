import React from 'react'
import ContactDetails from './ContactDetails'


const contacts = [
    {name:'Jonique Costa',
    avatar: 'https://source.unsplash.com/mEZ3PoFGs_k/400x400'
},    {name:'Jonique Costa',
avatar: 'https://source.unsplash.com/mEZ3PoFGs_k/400x400'
},    {name:'Jonique Costa',
avatar: 'https://source.unsplash.com/mEZ3PoFGs_k/400x400'
},    {name:'Jonique Costa',
avatar: 'https://source.unsplash.com/mEZ3PoFGs_k/400x400'
},
]

export default function ContactList() {
  return (
    <ul>
        {contacts.map((contact)=>{
            return <ContactDetails name={contact.name} avatar={contact.avatar}></ContactDetails>
        })}
    </ul>
  )
}
