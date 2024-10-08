import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='shadow bg-black text-slate-50 font-extrabold'>
      <Container>
        <nav className='flex'>
            <Link to='/'>
              <Logo />
            </Link>
          <div className="ml-auto flex">
          <ul className='md:flex'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name} className='w-auto'>
                <button
                onClick={() => navigate(item.slug)}
                className='md:px-6 md:py-2 mx-auto duration-200 hover:bg-blue-100 hover:text-slate-950 animate-pulse hover:animate-bounce rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
          </div>
        </nav>
        </Container>
    </header>
  )
}

export default Header