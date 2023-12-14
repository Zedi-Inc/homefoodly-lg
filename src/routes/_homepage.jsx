import React from 'react'
import Hero from '../components/Hero'
import Form from '../components/Form'


export default function Homepage() {
  return (
    <div className='lg:flex gap-12'>
    <Hero />
    <Form />
    </div>
  )
}
