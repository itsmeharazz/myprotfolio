import { Navbar } from './navbar'

function Header() {
  return (
    <div className='w-full bg-black fixed z-10 left-0 right-0 top-0 h-20'>
          <header className='container text-white h-16 flex justify-between items-center mx-auto'>
               <h2>Meharazul Islam</h2>
               <Navbar/>

          </header>
    </div>
  )
}

export default Header