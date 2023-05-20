import BackEnd from './backend'
import FrontEnd from './frontend'

const Skill = () => {
  return (
    <div className='arlo_tm_section ' id='skill' style={{paddingTop:50}} >
      <div className='container'>
        <div className='arlo_tm_title_holder' >
          <h3>Skills</h3>
          <span style={{marginBottom: 20, display:'block'}}>Front-end and Back-end</span>
      <FrontEnd />
      <BackEnd />
        </div>
      </div>
    </div>
  )
}

export default Skill
