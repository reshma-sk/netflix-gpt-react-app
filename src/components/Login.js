import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm,setIsSignInForm] = useState(true)

  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
  }
  
  return (
    <div>
        <Header/>
        <div className='absolute rounded-lg'>
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IE-en-20241014-TRIFECTA-perspective_f7c30d00-1997-4b51-9702-100f7ede5ff4_small.jpg"
           alt="background-img" />
        </div>
        <form className='w-3/12 mx-auto my-36 absolute bg-black rounded-lg p-12 right-0 left-0 text-white bg-opacity-85'>
          <h1 className='font-bold text-3xl'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
          {!isSignInForm && <input type="text" placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700'/>}
          <input type="text" placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700' />
          <input type="text" placeholder='Password'  className='p-2 my-4 w-full bg-gray-700'/>
          <button className='p-2 my-4 bg-red-950 w-full rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? 'New To NetFlix?, Sig up now' : 'Already Registered? Sign in now'}</p>
        </form>
        
        

    </div>
  )
}

export default Login