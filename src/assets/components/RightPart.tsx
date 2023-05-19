import HomeCV from 'components/content/homecv'
import About from 'components/content/about'
import Skill from 'components/content/skills/skill'
import Project from 'components/content/project'
import Contact from './contact'

const RightPart = () => {
  return (
    <div className='arlo_tm_rightpart'>
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
