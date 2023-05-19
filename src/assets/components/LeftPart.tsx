import desktopLogo from 'assets/img/logo/desktop-logo1.png'

import { AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
const LeftPart = () => {
  return (
    <div className='arlo_tm_leftpart_wrap'>
      <div className='leftpart_inner'>
        <div className='logo_wrap'>
          <a href='#'>
            <img src={desktopLogo} alt='desktop-logo' />
          </a>
        </div>
        <div className='menu_list_wrap'>
          <ul className='anchor_nav'>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#skill'>Skill</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='leftpart_bottom'>
          <div className='social_wrap'>
            <ul>
              <li>
                <a href='#'>
                  <BsFacebook size={30}/>
                </a>
              </li>
              <li>
                <a href='#'>
                  <AiFillLinkedin size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a className='arlo_tm_resize' href='#'>
          <i className='xcon-angle-left'></i>
        </a>
      </div>
    </div>
  )
}

export default LeftPart
