import React from 'react'

export function SocialIcons() {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>

      <a
      className='hover:opacity-50 transition duration-500'
        href="https://www.linkedin.com/in/jeremy-ang/"
        target="_blank"
        rel="noreferrer">
        <img
          src="assets/linkedin.png"
          alt="linkedin-link"
          className='w-8 h-8 cursor-pointer'
        />
      </a>

      <a
        href="https://twitter.com/JeremyAng"
        target="_blank"
        rel="noreferrer">
        <img
          src="assets/twitter.png"
          alt="twitter-link"
          className='w-8 h-8 cursor-pointer'
        />
      </a>

      <a
        href="https://github.com/JeremyAng"
        target="_blank"
        rel="noreferrer">
      </a>
        <img
          src="assets/facebook.png"
          alt="github-link"
          className='w-8 h-8 cursor-pointer'
        />

      <a
        href="https://www.instagram.com/jeremyang/"
        target="_blank"
        rel="noreferrer">
        <img
          src="assets/instagram.png"
          alt="instagram-link"
          className='w-8 h-8 cursor-pointer'
        />
      </a>


    </div>
  )
}
