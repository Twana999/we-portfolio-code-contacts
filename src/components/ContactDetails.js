import React from 'react'

export default function ContactDetails(props) {
  return (
    <div className='flex items-center  mb-4 shadow-md w-60 p-2 bg-cyan-200 rounded-md '>
        <div><img className='rounded-full w-16 h-16' src={props.avatar} /></div>
        <div className='ml-3'>{props.name}</div>
    </div>
  )
}
