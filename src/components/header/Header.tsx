import './Header.css';
import { LuHeart } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import { TbShoppingBagMinus } from 'react-icons/tb';
import { HiOutlineUser } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  return (
    <header>
      <div className="container justify-between py">
        <div className='flex menu-items'>
          <FiMenu size={24} className='menu-icon' />
          <div className='img-container'>
            <img src='/Vector.png' alt="logo" className='img-cover' />
          </div>
        </div>
        <h1 className='logo-text'>LOGO</h1>
        <div className='flex list-items'>
          <div>
            <RiSearch2Line size={24} color='#292D32' className='icons' />
          </div>
          <div>
            <LuHeart size={24} color='#292D32' className='icons' />
          </div>
          <div>
            <TbShoppingBagMinus size={24} color='#292D32' className='icons' />
          </div>
          <div>
            <HiOutlineUser size={24} color='#292D32' className='hidden' />
          </div>
          <div>
            <h3 className='hidden'>ENG</h3>
          </div>
        </div>
      </div>

      <div className='nav-items hidden'>
        <ul >
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </header>
  )
}

export default Header