import React from 'react'
import { SocialIcons } from '../components/SocialIcons'

export function Footer() {
  return (
    <footer className='h-64 bg-red pt-10'>
      <div className='w-5/6 mx-auto'>
        <SocialIcons />
        <div className='md:flex justify-center md:justify-between text-center'>
          <p className='font-playfair font-semibold text-2xl text-yellow'> Christian Esquivel </p>
          <p className='font-playfair text-md text-yellow'> © 2024 Esquivel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
