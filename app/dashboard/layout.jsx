import React from 'react'
import Header2 from './_component/Header'

function Dashboardlayout({children}) {
  return (
    <div>
        <div className='mx-5 md:mx-20 lg:mx-36'>
        {children}
        </div>
        </div>
  )
}

export default Dashboardlayout