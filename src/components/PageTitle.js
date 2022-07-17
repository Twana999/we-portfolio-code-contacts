import PreviousMap from 'postcss/lib/previous-map'
import React from 'react'

export default function PageTitle(props) {
  return (
    <h2 className='text-2xl mb-3'>{props.title}</h2>
  )
}
