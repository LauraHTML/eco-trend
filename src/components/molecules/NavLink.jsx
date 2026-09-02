import React from 'react'

const NavLink = ({href, link}) => {
  return (
    <a className='transition duration-300 ease-in-out hover:text-primary hover:underline hover:decoration-wavy' href={href}>{link}</a>
  )
}

export default NavLink
