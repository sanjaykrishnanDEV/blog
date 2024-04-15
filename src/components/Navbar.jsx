import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between shadow-lg p-6'>
        <h1>userflow</h1>
        <ul className=' list-none flex'>
        <li className='me-2'>Product</li>
        <li className='me-2'>Pricing</li>
        <li className='me-2'>Demo</li>
        <li className='me-2'>Sign in</li>
        <li className=' hover:bg-green-500'>
          <button className=''>
            Free trial
         </button>
        </li>
        </ul>

    </div>
  )
}

export default Navbar;