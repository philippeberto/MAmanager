import React, { useState } from 'react'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'


const Header = () => {
  const { user, error, isLoading } = useUser()
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const nclose = () => {
    setNotificationOpen(false)
  }

  const ddclose = () => {
    setDropdownOpen(false)
  }

  const open = () => {
    setSideBarOpen(true)
  }
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
      {user && (
        <div className='float-right'>
          {user.name}

        </div>
      )}
      <div className="flex items-center">
        <button onClick={open} className="text-gray-500 focus:outline-none lg:hidden">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round"></path>
          </svg>
        </button>

      </div>

      <div className="flex items-center">
        <div className="relative">
          <button onClick={() => setNotificationOpen(old => !old)}
            className="flex mx-4 text-gray-600 focus:outline-none">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              </path>
            </svg>
          </button>

          <div onClick={nclose}
            className={"fixed inset-0 h-full w-full z-10" + notificationOpen ? ' block ' : ''} ></div>

          {notificationOpen && <div className={"absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-10"}>
            <a href="#"
              className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2">
              <img className="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                alt="avatar" />
              <p className="text-sm mx-2">
                <span className="font-bold" href="#">Sara Salah</span> replied on the <span
                  className="font-bold text-indigo-400" href="#">Upload Image</span> artical . 2m
                                </p>
            </a>
            <a href="#"
              className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2">
              <img className="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
                alt="avatar" />
              <p className="text-sm mx-2">
                <span className="font-bold" href="#">Slick Net</span> start following you . 45m
                                </p>
            </a>
            <a href="#"
              className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2">
              <img className="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                alt="avatar" />
              <p className="text-sm mx-2">
                <span className="font-bold" href="#">Jane Doe</span> Like Your reply on <span
                  className="font-bold text-indigo-400" href="#">Test with TDD</span> artical . 1h
                                </p>
            </a>
            <a href="#"
              className="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2">
              <img className="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=398&amp;q=80"
                alt="avatar" />
              <p className="text-sm mx-2">
                <span className="font-bold" href="#">Abigail Bennett</span> start following you . 3h
                                </p>
            </a>
          </div>}
        </div>

        <div className="relative">
          <button onClick={() => setDropdownOpen(dropdownOpen => !dropdownOpen)}
            className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
            {user && (
              <img className="h-full w-full object-cover"
                src={user.picture}
                alt="Your avatar" />
            )}
          </button>

          <div onClick={ddclose} className={"fixed inset-0 h-full w-full z-10" + dropdownOpen ? ' block ' : ''}
          ></div>

          {dropdownOpen && <div x-show="dropdownOpen"
            className={
              "absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10"
            }
          >
            <Link href="/api/auth/logout">
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Sair</a>
            </Link>

          </div>}
        </div>
      </div>
    </header>
  )
}

export default Header