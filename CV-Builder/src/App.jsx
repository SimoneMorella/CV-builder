import { useState } from 'react'
import PersonalInfo from './components/personalInfo'

function App() {
  

  return (
    <>
    <div className='min-w-[800px]'>
      <h1 className="text-3xl text-red-600 font-bold underline border-blue-400 text-center">Hello world!</h1> 
      <PersonalInfo />
    </div>
    <div className='min-w-[800px]'>
      previewCV
    </div>
    </>
  )
}

export default App
