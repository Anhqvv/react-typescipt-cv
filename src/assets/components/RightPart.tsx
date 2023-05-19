import HomeCV from 'components/content/homecv'
import About from 'components/content/about'
import Skill from 'components/content/skills/skill'
import Project from 'components/content/project'
import Contact from './contact'
interface IProps {
  hideLeftPart: boolean
  setHideLeftPart: (value: boolean) => void
}
const RightPart = (props: IProps) => {
  const { hideLeftPart, setHideLeftPart } = props
  return (
    <div
      className={
        hideLeftPart ? 'arlo_tm_rightpart opened' : 'arlo_tm_rightpart'
      }
    >
      <div className='rightpart_inner'>
        <HomeCV />
        {/* <!-- ABOUT  --> */}
        <About />
        {/* <!-- /ABOUT  --> */}

        {/* <!-- SKILLS  --> */}
        <Skill />
        {/* <!-- /SKILLS  --> */}
        {/* <!-- SERVICES  --> */}
        <Project />
        {/* <!-- /SERVICES  --> */}

        {/* <!-- CONTACT & FOOTER  --> */}
        <Contact />
        {/* <!-- /CONTACT & FOOTER  --> */}
      </div>
    </div>
  )
}

export default RightPart
