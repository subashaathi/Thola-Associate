import React from 'react'

const Footer = () => { 
  return (
    <div className='flex justify-around flex-col gap-2 sm:flex-row bg-gray-800 py-5 items-center'>
      
      <p className='rounded-md px-3 py-2 text-sm font-medium text-gray-300'>All rights reserved.Copyright @Thola Associates</p>

      <div className='flex'>
        <a href=""> <img src="/facebook_icon.png" alt='' width={40}/></a>
        <a href=""> <img src="/twitter_icon.png" alt='' width={40}/></a>
        <a href=""> <img src="/googleplus_icon.png" alt='' width={40}/></a>
      </div>
    </div>
  )
}

export default Footer