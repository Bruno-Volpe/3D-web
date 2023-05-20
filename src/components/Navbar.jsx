import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'


const Navbar = () => {
  const [active, setActive] = useState("")
  const [showMenu, setShowMenu] = useState(true)

  const showLinkTree = () => {
    return (
      navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`${
            active === nav.title ? "text-white" : "text-secondary"
          } hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive(link.title)}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))
    )
  }

  return (
    <nav
      className={
        `
          ${styles.paddingX}
          w-full
          flex
          items-center
          py-5
          fixed
          top-0
          z-20
          bg-primary
        `
      }
    >

      <div className='w-full flex justify-between itens-center max-w-7x1 mx-auto' >
        <Link 
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
          <p class="text-white-100 text-[18px] cursor-pointer font-bold">
            Bruno
            <span class="text-tertiary sm:block hidden">Volpe</span>
          </p>
        </Link>
        
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {showLinkTree()}
        </ul>

        <div className='sm:hidden flex felx-1 justify-end'>
            <img src={showMenu ? close : menu} alt='menu' id="menu"
            className='w-[28px] h-[28px] cursor-pointer' 
            onClick={() => setShowMenu(!showMenu)}/>

            <div id="menu" className={
              showMenu 
              ? 'flex p-6 bg-gradient-to-r from-gray-800 to-gray-900 absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl ' 
              : 'hidden'
            } >
              <ul className='list-none flex-row gap-10'>
                {showLinkTree()}
              </ul>
            </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar