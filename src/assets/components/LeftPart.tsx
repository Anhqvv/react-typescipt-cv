import desktopLogo from 'assets/img/logo/desktop-logo1.png'
import { useEffect, useState } from 'react'

import { AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

interface IProps {
  hideLeftPart: boolean
  setHideLeftPart: (value: boolean) => void
}
const LeftPart = (props: IProps) => {
  const { hideLeftPart, setHideLeftPart } = props
  const [activeTab, setActiveTab] = useState('home')
  const handleHideLeftPart = () => {
    setHideLeftPart(!hideLeftPart)
  }
  useEffect(() => {
    const section = document.querySelector(`#home`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const hanldeScroll = (
    tab: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const section = document.querySelector(`#${tab}`)
    e.preventDefault()
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  const handleActive = (
    tab: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setActiveTab(tab)
    hanldeScroll(tab, e)
  }
  return (
    <div
      className={
        hideLeftPart ? 'arlo_tm_leftpart_wrap opened' : 'arlo_tm_leftpart_wrap'
      }
    >
      <div className='leftpart_inner'>
        <div className='logo_wrap'>
          <a href='#'>
            <img src={desktopLogo} alt='desktop-logo' />
          </a>
        </div>
        <div className='menu_list_wrap'>
          <ul className='anchor_nav'>
            <li>
              <a
                href='#home'
                className={activeTab === 'home' ? 'active' : ''}
                onClick={e => handleActive('home', e)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#about'
                className={activeTab === 'about' ? 'active' : ''}
                onClick={e => handleActive('about', e)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#skills'
                className={activeTab === 'skills' ? 'active' : ''}
                onClick={e => handleActive('skills', e)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className={activeTab === 'projects' ? 'active' : ''}
                onClick={e => handleActive('projects', e)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className={activeTab === 'contact' ? 'active' : ''}
                onClick={e => handleActive('contact', e)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='leftpart_bottom'>
          <div className='social_wrap'>
            <ul>
              <li>
                <a href='#'>
                  <BsFacebook size={30} />
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
        <a
          className={
            hideLeftPart ? 'arlo_tm_resize opened' : 'arlo_tm_resize  '
          }
          href='#'
        >
          <i
            className={hideLeftPart ? 'xcon-angle-right' : 'xcon-angle-left'}
            onClick={() => handleHideLeftPart()}
          ></i>
        </a>
      </div>
    </div>
  )
}

export default LeftPart
