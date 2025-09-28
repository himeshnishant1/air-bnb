import React from 'react'

function Footer() {
  return (
    <div className='grid gird-cols-1 md:grid-cols-4 space-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Inverstors</p>
            <p>Airbnb Plus</p>
            <p>Airbnd Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Its a pretty awseome clone</p>
            <p>Referrals accepted</p>
            <p>Test it</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>React</p>
            <p>Presents</p>
            <p>The Full</p>
            <p>Airbnb </p>
            <p>Project</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Center</p>
            <p>Trust & Saftey</p>
            <p>Say Hi YouTube</p>
            <p>Easier  Eggs</p>
            <p>For the Win</p>
        </div>
    </div>
  )
}

export default Footer
